### Schema

USE bachelormajorsdb;

CREATE TABLE bachelor_majors
(
	id int NOT NULL AUTO_INCREMENT,
	major varchar(100) NOT NULL,
	degree varchar (50) NOT NULL,
    campus varchar (4),
    campus2 varchar (4),
    campus3 varchar (4),
    campus4 varchar (4),
    campus5 varchar (4),
    campus6 varchar (4),
	PRIMARY KEY (id)
);