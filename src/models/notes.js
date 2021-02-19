
import mysql from 'mysql';
import Sequelize, { INTEGER, STRING } from 'sequelize';

import { con } from '../config';

import { noteType } from "type";

let sequelize = new Sequelize(con.database, con.username, con.password, con);

let note = sequelize.define('demo',noteType , {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'demo'
});

export default note;
// tách ra service

// export function create(keya, titleb, bodyc) {
//     var result = note.build({
//         key: keya,
//         title: titleb,
//         body: bodyc
//     });
//     result.save().then(function (res) {
//         return res;
//     }).catch(function (err) {

//     });
// }
// /*return new Promise(function(res,rej){
//     let sql = "INSERT INTO `demo`(`key`, `title`, `body`) VALUES('"+key+"','"+title+"','"+body+"')";
//     con.query(sql, function(err, results) {
//     if (err) throw err;
//     //notes = results;
//     })
// })*/


// export function update(id1, key2, title3, body4) {


//     note.update({ key: key2, title: title3, body: body4 }, { where: { id: id1 } }).then(res => {

//     });


//     //return new Promise(function(res,rej){


//     //})
//     /*return new Promise(function(res,rej){
//         let sql = "UPDATE `demo` SET `key` ='"+key+"', `title` = '"+title+"' , `body` ='"+body+"' WHERE id ="+id ;
//         con.query(sql, function(err, results) {
//             if (err) throw err;
//             //notes = results;
//         })
//     })*/

// }

// export function read(id) {

//     var result = note.findAll({ where: { id: id } }).then(function (res) {
//         return res;
//     }).catch(function (err) {
//         console.log(err);
//     })
//     return result;
//     /*return new Promise(function(res,rej){
//         let sql = "SELECT * FROM `demo` WHERE id ="+id;
//         con.query(sql, function(err, results) {
//             if (err) throw err;
//             res(results);
//         })
//     });*/

// }

// export function keys() {
//     var result = note.findAll().then(function (res) {
//         return res;
//     }).catch(function (err) {
//         console.log(err);
//     })
//     return result;
//     /*return new Promise(function(res,rej){
//         let sql = "SELECT * FROM `demo`";
//         con.query(sql, function(err, results) {
//             if (err) throw err;
//             res(results);
//         })
//     });*/
// }

// export function id(key, title, body) {
//     var result = note.findAll({ where: { key: key, title: title, body: body }, attributes: ['id'] }).then(function (res) {
//         return res;
//     }).catch(function (err) {
//         console.log(err);
//     })
//     return result;
//     /*return new Promise(function(res,rej){
//         let sql = "SELECT `id` FROM `demo` WHERE `key` ='"+key+"' AND `title` = '"+title+"' AND `body` ='"+body+"' ";
//         con.query(sql, function(err, results) {
//             if (err) throw err;
//             res(results);
//         })
//     });*/
// }

// export function destroy(id) {
//     note.destroy({ where: { id: id } }).then(function (res) {
//         return res;
//     }).catch(function (err) {
//         console.log(err);
//     })
//     /*return new Promise(function(res,rej){
//         let sql = "DELETE FROM `demo` WHERE id = "+id;
//         con.query(sql, function(err, results) {
//         if (err) throw err;
//         })
//     })*/
// }
