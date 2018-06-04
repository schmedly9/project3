module.exports = function(sequelize, DataTypes) {
  var Major = sequelize.define("major", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Major.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Major.belongsTo(models.School, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Major;
};
