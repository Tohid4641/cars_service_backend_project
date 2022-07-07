const dotenv = require('dotenv').config()
// console.log(dotenv.parsed.PORT);
const { PORT , DB_URL } = process.env ;

module.exports={
    PORT,
    DB_URL
}
