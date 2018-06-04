module.exports = function(sequelize, DataTypes) {
  var Schools= sequelize.define("School", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Schools.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Schools.hasMany(models.Major, {
      onDelete: "cascade"
    });
  };

  return Schools;
};
