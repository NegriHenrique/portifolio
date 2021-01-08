-- Up
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    telefone TEXT,
    celular TEXT,
    whatsapp TEXT,
    linkedin TEXT,
    facebook TEXT,
    github TEXT,
    pinterest TEXT,
    apresentacao TEXT,
    sobre TEXT
);

-- Down
DROP TABLE User;