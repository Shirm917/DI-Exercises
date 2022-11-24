// In Class Exercises 2
const knex = require('knex');
const db = knex({
    client: 'pg',
    connection: {
      host : 'lucky.db.elephantsql.com',
      port : 5432,
      user : 'rladhvow',
      password : '1MYeoWhzcgeJFB0w982PL9zdmTWKc-v2',
      database : 'rladhvow'
    }
  });

//   db.raw("select 1 from products")
//   .then(result => console.log(result.rows))
//   .catch(err => console.log(err));

db.select("id", "name", "price")
.from("products")
// .where({id:2})
.then(result => console.log(result))
.catch(err => console.log(err));
