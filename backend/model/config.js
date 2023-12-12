require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectString: 
        process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME,
};

module.exports = dbConfig