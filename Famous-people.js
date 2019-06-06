CREATE TABLE stars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    gender TEXT,
    marriage TEXT);
    
    INSERT INTO stars (name, age, gender, marriage) VALUES ("Lil Xan", 22, "M", "No");
    INSERT INTO stars (name, age, gender, marriage) VALUES ("Logan Paul", 23, "M", "No");
    INSERT INTO stars (name, age, gender, marriage) VALUES ("Jake Paul", 22, "M", "No");
    INSERT INTO stars (name, age, gender, marriage) VALUES ("Sylvester Stallone", 72, "M", "Yes");
     INSERT INTO stars (name, age, gender, marriage) VALUES ("Lil Uzi", 24, "M", "No");
     INSERT INTO stars (name, age, gender, marriage) VALUES ("John Cena", 40, "M", "No");
     INSERT INTO stars (name, age, gender, marriage) VALUES ("Emma watson", 28, "F", "No");
    INSERT INTO stars (name, age, gender, marriage) VALUES ("Christina Aguilera", 36, "F", "No");
    INSERT INTO stars (name, age, gender, marriage) VALUES ("Selena Gomez", 25, "F", "No");
    INSERT INTO stars (name, age, gender, marriage) VALUES ("Queen Latifah", 47, "F", "No");
  INSERT INTO stars (name, age, gender, marriage) VALUES ("The Weekend", 27, "M", "No");

CREATE TABLE typeofceleb (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT);
    
    INSERT INTO typeofceleb (name, type) VALUES ("Lil Xan", "Rapper");
    INSERT INTO typeofceleb (name, type) VALUES ("Logan Paul", "Rapper");
    INSERT INTO typeofceleb (name, type) VALUES ("Jake Paul", "Rapper");
    INSERT INTO typeofceleb (name, type) VALUES ("Sylvester Stallone", "Actor");
     INSERT INTO typeofceleb (name, type) VALUES ("Lil Uzi", "Rapper");
     INSERT INTO typeofceleb (name, type) VALUES ("John Cena", "Actor");
     INSERT INTO typeofceleb (name, type) VALUES ("Emma watson", "Actor");
    INSERT INTO typeofceleb (name, type) VALUES ("Christina Aguilera", "Singer");
    INSERT INTO typeofceleb (name, type) VALUES ("Selena Gomez", "Singer");
    INSERT INTO typeofceleb (name, type) VALUES ("Queen Latifah", "Actor");
  INSERT INTO typeofceleb (name, type) VALUES ("The Weeknd", "Singer");

SELECT name FROM typeofceleb WHERE type = "Singer";    
SELECT name FROM typeofceleb WHERE name IN
(SELECT name FROM stars WHERE age > 40);
SELECT stars.name, typeofceleb.name FROM stars
    JOIN typeofceleb
    ON stars.name = typeofceleb.name
    WHERE stars.name = "Jake Paul";
