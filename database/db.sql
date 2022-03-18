
/* Creating database */
CREATE DATABASE dbCashFlow




/* Creating table for login */
CREATE TABLE login(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE not null,
    password VARCHAR(255) not null,
    rol VARCHAR(255) not null
);


/* Creating table for categorias */
CREATE TABLE categorias(
    id SERIAL PRIMARY KEY,
    categoria VARCHAR(255) not null, /*Los daots de esta columna solo pueden ser 3: ingreso, costo-venta, gasto-aoc*/
    sub_categoria VARCHAR(255) not null
);

/* Creating table for flujo de efectivo */
CREATE TABLE flujo_efectivo(
    id SERIAL PRIMARY KEY,
    es_ingreso boolean not null,
    id_categoria int REFERENCES categorias(id) not null,
    descripcion VARCHAR(255) not null,
    cantidad bigint not null,
    fecha date not null
);
/* Ejemplo de insertción de datos a la tabla flujo de efectivo */
insert into flujo_efectivo (id_categoria,es_ingreso,descripcion, cantidad, fecha) values (1, FALSE,'pago de ...', 20000, '15/3/2022' )



/* Creating table for  indicadores_de_dinero*/
CREATE TABLE indicadores(
    id SERIAL PRIMARY KEY,
    num_sem int not null,
    mes VARCHAR(255) not null,
    descrip VARCHAR(255) not null,
    monto bigint not null,
    tipo_registro VARCHAR (255) NOT NULL
);

/* Ejemplo de insertción de datos a la tabla indicadores*/
insert into indicadores (num_sem,mes,descrip,monto) values (1, 'abril', 'pago' , 500)