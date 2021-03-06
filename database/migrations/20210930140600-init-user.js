
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER(11).UNSIGNED,
        },
        username: {
          type: Sequelize.STRING(60),
          allowNull: false,
          unique: true,
          comment: '用户名',
        },
        nickname: {
          type: Sequelize.STRING(60),
          comment: '昵称',
        },
        password: {
          type: Sequelize.STRING(64),
          allowNull: false,
          comment: '用户密码',
        },
        email: {
          type: Sequelize.STRING(60),
          unique: true,
          comment: '邮箱',
        },
        age: {
          type: Sequelize.INTEGER(10),
          comment: '年龄',
        },
        sex: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: '2',
          comment: '状态：0.女、1.男、2.保密',
        },
        sign: {
          type: Sequelize.STRING(255),
          comment: '签名',
        },
        state: {
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue: '1',
          comment: '状态：0.停用、1.正常',
        },
        phone: {
          type: Sequelize.STRING(15),
          comment: '手机号',
        },
        avatar: {
          type: Sequelize.STRING(255),
          comment: '头像url',
        },
        last_login: {
          type: Sequelize.DATE,
          comment: '最后登录时间',
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {

      },
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
