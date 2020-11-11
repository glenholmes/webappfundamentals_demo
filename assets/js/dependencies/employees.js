function loadEmployees() {
    $.get("/employees", function (data) {
        var myEmployees = data;
        for (var i = 0; i < myEmployees.length; i++) {
            $("#employeeBody").append("<tr><td> ##Frontend Loaded## "
                + myEmployees[i].firstname + " " + myEmployees[i].lastname +
                "</td><td>"
                + myEmployees[i].telephone +
                "</td><td>"
                + myEmployees[i].role +
                "</td><td><a href='/employees/show/" + myEmployees[i].id
                + "'>Show</a></td></tr > ");
        }
    })
}

loadEmployees();