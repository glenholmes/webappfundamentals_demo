/**
 * EmployeesController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    "new": function (req, res) {
        res.view();
    },

    "list": function (req, res) {
        Employees.find().exec(function (error, myEmployees) {
            if (error) {
                return res.serverError(error);
            }

            res.view({ myEmployees: myEmployees });
        });
    },

    "show": function (req, res) {
        var id = req.param("id");
        Employees.findOne(id).exec(function (error, myEmployee) {
            if (error) {
                return res.serverError(error);
            }

            if (!myEmployee) {
                return res.notFound("No employee with that id");
            }

            res.view({ myEmployee: myEmployee });
        });
    }
};

