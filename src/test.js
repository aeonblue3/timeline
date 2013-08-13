$(document).ready(function(){
  $("#myTimeline").CoffeeTimeline({
    title: "CoffeeCup Timeline",
    dataPoints: {
      '1': '#text',
      '3': '#testing',
      '2': '#texting'
    }
  });
});
