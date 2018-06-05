module.exports = function(sequelize, DataTypes) {
  var Major = sequelize.define("Major", {
    major: DataTypes.STRING,
    degree: DataTypes.STRING,
    degreetype: DataTypes.STRING,
    degreerealm: DataTypes.STRING,
    campus: DataTypes.STRING,
    schoolname: DataTypes.STRING,
    campusaddress: DataTypes.STRING,
    enrollment: DataTypes.STRING,
    tuition: DataTypes.TEXT,
    summary: DataTypes.STRING,
    photo: DataTypes.STRING,
    map: DataTypes.STRING,
    website: DataTypes.STRING
  },{
    timestamps: false
  });

  return Major;
};
