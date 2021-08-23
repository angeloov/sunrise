create table activities (
	id varchar(36) PRIMARY KEY,
	user_id varchar(36) NOT NULL,
	activity_name varchar(64) NOT NULL,
	date date NOT NULL,
	begins_at time NOT NULL,
	ends_at time NOT NULL,
	CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users( "id" )
);