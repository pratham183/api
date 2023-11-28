import mysql from "mysql"

export const db = mysql.createConnection({
    host: "echomate-users-db.ckcgkfdjzrbc.us-east-1.rds.amazonaws.com",
    user: "rootuser",
    password: "Echomate",
    database: "echomate-app"
})