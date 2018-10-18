$(document).ready(function() {
//adjust scroll based on left side height
  $('#user-content').slimScroll({
        height: $('#side-stuff').height() - 30 + 'px'
    });

//print
$("#btnPrint").click (function () {
            $('#printdiv').printThis({
                importCSS: true,
                importStyle: true
            });
});


     // Instance of the tour
var tour = new Tour({
    backdropPadding: 5,
    backdrop: true,
    backdropContainer: 'body',
    template: `<div class='popover tour'>
        <div class='arrow'></div>
        <h3 class='popover-title'></h3>
        <div class='popover-content'></div>
        <div class='popover-navigation'>
            <button class='btn btn-primary' data-role='prev'>« Prev</button>
            <button class='btn btn-primary' data-role='next'>Next »</button>
            <button class='btn btn-danger pull-right' data-role='end'>End Tutorial</button>
        </div>
        
      </div>`,
    steps: [{

            element: "#step1",
            title: "<span class='text-navy'>City Living Wage Data</span>",
            content: "Here we have the city living wage data with current wage for each item per month.",
            placement: "bottom",

        },
        {
            element: "#step2",
            title: "<span class='text-navy'>Add your Wage Data</span>",
            content: "You can add your monthly benefits for each item. Hourly rate is calculated automatically.",
            placement: "top",
        },
        {
            element: "#step3",
            title: "<span class='text-navy'>Item Description</span>",
            content: "This provides more details about each item selected.",
            placement: "bottom"
        },
        {
            element: "#step4",
            title: "<span class='text-navy'>Lowest Hourly Wage</span>",
            content: "Entering this information allows you to calculate your final living wage and compare with the city.",
            placement: "left"
        },
        {
            element: "#step5",
            title: "<span class='text-navy'>Recommendation</span>",
            content: "This highlights how your wage compares with the recommended wage of the city.",
            placement: "left"
        },
        {
            element: "#step6",
            title: "<span class='text-navy'>Results</span>",
            content: "The results allows you to compare your wage with that of the city.",
            placement: "left"
        }
        ,
        {
            element: "#step7",
            title: "<span class='text-navy'>Charts</span>",
            content: "Charts allows you to compare your results for each item with that of the city.",
            placement: "left"
        }
        ,
   
    ]});

// Initialize the tour
tour.init();

$('.startTour').click(function(){
    tour.restart();

    // Start the tour
    // tour.start();
})


});