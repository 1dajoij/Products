let mysql = require('mysql')

let options = {
    host:"localhost",
    user:"root",
    password:"123456",
    database:"yhdm"
}


let con = mysql.createConnection(options);

//建立连接
con.connect((err)=>{
    //如果建立连接失败
    if(err){
        console.log(err)
    }else{
        console.log('数据库连接成功')
    }
})

querySql = (sqlStr, arr) => {
    return new Promise ((resolve, reject) => {
        con.query(sqlStr, arr, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = querySql;