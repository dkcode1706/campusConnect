app.controller("registerController", function ($scope, $routeParams) {

    $scope.eventId = $routeParams.eventId;

    $scope.student = {};

    $scope.submitRegistration = function () {

        var registrations =
            JSON.parse(localStorage.getItem("registrations")) || [];

        $scope.student.eventId = $scope.eventId;

        $scope.student.registrationDate =
            new Date().toLocaleDateString();

        registrations.push($scope.student);

        localStorage.setItem(
            "registrations",
            JSON.stringify(registrations)
        );

        alert("Registration Successful!");

        $scope.student = {};

    };

});