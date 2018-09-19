
CREATE TABLE users ( 
    id INTEGER AUTO_INCREMENT, 
    email VARCHAR(90) UNIQUE, 
    password VARCHAR(90), 
    name VARCHAR(90), 
    lastname VARCHAR(90),
	PRIMARY KEY (id)
);


CREATE TABLE restaurants 
( 
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(90),
	address1 VARCHAR(90) UNIQUE,
	address2 VARCHAR(90),
	area VARCHAR(90),
	city VARCHAR(90),
	mainCategory VARCHAR(90),
	secondaryCategory VARCHAR(90),
	editorial_rating TINYINT,
	description VARCHAR(90),
	annotation TEXT,
	owner_annotation TEXT,
	to_website VARCHAR(90),
	image_url VARCHAR(90),
	latitude FLOAT,
	longitude FLOAT,
	PRIMARY KEY (id)
);

