angular.module('xiangmuApp') .controller("daohang",["$scope","$http","$rootScope","$state",function ($scope,$http,$rootScope,$state){

  $http({
    url: "http://www.bugcenter.com.cn:1511/item",
    method:"get",
    params:{'to':$scope.uid}
  }).success(function(e){
    $scope.data = e
  })

  $scope.editSave=function(){
    $http({
      url:"http://www.bugcenter.com.cn:1511/item/"+$scope.editData.id,
      method:"PUT",
      data:$scope.editData
    }).success(function(){
    })
  }
  $scope.edit=function(e){
    $scope.editData=e
  }

  $scope.del=function(e){
    $http({
      url:"http://www.bugcenter.com.cn:1511/item/"+e.id,
      method:"delete"
    }).success(function(){
      alert("确定要删除吗？")
      $scope.data.splice($scope.data.indexOf(e),1)
    })
  }

}])
