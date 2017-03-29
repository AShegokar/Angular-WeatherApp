var classApp = angular.module("weatherApp", []);
classApp.controller("weatherCtrl", function ($scope, $http) {
   var vm = $scope;
   vm.channelInfo = {
       heading: "This is AngularJS Project",
       subheading: "Weather Application",
       subheading2: "Click on Fahrenheit(°F) to see Celsius(°C)"
    };

   $http.get("http://ip-api.com/json").success(function (data) {
      vm.lat = data.lat;
      vm.lon = data.lon;
      var apiKey = "d641578e41dad8c2d82de50565487f3d";
      var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="
          + vm.lat + "&lon=" + vm.lon  + "&appid=" + apiKey;
      $http.get(openWeatherURL).success(function (data) {
          // console.log(openWeatherURL);
          vm.description = data.weather[0].description;
          // ** 1 meter per second equals 2.237 miles per hour.
          vm.speed = (2.237*data.wind.speed).toFixed(2) + "mph";
          vm.name = data.name;
          vm.temp = (data.main.temp).toFixed(2);
          //** T(°F) = T(K) × 9/5 - 459.67 (Convert kelvin to degrees Fahrenheit)
          vm.fTemp = (vm.temp*(9/5)-459.67).toFixed(2) + " (°F)";
          // T(°C) = T(K) - 273.15 (Convert Kelvin to Celsius)
          vm.cTemp = (vm.temp - 273.15).toFixed(2) + " (°C)";
          vm.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

          switch(vm.description){
              case "clear sky":{
                  vm.weatherBackground = {
                      "background": "url('../images/clear sky.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              case "scattered clouds":{
                  vm.weatherBackground = {
                      "background": "url('../images/scatter.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              case "few clouds":{
                  vm.weatherBackground = {
                      "background": "url('../images/sun in cloud.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              case "thunderstorm":{
                  vm.weatherBackground = {
                      "background": "url('../images/thunderstorm.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              case "moderate rain":{
                  vm.weatherBackground = {
                      "background": "url('../images/moderate.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              case "rain":{
                  vm.weatherBackground = {
                      "background": "url('../images/rain.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              case "shower rain":{
                  vm.weatherBackground = {
                      "background": "url('../images/rain.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              case "mist":{
                  vm.weatherBackground = {
                      "background": "url('../images/mist.jpg')",
                      "background-size": "cover"
                  };
                  break;
              }
              default:
                  vm.weatherBackground = {
                      "background": "url('../images/default.jpg')",
                      "background-size": "cover"
                  };
                  break;
          }
      });
   });
});




