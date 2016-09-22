var app=angular.module('myAPP', ['ionic']);
app.controller('MovieController', function($ionicPlatform,$scope, $http,$ionicPopup,$interval) {
	var isConnectionLost=false;
	var isConnectError=false;
	
     if(navigator.onLine)
	 {
	$http.get("https://api-public.guidebox.com/v1.43/US/mBgbFjzVsdUCxXM8C0dpFs9ICQB0ZJ/movies/all/50/25/all/all")
    .then(function(response) {
        $scope.searchResults=response.data.results;
    });
	 }
	 else{
		  OffLine();
		  isConnectError=true;
	 }
	 
	 $interval(function () {
        if(navigator.onLine)
		{
			isConnectionLost=false;
		}
		else
		{
			
		 OffLine();
		 isConnectError=true;
		 
		}
		
    }, 2000);
	
	function OffLine()
	{
		if(!isConnectError)
		{
		$ionicPopup.alert({
          title: 'Movie HUB',
          content: 'Sorry, No Internet Connectivity Now. Please make sure internet connected and Open Movie Hub Again.'
        })
        .then(function(result) {
          if(result) {
           ionic.Platform.exitApp();
          }
        });
		}
	}
	
});