'use strict';
var dbConn = require('./../../config/db.config');
//Member object create
var Member = function (member) {
    this.mem_id = member.mem_id;
    this.mem_name = member.mem_name;
    this.mem_surname = member.mem_surname;
    this.mem_idcard = member.mem_idcard;
    this.mem_tel = member.mem_tel;
    this.mem_email = member.mem_email;
    this.mem_date_start = member.mem_date_start;
    this.mem_date_end = member.mem_date_end;
    this.mem_num = member.mem_num;
    this.mem_user = member.mem_user;
    this.mem_pws = member.mem_pws;
};
const tb_name = "tb_member";
Member.create = function (newData, result) {
    dbConn.query("INSERT INTO "+tb_name+" set ?", newData, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Member.findById = function (id, result) {
    dbConn.query("Select * from "+tb_name+" where mem_id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Member.findAll = function (result) {
    dbConn.query("Select * from "+tb_name+"", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
Member.update = function (id, member, result) {
    dbConn.query("UPDATE "+tb_name+" SET mem_name=?,mem_surname=?,mem_idcard=?,mem_tel=?,mem_email=?,mem_date_start=?,mem_date_end=?,mem_num=?,mem_user=?,mem_pws=? WHERE mem_id = ?", [member.user_id, member.mem_name, member.mem_surname, member.mem_idcard, member.mem_tel, member.mem_email, member.mem_date_start, member.mem_date_end, member.mem_num, member.mem_user, member.mem_pws, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Member.delete = function (id, result) {
    dbConn.query("DELETE FROM "+tb_name+" WHERE mem_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Member;