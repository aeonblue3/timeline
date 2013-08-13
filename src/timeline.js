;(function($) {
  'use strict';

  /**
   * Valid Options
   *
   * title
   * dataPoints
   */

  var methods = {
    init: function(options) {
      return this.each(function(){

        var defaults = {
          title: options.title || "My Timeline",
          container: $(this)
        };

        options = $.extend({}, defaults, options);

        //$.each(options.dataPoints, function(){
          //console.log(methods._datePoint(this));
        //});
        console.log(methods._getMax(options.dataPoints));

        options.max = methods._getMax(options.dataPoints);
        options.min = methods._getMin(options.dataPoints);

        methods.displayTimeline(options);
      });
    }

    , _getMax: function(set) {
      return $.map(set, function(n, i) {
        return parseInt(i, 10);
      }).sort(function(a,b){return b-a})[0];
    }

    , _getMin: function(set) {
      return $.map(set, function(n, i) {
        return parseInt(i, 10);
      }).sort()[0];
    }

    , _datePoint: function(point) {
      return $("<div/>", {'class': 'datePoint'}).clone();
    }

    , _setTitle: function($element, title) {
      $element.append($("<h3>" + title.toString() + "</h3>"));
    }

    , displayTimeline: function(options) {
      methods._setTitle(options.container, options.title);
    }
  };

  $.fn.CoffeeTimeline = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on coffeeSearch');
    }
  };
})(jQuery);
