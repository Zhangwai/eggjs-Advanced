
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'user_friends',
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
          unique: false,
          comment: '用户名',
        },
        friend: {
          type: Sequelize.STRING(60),
          allowNull: false,
          unique: false,
          comment: '好友的用户名',
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
    return queryInterface.dropTable('user_friends');
  },
};
