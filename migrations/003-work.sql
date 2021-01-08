-- Up
CREATE TABLE Work (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    imagem TEXT,
    titulo TEXT,
    descricao TEXT,
    userId INTEGER REFERENCES User(id)
);

-- Down
DROP TABLE Work;