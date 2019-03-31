-- categorias

CREATE TABLE category (
	id NUMERIC(19) PRIMARY KEY,
	description VARCHAR(4096) NOT NULL,
	predefined BOOL NOT NULL
);
CREATE SEQUENCE category_seq OWNED BY category.id;

-- categorias_valores

CREATE TABLE category_value (
	id NUMERIC(19) PRIMARY KEY,
	category_id NUMERIC(19),
	description VARCHAR(4096) NOT NULL,
	predefined BOOL NOT NULL
);
ALTER TABLE category_value
    ADD CONSTRAINT category_fk FOREIGN KEY (category_id) REFERENCES category (id);
CREATE SEQUENCE category_value_seq OWNED BY category_value.id;