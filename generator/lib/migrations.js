
module.exports = () => {
  const fs = require('fs');
  const path = require('path');
  const { fileDisplay } = require('./tools');
  // config文件夹的目录绝对地址
  const configFilesPath = path.resolve(__dirname, '../config');

  fileDisplay(configFilesPath, res => {
    const config = require(res);
    let template = fs.readFileSync(path.join(__dirname, '../template/migrations/20210930140600-init-template.js'), 'utf8');
    // 替换对象名
    template = template.replace(/_objectName_/ig, config.name);

    let fields = '';
    const deleted_at = [];
    // 如果 paranoid 为true，则为逻辑删除，则添加deleted_at字段
    if (config.fields_option.paranoid) {
      deleted_at.push({
        name: 'deleted_at',
        type: 'date',
      });
    }
    const config_fields = config.fields.concat(deleted_at);
    // 循环添加字段
    config_fields.forEach((v, i) => {
      const _length = typeof v.length === 'string' ? `'${v.length}'` : v.length;
      const length = v.length ? `(${_length})` : '';
      const item = {
        [v.name]: {
          type: `Sequelize.${v.type.toUpperCase()}${length}${v.UNSIGNED ? '.UNSIGNED' : ''}`,
          primaryKey: v.primaryKey,
          allowNull: v.allowNull,
          defaultValue: v.defaultValue !== undefined ? `'${v.defaultValue}'` : undefined,
          unique: v.unique,
          comment: v.comment !== undefined ? `'${v.comment}'` : undefined,
          references:
            v.onUpdate !== undefined
              ? {
                model: v.references.model !== undefined ? `'${v.references.model}'` : undefined,
                key: v.references.key !== undefined ? `'${v.references.key}'` : undefined,
              }
              : undefined,
          onUpdate: v.onUpdate !== undefined ? `'${v.onUpdate}'` : undefined,
          onDelete: v.onDelete !== undefined ? `'${v.onDelete}'` : undefined,
        },
      };
      // 清除没有设置的属性
      for (const key in item[v.name]) {
        if (item[v.name][key] === undefined) {
          delete item[v.name][key];
        }
      }
      // console.log(JSON.stringify(item, '', 4));
      fields += JSON.stringify(item, null, 1)
        .replace(/^\{\s+/, '')
        .replace(/\s+\}$/, `,${i === config_fields.length - 1 ? '' : '\n'}`)
        .replace(/"/gi, '');
    });

    template = template.replace(/\$:\s'\{\{fields\}\}',/gi, fields);

    // 添加option
    let createTable_option = '';
    createTable_option += JSON.stringify(config.createTable_option, null, 1)
      .replace(/^\{\s+/, '')
      .replace(/\s+\}$/, '')
      .replace(/"/gi, '');
    if (Object.keys(config.createTable_option).length !== 0) {
      template = template.replace(/\$:\s'\{\{createTable_option\}\}',/gi, createTable_option);
    } else {
      template = template.replace(/\$:\s'\{\{createTable_option\}\}',/gi, '');
    }
    // 写文件
    fs.writeFileSync(path.join(__dirname, '../../', `/database/migrations/20210930140600-init-${config.name}.js`), template);
    console.log('===========>自动生成创建数据库语句成功');
  });
};
