define([], function() {
	
    var math = {};
    
    math.clamp = function(val, min, max) {
        return (val < min) ? min : (val > max) ? max : val;
    };
    
	return math;
		
});
