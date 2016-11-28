angular.module('xiangmuApp').controller("dengl",["$scope","$http","$state","$rootScope",function($scope,$http,$state,$rootScope){
    //$scope.isshow=true
    $scope.sub=function(){
            $http({
                url: "http://www.bugcenter.com.cn:1511/users/login",
                method:"POST",
                withCredentials:true,
                data:$scope.updata
            }).success(function(e){
              $scope.uid= e.uid
              //$rootScope.user={}
              //$rootScope.user.username=$scope.updata.username
              //$rootScope.user.uid= e.uid
              $http({
                url: "http://www.bugcenter.com.cn:1511/users/"+$scope.uid,
                method:"get"
              }).success(function(e){
               console.log(e)
                if(e.charactor==0){//wyc
                  //$scope.isshow=false
                  $state.go("a")
                }
                if(e.charactor==1){//lnn
                  //$scope.isshow=false
                  $state.go("b")
                }
                if(e.charactor==2){//jgr
                  //$scope.isshow=false
                  $state.go("daohang")
                }
               if(e.charactor==3){//csd
                 //$scope.isshow=false
                 $state.go("c")
               }
              })
            })
       }
}]);

