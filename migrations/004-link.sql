-- Up
CREATE TABLE Link (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    link TEXT
);

-- Down
DROP TABLE Link;