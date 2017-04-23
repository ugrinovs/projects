var dicamoApp = angular.module('dicamoApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
dicamoApp.controller('IndexController', function ($scope, $http) {
    $scope.carouselInterval = 5000;

    $scope.index = {
    showTooltip : false,
    tipDirection : ''
  };

//   $scope.index.delayTooltip = undefined;
//   $scope.$watch('index.delayTooltip',function(val) {
//     $scope.index.delayTooltip = parseInt(val, 10) || 0;
//   });

//   $scope.$watch('index.tipDirection',function(val) {
//     if (val && val.length ) {
//       $scope.index.showTooltip = true;
//     }
//   })

    $('#collapseBody1').on('show.bs.collapse', function() {
    $("#collapseHeading1 span").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
  });

    $('#collapseBody1').on('hide.bs.collapse', function() {
    $("#collapseHeading1 span").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  });

    $scope.slides = [
        {
            id: 0,
            image: "/static/app/img/CH-Daki-Bar-2-200x200.jpg",
        },
        {
            id: 1,
            image: "/static/app/img/Diablo-di-Casa-MonteNegro.jpg",
        },
        {
            id: 2,
            image: "/static/app/img/luci_02.jpg",
        },
        {
            id: 3,
            image: "/static/app/img/eufrat_di_casa_montenegro.jpg",
        },
        {
            id: 4,
            image: "/static/app/img/Mafia-Novi-Sad-1.jpg"
        }
    ];
});

dicamoApp.filter('to_trusted', ['$sce', function($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

dicamoApp.controller('EditController', function ($scope, $location, editService) {
    var editor_id = '#textarea';
    tinymce.remove();
    $scope.init = function() {
        InitializeTinyMce.init();
        $scope.getAll();
    }

    $('#post_data').on('click', function () {
        var ed = tinyMCE.get('mytextarea').getContent();
        // var post = {
        //     id: null,
        //     post: ed
        // };
        // console.log(JSON.stringify(ed));
        $scope.save(JSON.stringify(ed));
    });

    $scope.save = function (post) {
        editService.add(post)
            .success(function () {
                $location.path('/');
            })
            .error(function () {

            });
    }

    $scope.getAll = function () {
        editService.getAll()
            .success(function (data) {
                $scope.posts = data;
                console.log($scope.posts.content);

            })
            .error(function () {

            });
    }
});

dicamoApp.service('editService', function ($http) {
    var url = 'http://localhost:8080/api/posts';
    this.add = function (postData) {
        return $http.post(url, postData);
    }

    this.getAll = function () {
        return $http.get(url);
    }
})

dicamoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/static/app/html/partial/home.html',
            controller: 'IndexController'
        })
        .when('/about', {
            templateUrl : '/static/app/html/partial/edit.html',
            controller: 'EditController'
        })
        .when('/news', {
            templateUrl : '/static/app/html/partial/news.html',
            controller: 'EditController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);