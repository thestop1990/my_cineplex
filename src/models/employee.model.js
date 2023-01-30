'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Employee = function (employee) {
    this.user_id = employee.user_id;
    this.user_pws = employee.user_pws;
};
const tb_name = "tb_employee";
Employee.create = function (newData, result) {
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
Employee.findById = function (id, result) {
    dbConn.query("Select * from "+tb_name+" where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Employee.findAll = function (result) {
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
Employee.update = function (id, employee, result) {
    dbConn.query("UPDATE "+tb_name+" SET user_id=?,user_pws=? WHERE id = ?", [employee.user_id, employee.user_pws, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Employee.delete = function (id, result) {
    dbConn.query("DELETE FROM "+tb_name+" WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Employee;