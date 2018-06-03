var Sequelize = require('sequelize');

var connection = new Sequelize('project3db', 'root', 'root');

var associate_majors = connection.define('associate_majors', {
    major: Sequelize.TEXT,
    degree: Sequelize.TEXT,
    campus: Sequelize.TEXT,
    campus2: Sequelize.TEXT,
    campus3: Sequelize.TEXT,
    campus4: Sequelize.TEXT,
    campus5: Sequelize.TEXT,
    campus6: Sequelize.TEXT,
    campus7: Sequelize.TEXT,
    campus8: Sequelize.TEXT,
    campus9: Sequelize.TEXT,
    campus10: Sequelize.TEXT,
    campus11: Sequelize.TEXT,
    campus12: Sequelize.TEXT,
    campus13: Sequelize.TEXT,
    campus14: Sequelize.TEXT,
    campus15: Sequelize.TEXT,
    campus16: Sequelize.TEXT,
    campus17: Sequelize.TEXT,
    campus18: Sequelize.TEXT,
    campus19: Sequelize.TEXT
});

return associate_majors;

var bachelor_majors = connection.define('bachelor_majors', {
    major: Sequelize.TEXT,
    degree: Sequelize.TEXT,
    campus: Sequelize.TEXT,
    campus2: Sequelize.TEXT,
    campus3: Sequelize.TEXT,
    campus4: Sequelize.TEXT,
    campus5: Sequelize.TEXT,
    campus6: Sequelize.TEXT,
});

return bachelor_majors;

var schools_table = connection.define('schools_table', {
    schoolcode: Seqeuelize.TEXT,
    schoolname: Sequelize.TEXT,
    campusaddress: Sequelize.TEXT,
    enrollment: Sequelize.TEXT,
    tuition: Sequelize.TEXT,
    summary: Sequelize.TEXT,
    photo: Sequelize.TEXT,
    map: Sequelize.TEXT,
    website: Sequelize.TEXT
});

return schools_table;

connection.sync();