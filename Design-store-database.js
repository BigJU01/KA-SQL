CREATE TABLE Console (id INTEGER PRIMARY KEY, name TEXT, cost REAL, aisle INTEGER);
CREATE TABLE Phone (id INTEGER PRIMARY KEY, brand TEXT, cost REAL, aisle INTEGER);

INSERT INTO Console VALUES (1, "PS4",  300, 1);
INSERT INTO Console VALUES (2, "XBox 1",  300, 1);
INSERT INTO Console VALUES (3, "Nintendo Switch",  500, 1);
INSERT INTO Console VALUES (4, "PC", 5000, 1);

INSERT INTO Phone VALUES (1, "Samsung", 300, 2);
INSERT INTO Phone VALUES (2, "Google", 400, 2);
INSERT INTO Phone VALUES (3, "Apple", 1000, 2);
INSERT INTO Phone VALUES (4, "Fido", 79.99, 2);

SELECT name FROM console;
SELECT cost FROM phone ORDER BY cost;
SELECT SUM(cost) FROM phone
