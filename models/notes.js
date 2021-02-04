
let mysql = require('mysql');
let Sequelize = require('sequelize');

let con = {
    host: process.env.HOST,
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'mysql',
    connectionLimit: 10
};

let sequelize = new Sequelize(con.database, con.username, con.password, con);

let note = sequelize.define('demo', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    key: Sequelize.STRING,
    title: Sequelize.STRING,
    body: Sequelize.STRING
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'demo'
});

exports.create = function (keya, titleb, bodyc) {
    var result = note.build({
        key: keya,
        title: titleb,
        body: bodyc
    });
    result.save().then(function (res) {
        return res;
    }).catch(function (err) {

    });
};
/*return new Promise(function(res,rej){
    let sql = "INSERT INTO `demo`(`key`, `title`, `body`) VALUES('"+key+"','"+title+"','"+body+"')";
    con.query(sql, function(err, results) {
    if (err) throw err;
    //notes = results;
    })
})*/


exports.update = function (id1, key2, title3, body4) {


    note.update({ key: key2, title: title3, body: body4 }, { where: { id: id1 } }).then(res => {

    });


    //return new Promise(function(res,rej){


    //})
    /*return new Promise(function(res,rej){
        let sql = "UPDATE `demo` SET `key` ='"+key+"', `title` = '"+title+"' , `body` ='"+body+"' WHERE id ="+id ;
        con.query(sql, function(err, results) {
            if (err) throw err;
            //notes = results;
        })
    })*/

}

exports.read = function (id) {

    var result = note.findAll({ where: { id: id } }).then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
    return result;
    /*return new Promise(function(res,rej){
        let sql = "SELECT * FROM `demo` WHERE id ="+id;
        con.query(sql, function(err, results) {
            if (err) throw err;
            res(results);
        })
    });*/

}

exports.keys = function () {
    var result = note.findAll().then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
    return result;
    /*return new Promise(function(res,rej){
        let sql = "SELECT * FROM `demo`";
        con.query(sql, function(err, results) {
            if (err) throw err;
            res(results);
        })
    });*/
}

exports.id = function (key, title, body) {
    var result = note.findAll({ where: { key: key, title: title, body: body }, attributes: ['id'] }).then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
    return result;
    /*return new Promise(function(res,rej){
        let sql = "SELECT `id` FROM `demo` WHERE `key` ='"+key+"' AND `title` = '"+title+"' AND `body` ='"+body+"' ";
        con.query(sql, function(err, results) {
            if (err) throw err;
            res(results);
        })
    });*/
}

exports.destroy = function (id) {
    note.destroy({ where: { id: id } }).then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
    /*return new Promise(function(res,rej){
        let sql = "DELETE FROM `demo` WHERE id = "+id;
        con.query(sql, function(err, results) {
        if (err) throw err;
        })
    })*/
}
