module.exports = function(sequelize, DataTypes) {
  var Major = sequelize.define("major", {
    title: DataTypes.STRING,
    Degree: DataTypes.STRING,
    DegreeType: DataTypes.STRING,
    DegreeRealm: DataTypes.STRING,
    Campus: DataTypes.STRING,
    SchoolName: DataTypes.STRING,
    CampusAddress: DataTypes.STRING,
    Emrolement: DataTypes.STRING,
    Tuition: DataTypes.INT,
    Summary: DataTypes.STRING, 
    Photo: DataTypes.STRING,
    Map: DataTypes.STRING,
    website: DataTypes.STRING,
    }
  );

  return Major;
};
