/*
    wageApp for calculating wage in a city
    Required methods:
      getBenefit()
      getTooltip()
      getTotalWage()
      getTotalBenefits()
      drawChart()
*/

var app = angular.module('wageApp', ["chart.js"]); //The app module

//creating a controller object incase we need more controllers
var controllers = {};

//configure chart
Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        beginAtZero: false,
        responsive: true,
        maintainAspectRatio: true,

        // Return an empty string to draw the tick line but hide the tick label
        // Return `null` or `undefined` to hide the tick line entirely
        userCallback: function(value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(',');
            return '$' + value;
        }
    }
});


//we get the list from wage.json
controllers.wageController = function($scope, $sce, $http) {
  $scope.city = "saskatoon";

  $scope.itemValue = {};
  $scope.hourRate = {};
  $scope.totalBenefit = 0;
  $scope.sum = 0;
  $scope.percentChange = 0;
  $scope.livingwage = 0; // the living wage

  $scope.tooltipTitle = "Living Wage";
  $scope.tooltipContent = "The living wage reflects how much a worker needs to earn in order to remain healthy, productive, and support themselves and their families with confidence.";
  $scope.tooltipContent = $sce.trustAsHtml($scope.tooltipContent); //make safe

  var chartx = [];
  var chartx_ = [];
  var charty;

  //back button to main site
  $scope.doTheBack = function() {
    window.history.back();
  };


  $http.get('./wage.json').success(function(data) {
  $scope.data = data.sk; 

//function to load values needed for calculation for a single city
    getAllData = function(city){
        //get all values for calculation
        for(var keyName in $scope.data.city){    
          //city
            if ($scope.data.city[keyName].id === city){
              var items = $scope.data.city[keyName].items;
              //the city data
              $scope.cityData = $scope.data.city[keyName];
            //item
              for(var keyName2 in items){    
                chartx[keyName2] = items[keyName2].chart_title;
                chartx_[keyName2] = items[keyName2].monthly_budget;

                //set default values to 0
                $scope.itemValue[items[keyName2].id] = '';

                //set hourly rate
                $scope.hourRate[items[keyName2].id] = 0;

                /*if (items[keyName2].id === "health_care"){
                  $scope.medData  = items[keyName2];
                }
                if (items[keyName2].id === "food"){
                  $scope.foodData  = items[keyName2];
                }
                if (items[keyName2].id === "child_care"){
                  $scope.childData  = items[keyName2];
                }*/
              }
              break;
            }
          }
    }



//draw chart
drawChart = function(){
    charty = $.map($scope.itemValue, function(v, i){
        return [v];
    });

    $scope.labels = chartx;
    $scope.series = [$scope.cityData.name + ' Values', 'Your Values'];

    $scope.colours = ['#1ab394', '#f8ac59', '#1c84c6',  '#23c6c8', '#ed5565'];

    $scope.data = [
      chartx_,
      charty
    ];
        $scope.options = {
          legend: {
              display: true
          },
          title:{
            display: true,
              text: 'Compare your data with the city'
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Amount in CAD'
              }
            }]
          }     
      };


    }

    //get all the data from json for a particular city
    getAllData($scope.city);
    //draw the chart
    drawChart();

  });

  //end of http get

    //add all the hourly rate
    sumBenefits = function(){
        var total = 0;
        for(var keyName in $scope.hourRate){
            total += $scope.hourRate[keyName];
        }
        return total;
    };

    function doAnim() {
    $('.animate').removeClass('fadeIn animated').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('fadeIn animated');
      });
    };

    //get tooltip data
    $scope.getTooltip = function(index){
        $scope.tooltipTitle = $scope.cityData.items[index].title;
        $scope.tooltipContent = $sce.trustAsHtml($scope.cityData.items[index].tooltip);
      $('.animateTooltip').removeClass('fadeIn animated').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('fadeIn animated');

        //adjust table height
        $('#user-content').parent().css("height", $('#side-stuff').height() - 30 + 'px');
        $('#user-content').css("height", $('#side-stuff').height() - 30 + 'px');

      });

    };

    /*
        Calculate the hour rate
    */
    $scope.calcHourRate = function(appid, num){
      /*var a = Number($scope.itemValue['health_care'] || 0);
        var b = Number($scope.itemValue['food'] || 0);
        $scope.sum =  (a+b)*$scope.medData.hourly_benefit;
        */
        $scope.hourRate[appid] = Number(num / 140 || 0); //rate at 35 hours per week (using month)
        $scope.calcWage();
    }

    /**
        Calculate living wage
    **/
    $scope.calcWage = function()
    { 
        $scope.totalBenefit = sumBenefits(); //total benefits / hour


        //get the living wage total -finalWage is from the user
        $scope.livingwage = $scope.totalBenefit + Number($scope.finalWage || 0);

        $scope.percentChange = ($scope.livingwage/$scope.cityData.hourly_wage) * 100;

        //get percentage change
        if($scope.percentChange < 100){
            $scope.percentChange = 100 - $scope.percentChange ;
        }

        if($scope.percentChange > 100){
            $scope.percentChange = $scope.percentChange - 100;
        }

        //animate
        doAnim();
               
        //draw the chart
        drawChart();
        
    };

}

app.controller(controllers);

