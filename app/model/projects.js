
module.exports = app => {
  const Sequelize = app.Sequelize;

  const project = app.model.define(
    'projects',
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING(255),
      parent_id: Sequelize.INTEGER(11),
      manager_id: Sequelize.INTEGER(11),
      project_template_id: Sequelize.INTEGER(11),
      progress: Sequelize.INTEGER(11),
      cover: Sequelize.STRING(255),
      is_private: Sequelize.TINYINT(1),
      is_recycle: Sequelize.TINYINT(1),
      is_archived: Sequelize.TINYINT(1),
      is_auto_progress: Sequelize.TINYINT(1),
      state: Sequelize.TINYINT(1),
      intro: Sequelize.STRING(255),
    },
    {

    },
  );
  project.associate = function(models) {
    // associations can be defined here
  };
  return project;
};
