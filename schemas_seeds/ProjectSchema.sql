### Schema

DROP DATABASE if exists project3db;
CREATE DATABASE project3db;
USE project3db;

CREATE TABLE associate_majors
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
    campus7 varchar (4),
    campus8 varchar (4),
    campus9 varchar (4),
    campus10 varchar (4),
    campus11 varchar (4),
    campus12 varchar (4),
    campus13 varchar (4),
    campus14 varchar (4),
    campus15 varchar (4),
    campus16 varchar (4),
    campus17 varchar (4),
    campus18 varchar (4),
    campus19 varchar (4),
	PRIMARY KEY (id)
);

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

CREATE TABLE schools_table
(
	id int NOT NULL AUTO_INCREMENT,
	schoolcode varchar(4) NOT NULL,
	schoolname varchar (50) NOT NULL,
    location varchar (50) NOT NULL,
    enrollment varchar (6),
    tuition varchar (8),
    summary varchar (400),
    photo varchar (50),
    map varchar (50),
    website varchar (50),
	PRIMARY KEY (id)
);