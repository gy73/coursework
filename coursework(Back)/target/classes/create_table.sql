CREATE TABLE public.users
(
    id serial primary key,
    mail varchar(255) not null,
    password varchar(255) not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null
)

commit;

insert INTO users (mail, password,first_name,last_name)
VALUES ('1','1','1','1')

select * from users