CREATE TABLE "public".users
(
 "id"          varchar(36) NOT NULL,
 firstname     varchar(32) NOT NULL,
 email         varchar(48) NOT NULL,
 hash          varchar(128) NOT NULL,
 salt          varchar(64) NOT NULL,
 refresh_token varchar(256),
 CONSTRAINT PK_users PRIMARY KEY ( "id" )
);

