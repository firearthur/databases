CREATE DATABASE chat;
USE chat;
CREATE TABLE messages
(
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  messageText varchar(255),
 
  PRIMARY KEY (id)
);
CREATE TABLE users
(
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  PRIMARY KEY (id)
);



/* Create other tables and define schemas for them here! 
-- INSERT INTO burger (name route66, chain burgerlounge, calories 10);
   add auto incremeant
-- create some dummy data for messages
*/




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

