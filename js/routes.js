app.config(function ($routeProvider) {

    $routeProvider

        .when("/", {

            templateUrl: "partials/home.html",

            controller: "homeController"

        })

        .when("/about", {

            templateUrl: "partials/about.html"

        })

        .when("/contact", {

            templateUrl: "partials/contact.html"

        })

        .when("/events", {

            templateUrl: "partials/events.html",

            controller: "eventController"

        })

        .otherwise({

            redirectTo: "/"

        });

});