DROP TABLE IF EXISTS blogs;

CREATE TABLE blogs (
    id serial primary key,
    title varchar (30) not null,
    name varchar (20) not null,
    body varchar (2000) not null
);
