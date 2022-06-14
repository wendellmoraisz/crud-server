import mysql from "mysql2/promise";

export const connectDB = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Senhadoserver?",
        database: "crud_db",
    });

    return connection;
};