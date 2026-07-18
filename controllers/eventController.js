app.controller("eventController", function ($scope) {

    $scope.events = [

        {
            id: 1,
            name: "Hackathon",
            date: "20 Aug 2026",
            category: "Technical",
            venue: "Seminar Hall",
            seats: 50
        },

        {
            id: 2,
            name: "Cricket Tournament",
            date: "15 Sep 2026",
            category: "Sports",
            venue: "Sports Ground",
            seats: 100
        },

        {
            id: 3,
            name: "Cultural Fest",
            date: "25 Oct 2026",
            category: "Cultural",
            venue: "Main Auditorium",
            seats: 200
        }

    ];

});