
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

/* Creating table for flujo de efectivo */
CREATE TABLE flujo_efectivo(
    id SERIAL PRIMARY KEY,
    id_categoria int REFERENCES categorias(id),
    es_ingreso boolean,
    descripcion VARCHAR(255),
    cantidad bigint,
    fecha date
);
/* Ejemplo de insertción de datos a la tabla flujo de efectivo */
insert into flujo_efectivo (id_categoria,es_ingreso,descripcion, cantidad, fecha) values (1, FALSE,'pago de ...', 20000, '15/3/2022' )