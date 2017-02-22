Place your queries below
SELECT * FROM `students` WHERE `username` = 'ckim';

UPDATE `c1.17db`.`students` SET `email` = 'charleskim@gmail.com' WHERE `students`.`ID` = 1;

INSERT INTO `c1.17db`.`students` (`ID`, `name`, `email`, `age`, `SSN`, `username`, `password`, `joined`, `status`) VALUES (NULL, 'john doe', 'jdoe@gmail.com', '11', '638274932', 'jdoe', SHA1('jcoaiisjkd'), NOW(), '');

DELETE FROM `c1.17db`.`students` WHERE `students`.`ID` = 14;

-- todo_item
-- Select all todo_items made by 1 user of your choice
SELECT * FROM `todo_items` WHERE user_id=1

-- Insert a new todo item into the table by that same user
INSERT INTO `c1.17db`.`todo_items` (`id`, `title`, `details`, `timestamp`, `user_id`) VALUES (NULL, 'prototype', 'details15', CURRENT_TIME(), '1');

-- Delete a todo item by that user
DELETE FROM `c1.17db`.`todo_items` WHERE `todo_items`.`id` = 11;

-- Update a todo item by that user with data of your choice
UPDATE `c1.17db`.`todo_items` SET `details` = 'detail 15' WHERE `todo_items`.`id` = 1;

-- Perform a select to get all information from `users` by using the user's id
SELECT * FROM students WHERE age>20;
SELECT * FROM students WHERE id=5;