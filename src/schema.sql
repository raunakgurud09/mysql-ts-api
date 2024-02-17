

-- CREATE DATABASE
CREATE DATABASE notes_app
USE notes_app

-- CREATE TABLE

CREATE TABLE notes(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

