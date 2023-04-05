import conn from '../config/connection_db.js'

let getHomepage = (req, res) => {
    let data = []
    conn.query(
        'SELECT * FROM `test_db`',
        function(err, results, fields) {
            data = results.map((row) => row)
            return res.render('main.ejs', {dataUser: data})
        }
        )

}


module.exports = {
    getHomepage
}