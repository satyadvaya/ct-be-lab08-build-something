DROP TABLE IF EXISTS affirmations;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS activities;

CREATE TABLE affirmations (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  quote VARCHAR(512) NOT NULL
);

CREATE TABLE favorites (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username VARCHAR(512) NOT NULL,
  favorite_quote VARCHAR(512) NOT NULL
);

CREATE TABLE activities (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  exercise VARCHAR(512) NOT NULL,
  daily_duration VARCHAR(512) NOT NULL
);
