SELECT * FROM department;

-- Exercise One to One relationship

-- 2. Create a Boss table with the columns boss_id, boss_name, boss_type (ie.nice, angry, funny ect...), and dept_number:
-- The boss table, has a one to one relationship with the department table:
-- => a department can be managed by only 1 boss, and a boss can manage only 1 department
CREATE TABLE boss (
	boss_id SERIAL PRIMARY KEY,
	boss_name VARCHAR(50) NOT NULL,
	boss_type VARCHAR(50) NOT NULL,
	dept_boss INTEGER REFERENCES department(deptcode) UNIQUE
);
-- 1. Add a few bosses : one for the finance dept, one for sales and one for marketing
INSERT INTO boss(boss_name, boss_type, dept_boss)
VALUES 
	('Greg', 'Happy', (SELECT deptcode FROM department WHERE deptname = 'FINANCE')),
	('Sally', 'Sad', (SELECT deptcode FROM department WHERE deptname = 'SALES')),
	('Mark', 'Angry', (SELECT deptcode FROM department WHERE deptname = 'MARKETING'))
-- 2. What is the type and name of the boss of the dept Finance (show the dept name, not the dept id)
SELECT * FROM boss;
SELECT boss.boss_name, boss.boss_type, department.deptname 
FROM boss 
INNER JOIN department
ON  boss.dept_boss = department.deptcode
WHERE department.deptname = 'FINANCE';
 -- before I inserted this I tried adding from a department
 -- that already was used so there was an error and then
 -- when I added here a new department the id auto-incremented to the next id
INSERT INTO boss(boss_name, boss_type, dept_boss)
VALUES 
	('Barry', 'Excited', (SELECT deptcode FROM department WHERE deptname = 'ADMIN'));
-- before I inserted this I tried adding from a department
-- that already was used so there was an error and then
-- when I added here a new department the id auto-incremented to the next id
INSERT INTO boss(boss_name, boss_type, dept_boss)
VALUES 
	('Derek', 'Cool', (SELECT deptcode FROM department WHERE deptname = 'SOFTWARE'));