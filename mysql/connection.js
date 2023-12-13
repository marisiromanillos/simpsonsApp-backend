const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "mrbuildm_marisi_gr",
  password: "wVA$B^-TfZ,_",
  host: "s915.lon1.mysecurecloudhost.com",
  port: 3306,
  database: "mrbuildm_demo-simpsons",
});

function asyncMySql(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = asyncMySql;
