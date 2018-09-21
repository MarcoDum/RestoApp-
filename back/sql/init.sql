CREATE TABLE restaurants 
( 
    id SMALLINT PRIMARY KEY  AUTO_INCREMENT,  
    name VARCHAR(20),  
    address VARCHAR(100),  
    area VARCHAR(100),  
    city VARCHAR(100),  
    mainCategory VARCHAR(100),  
    secondaryCategory INT,  
    editorial_rating TINYINT ,  
    description TEXT,  
    annotation TEXT ,  
    owner_annotation TEXT ,  
    to_website TEXT ,  
    image_url TEXT  ,  
    latitude FLOAT,  
    longitude FLOAT 
    
); 