var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://yalcindo:password@localhost:5432/';
var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE properties(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, archived BOOLEAN)');
query.on('end', function() { client.end(); });