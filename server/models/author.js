module.exports = function(sequelize, DataTypes) {
  var Schools= sequelize.define("school", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Schools.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Schools;
};
