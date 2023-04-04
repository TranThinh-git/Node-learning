import mysql2 from 'mysql2'

const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Toiladev2000@',
    database: 'nodelearning',
})

// conn.connect(err => {

//     if (err) throw err.stack

//     console.log("Connection successful");
// })



export default conn;