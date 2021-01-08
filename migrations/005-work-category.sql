-- Up
CREATE TABLE WorkCategory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workId INTEGER REFERENCES Work(id),
    categoryId INTEGER REFERENCES Category(id) 
);

-- Down
DROP TABLE WorkCategory;