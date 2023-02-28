INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Liz', 'Lemon', 1, null),
       ('Jack', 'Donaghy', 2, null),
       ('Kenneth', 'Parcell', 3, 1),
       ('Jenna', 'Maroney', 4, 1);

INSERT INTO role (title, salary, department_id)
VALUES
  ('Head Writer', 85000, 1),
  ('Actor', 75000, 2),
  ('Page', 25000, 3),
  ('Producer', 60000, 4);

INSERT INTO department (department_name)
VALUES  ('Management'),
        ('Writers'),
        ('Customer Service'),
        ('Talent');

 