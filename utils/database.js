const { Pool } = require('pg');

// set production variabe. This will be called when deployed to a live host
const isProduction = process.env.NODE_ENV === 'production';

// if project has been deployed, connect with the host's DATABASE_URL
// else connect with the local DATABASE_URL
const pool = new Pool({
  connectionString: isProduction
    ? process.env.DATABASE_URL
    : `postgresql://postgres:0000@localhost:5432/crown_87`,
});

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'crown_87',
//   password: '0000',
//   port: 5432,
// });

pool.query('SELECT * FROM category_87', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

module.exports = pool;

// postgres://worufzdpnwpenb:a3209446c7f11dd0412c936a6e5c65b0fed943c785d2d5d5570d9fc0787d5f07@ec2-34-204-128-77.compute-1.amazonaws.com:5432/da9b6ga1i40im7
