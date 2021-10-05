
module.exports = app => {
  const Sequelize = app.Sequelize;
  
  const user = app.model.define(
    'users', //挂载到app.model里面的时候会把Users作为users的key值
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      username: Sequelize.STRING(60),
      nickname: Sequelize.STRING(60),
      password: Sequelize.STRING(64),
      email: Sequelize.STRING(60),
      state: Sequelize.TINYINT,
      phone: Sequelize.STRING(15),
      avatar: Sequelize.STRING(255),
      last_login: Sequelize.DATE,
    },
    {
      paranoid: true,
    },
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
