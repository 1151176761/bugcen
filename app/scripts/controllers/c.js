angular.module('xiangmuApp').controller("c",["$scope","$http","$state","$rootScope","PolarAreaCtrl",function ($scope,$http,$state,$rootScope,PolarAreaCtrl) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data = [300, 500, 100, 40, 120];
}])
