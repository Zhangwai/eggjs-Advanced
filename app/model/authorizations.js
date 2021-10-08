
module.exports = app => {
    const Sequelize = app.Sequelize;

    const authorization = app.model.define(
        'authorizations',
        {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            provider: Sequelize.STRING(60), //供应商 第三方是github值就是github
            uid: Sequelize.STRING(60), //该供应商的唯一id
            user_username: Sequelize.STRING(60), //对应自己的数据库users表的username
        },
        {
            paranoid: true,
        },
    );
    authorization.associate = function (models) {
        // associations can be defined here
    };
    return authorization;
};
