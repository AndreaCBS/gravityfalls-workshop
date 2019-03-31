-- Agregar category

INSERT INTO category (
	id,
	description,
	predefined
) 
VALUES
(
	nextval('category_seq'),
	'Especialidad',
	true
);

INSERT INTO category (
	id,
	description,
	predefined
) 
VALUES
(
	nextval('category_seq'),
	'Color',
	false
);

