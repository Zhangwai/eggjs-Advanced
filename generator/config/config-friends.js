
module.exports = {
  name: 'user_friend',
  cname: '用户朋友关联表',
  fieldsItemExample: {
    name: 'xx_id',
    type: 'INTEGER',
    length: 11,
    required: true,
    description: '这里是描述', // 供swagger使用
    primaryKey: false, // 是否为主键
    unique: false, // 是否唯一
    allowNull: false, // 是否允许为空
    autoIncrement: false, // 是否自增
    defaultValue: '', // 数据库表中字段的默认值
    comment: '外键', // 数据库表中字段的描述
    // 外键设置
    references: {
      model: 'xxxs', // 外键关联表
      key: 'id', // 外键字段名
    },
    onUpdate: 'NO ACTION', // 外键更新约束 CASCADE RESTRICT SET NULL SET DEFAULT NO ACTION
    onDelete: 'NO ACTION', // 外键删除约束 CASCADE RESTRICT SET NULL SET DEFAULT NO ACTION
  },
  fields: [
    {
      name: 'username',
      type: 'string',
      length: 60,
      min: 2,
      max: 60,
      trim: true,
      required: true,
      description: '用户名', // 供swagger使用
      example: 'Imfdj', // 供swagger使用
      allowNull: false, // 是否允许为空
      unique: false, // 是否唯一
      comment: '用户名', // 数据库表中字段的描述
    },
    {
      name: 'friend',
      type: 'string',
      length: 60,
      min: 2,
      max: 60,
      trim: true,
      required: true,
      description: '好友的用户名', // 供swagger使用
      example: 'Imfdj', // 供swagger使用
      allowNull: false, // 是否允许为空
      unique: false, // 是否唯一
      comment: '好友的用户名', // 数据库表中字段的描述
    },
  ],
  fields_option: {
    paranoid: true,
  },
  createTable_option: {},
};
