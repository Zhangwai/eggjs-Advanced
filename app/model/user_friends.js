
module.exports = app => {
  const Sequelize = app.Sequelize;

  const user_friend = app.model.define(
    'user_friends',
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      username: Sequelize.STRING(60),
      friend: Sequelize.STRING(60),
    },
    {
      paranoid: true,
    },
  );
  user_friend.associate = function(models) {
    // associations can be defined here
  };
  return user_friend;
};
