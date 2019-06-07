CREATE TABLE winstons_candy_logs (
	id TEXT PRIMARY KEY,
    status TEXT,
    years_old INTEGER,
    candy_eaten INTEGER,
    reason TEXT
    );
INSERT INTO winstons_candy_logs VALUES (0, "Baby Winston", 0, 0, "");
INSERT INTO winstons_candy_logs VALUES (1, "Baby Winston jr", 1, 10, "Gummed");
INSERT INTO winstons_candy_logs VALUES (2, "Baby Winston Sr", 2, 20, "Gummed");
INSERT INTO winstons_candy_logs VALUES (3, "Baby Winston Sr II", 3, 40, "Gummed");
INSERT INTO winstons_candy_logs VALUES (4, "Toddler Winston", 4, 50, "");
INSERT INTO winstons_candy_logs VALUES (5, "Toddler Winston Jr", 5, 200, "");
INSERT INTO winstons_candy_logs VALUES (6, "Winston", 6, 1028, "");
INSERT INTO winstons_candy_logs VALUES (7, "Winston II", 7, 1007, "");
INSERT INTO winstons_candy_logs VALUES (8, "Winston III", 8, 1015, "");
INSERT INTO winstons_candy_logs VALUES (9, "Winston IV", 9, 1007, "");
INSERT INTO winstons_candy_logs VALUES (10, "Winstween", 10, 1604, "");
INSERT INTO winstons_candy_logs VALUES (11, "Winstween II", 11, 420, "Braces");
INSERT INTO winstons_candy_logs VALUES (12, "Winstween III", 12, 380, "Braces");
INSERT INTO winstons_candy_logs VALUES (13, "Winsteen IV", 13, 700, "Braces");
INSERT INTO winstons_candy_logs VALUES (14, "Winsteen V", 14, 1100, "No Braces");
INSERT INTO winstons_candy_logs VALUES (15, "Winton", 15, 1080, "");
INSERT INTO winstons_candy_logs VALUES (16, "Winton II", 16, 1356, "");
INSERT INTO winstons_candy_logs VALUES (17, "Winton III", 17, 2024, "");
INSERT INTO winstons_candy_logs VALUES (18, "Winton IV", 18, 2689, "");
INSERT INTO winstons_candy_logs VALUES (19, "Winton V", 19, 1256, "");
INSERT INTO winstons_candy_logs VALUES (20, "Winstoneen", 20, 2207, "");
INSERT INTO winstons_candy_logs VALUES (21, "Winstoneen II", 21, 2500, "");
INSERT INTO winstons_candy_logs VALUES (22, "Winstoneen III", 22, 2500, "");
INSERT INTO winstons_candy_logs VALUES (23, "Winstoneen IV", 23, 2500, "");
INSERT INTO winstons_candy_logs VALUES (24, "Winstoneen V", 24, 2500, "");
INSERT INTO winstons_candy_logs VALUES (25, "Wintonny", 25, 2588, "");
INSERT INTO winstons_candy_logs VALUES (26, "Wintonny II", 26, 2440, "");
INSERT INTO winstons_candy_logs VALUES (27, "Wintonny III", 27, 2500, "");
INSERT INTO winstons_candy_logs VALUES (28, "Wintonny IV", 28, 2500, "");
INSERT INTO winstons_candy_logs VALUES (29, "Wintonny V", 29, 2500, "");
INSERT INTO winstons_candy_logs VALUES (30, "Winstony", 30, 2500, "");
INSERT INTO winstons_candy_logs VALUES (31, "Winstony II", 31, 2500, "");
INSERT INTO winstons_candy_logs VALUES (32, "Winstony III", 32, 2500, "");
INSERT INTO winstons_candy_logs VALUES (33, "Winstony IV", 33, 2500, "");
INSERT INTO winstons_candy_logs VALUES (34, "Winstony V", 34, 2500, "");
INSERT INTO winstons_candy_logs VALUES (35, "Whimmley", 35, 1500, "Healthier Eating");
INSERT INTO winstons_candy_logs VALUES (36, "Whimmley II", 36, 1500, "Healthier Eating");
INSERT INTO winstons_candy_logs VALUES (37, "Whimmley III", 37, 1500, "Healthier Eating");
INSERT INTO winstons_candy_logs VALUES (38, "Whimmley IV", 38, 1500, "Healthier Eating");
INSERT INTO winstons_candy_logs VALUES (39, "Whimmley V", 39, 1500, "Healthier Eating");
INSERT INTO winstons_candy_logs VALUES (40, "Winston", 40, 2500, "Non-healthy eating");
INSERT INTO winstons_candy_logs VALUES (41, "Winston II", 41, 2500, "");
INSERT INTO winstons_candy_logs VALUES (42, "Winston III", 42, 2500, "");
INSERT INTO winstons_candy_logs VALUES (43, "Winston IV", 43, 2500, "");
INSERT INTO winstons_candy_logs VALUES (44, "Winston V", 44, 200, "Diet");
INSERT INTO winstons_candy_logs VALUES (45, "WinnySton", 45, 175, "Diet");
INSERT INTO winstons_candy_logs VALUES (46, "WinnySton II", 46, 150, "Diet");
INSERT INTO winstons_candy_logs VALUES (47, "WinnySton III", 47, 125, "Diet");
INSERT INTO winstons_candy_logs VALUES (48, "WinnySton IV", 48, 110, "Diet");
INSERT INTO winstons_candy_logs VALUES (49, "WinnySton V", 49, 100, "Diet");
INSERT INTO winstons_candy_logs VALUES (50, "WhinneySton", 50, 2500, "No diet");

SELECT * FROM winstons_candy_logs;

SELECT status FROM winstons_candy_logs WHERE years_old > 10 OR candy_eaten > 2000;

SELECT years_old, 
    CASE 
        WHEN candy_eaten > 50 THEN "See a Dentist" 
        WHEN candy_eaten > 4 THEN "No, don't eat too much candy tho" 
        ELSE "No"  
    END as "Do you need to see a Dentist?" 
FROM winstons_candy_logs GROUP BY "Do you need to see a Dentist?";

SELECT years_old, SUM(years_old) FROM winstons_candy_logs
