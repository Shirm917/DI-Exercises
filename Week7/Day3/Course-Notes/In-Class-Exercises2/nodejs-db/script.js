const knex = require('knex');
const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'gfjhgfjh',
      database : 'dvdrental'
    }
  });

//   db.raw("select * from products")
//   .then(result => console.log(result.rows))
//   .catch(err => console.log(err));

db.select("id", "name", "price")
.from("products")
.then(result => console.log(result))
.catch(err => console.log(err));