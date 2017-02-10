(function($){
	var methods = {
		emphasize: function() {
			return this.css('background-color', 'orange');
		},
		deEmphasize: function() {
			return this.css('background-color', 'white');
		}
	}
	
	$.fn.emphasize = function(method) {
		if(methods[method]) {
			// Apply to get everything except the first option
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if(typeof method === 'object' || !method) {
			// Default method emphasize
			return methods.emphasize.apply(this, arguments);
		} else {
			// If no method found
			$.error( 'Method ' + method + ' does not exist on jQuery.emphasize' );
		}
	}
})(jQuery);