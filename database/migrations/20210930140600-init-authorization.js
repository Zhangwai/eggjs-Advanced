
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'authorizations',
      {
        // id是必须加的字段重点啊啊

        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER(11).UNSIGNED,
        },
        provider: {
          type: Sequelize.STRING(60),
          allowNull: false,
          unique: false,
          comment: '第三方供应商',
        },
        uid: {
          type: Sequelize.STRING(60),
          allowNull: false,
          unique: true,
          comment: '第三方返回的唯一id',
        },
        user_username: {
          type: Sequelize.STRING(60),
          allowNull: false,
          unique: true,
          comment: '对应自己数据库的唯一用户名',
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
    return queryInterface.dropTable('authorizations');
  },
};
