;(function($) {
  'use strict';

  /**
   * Valid Options
   *
   * title
   */

  var methods = {
    init: function(options) {
      return this.each(function(){

        var defaults = {
          title: options.title || "My Timeline"
        };

        options = $.extend({}, defaults, options);
      });
    }
    , _datePoint: function(point) {
      return $("<div/>", {'class': 'datePoint'}.clone());
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
