DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(60),
    posted_by VARCHAR(60),
    story VARCHAR,
);
