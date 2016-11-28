angular.module('xiangmuApp').controller("a",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
	$scope.add=function(){
		$http({
			url:"http://www.bugcenter.com.cn:1511/item",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
      $state.go("daohang")
      $scope.data.push($scope.updata)
		})
	}
}]);
//<script type="text/babel">
//var Title=React.createClass({
//   render:function(){
//     return <h1>{this.props.t}<small>{this.props.data}</small></h1>
//   }
//})
//ReactDOM.render(<Title t="qq" data="qqq"/>,document.getElementById("a"))
//</script>
