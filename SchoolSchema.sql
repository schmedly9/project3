### Schema

DROP DATABASE if exists schoolsdb;
CREATE DATABASE schoolsdb;
USE schoolsdb;

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