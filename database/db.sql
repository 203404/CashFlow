
/* Creating database */
CREATE DATABSE dbCashF




/* Creating table for login */
CREATE TABLE login(
    id SERIAL PRIMARY KEY,
    user VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);


/* Creating table for categorias */
CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    clasificacion VARCHAR(255),
    categoria VARCHAR(255),
    sub_categoria VARCHAR(255)
);