-- Agregar category_value

-- VALORES DE ESPECIALIDADES:

INSERT INTO category_value (
	id,
	category_id,
	description,
	predefined
) 
VALUES
(
	nextval('category_value_seq'),
	1,
	'Analisis',
	true
);

--

INSERT INTO category_value (
	id,
	category_id,
	description,
	predefined
) 
VALUES
(
	nextval('category_value_seq'),
	1,
	'Diseño',
	true
);

--

INSERT INTO category_value (
	id,
	category_id,
	description,
	predefined
) 
VALUES
(
	nextval('category_value_seq'),
	1,
	'Implementacion',
	true
);


-- VALORES DE COLORES:

INSERT INTO category_value (
	id,
	category_id,
	description,
	predefined
) 
VALUES
(
	nextval('category_value_seq'),
	2,
	'Rojo',
	false
);

--

INSERT INTO category_value (
	id,
	category_id,
	description,
	predefined
) 
VALUES
(
	nextval('category_value_seq'),
	2,
	'Verde',
	false
);

--

INSERT INTO category_value (
	id,
	category_id,
	description,
	predefined
) 
VALUES
(
	nextval('category_value_seq'),
	2,
	'Azul',
	false
);
