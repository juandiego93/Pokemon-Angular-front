-- Cracion de tablas 
CREATE TABLE pokemons (
    id int IDENTITY(1,1) PRIMARY KEY,
    name varchar(255) NOT NULL,
    height int,
    weight int
);

CREATE TABLE abilities (
    id int IDENTITY(1,1) PRIMARY KEY,
    en_name varchar(255) NOT NULL,
    es_name varchar(255) NOT NULL,
    ja_name varchar(255) NOT NULL
);

-- Creacion de tabla pivote con ambas llaves primarias 
CREATE TABLE pokemon_abilities (
	
	pok_abilitie_id INT   IDENTITY(1,1) PRIMARY KEY, -- id de la tabla misma
	pokemon_id int NOT NULL, -- Id de la tabla pokemon
	abilitie_id int NOT NULL, -- Id de la tabla abilities

	CONSTRAINT fk_pokemon_id  FOREIGN KEY (pokemon_id)  
	REFERENCES pokemons (id), -- Se hace la relacion de llave foranea a la tabla pokemon

	CONSTRAINT fk_abilitie_id  FOREIGN KEY (abilitie_id) 
	REFERENCES pokemons (id) -- Se hace la relacion de llave foranea a la tabla abilities
)


/* ------------------------------------------------------------------------------- */

-- Consulta para obtener la cantidad de habilidades en orden alfabetico

  SELECT
    en_name AS Habilidad,
    COUNT(abilitie_id) AS Cantidad 
  FROM
    pokemon_abilities
  JOIN
    abilities
  ON
    abilities.id = abilitie_id
  GROUP BY
    abilitie_id, en_name
  ORDER BY
    en_name
  ASC;

  /* ------------------------------------------------------------------------------ */

  -- Consulta que trae los pokemones con inicial 'P'
  SELECT
    p.name,
    pa.pokemon_id
  FROM
    pokemon_abilities AS pa
  JOIN
    pokemons AS p
  ON
    p.id = pa.pokemon_id
WHERE
  p.name LIKE 'P%';
