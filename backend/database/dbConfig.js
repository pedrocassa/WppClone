import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})

connection.connect(error => {
    if(error){
        console.log(error);
    }
    else{
        console.log("Connect to mysql");
    }
})

export default connection;