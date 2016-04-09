/* Tables for storing chat/forum messages */

CREATE TABLE Chat (
  ID        INT UNSIGNED     NOT NULL   AUTO_INCREMENT, 
  Name      VARCHAR(20)      NOT NULL, 
  Text      TEXT             NOT NULL,
  Time      DATETIME         NOT NULL,
  PRIMARY KEY (ID)
);

