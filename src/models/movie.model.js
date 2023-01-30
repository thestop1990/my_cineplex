'use strict';
var dbConn = require('./../../config/db.config');
//Movie object create
var Movie = function (movie) {
    this.mov_name = movie.mov_name
    this.mov_price = movie.mov_price
    this.mov_date = movie.mov_date?movie.mov_date:new Date()
    // this.mov_date = new Date();
    this.mov_flag = movie.mov_flag?movie.mov_flag:1
    this.mov_c_flag = movie.mov_c_flag?movie.mov_c_flag:1
};
const tb_name = "tb_movie";
Movie.create = function (newData, result) {
    dbConn.query("INSERT INTO "+tb_name+" set ?", newData, function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId)
        }
    });
};
Movie.findById = function (id, result) {
    dbConn.query("Select * from "+tb_name+" where mov_id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            result(null, res)
        }
    });
};
Movie.findAll = function (result) {
    dbConn.query("Select * from "+tb_name+"", function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err);
        } else {
            console.log('employees : ', res)
            result(null, res);
        }
    });
};
Movie.update = function (id, movie, result) {
    dbConn.query("UPDATE "+tb_name+" SET mov_name=?,mov_price=?,mov_date=?,mov_flag=?,mov_c_flag=? WHERE mov_id = ?", [movie.user_id, movie.mem_name, movie.mem_surname, movie.mem_idcard, movie.mem_tel, movie.mem_email, movie.mem_date_start, movie.mem_date_end, movie.mem_num, movie.mem_user, movie.mem_pws, id], function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        } else {
            result(null, res)
        }
    });
};
Movie.delete = function (id, result) {
    dbConn.query("DELETE FROM "+tb_name+" WHERE mov_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        } else {
            result(null, res)
        }
    });
};
module.exports = Movie