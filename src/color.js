define(['./math'], function(math) {
	
    function component(value) {
        return math.clamp(value, 0, 255);
    }
    
    function create(red, green, blue) {

        var r = component(red), g = component(green), b = component(blue);
    
        return {
            print: function() {
                return 'rgb(' + r + ',' + g + ',' + b + ')';
            },
            lighter: function() {
                return create(r + 50, g + 50, b + 50);
            },
            darker: function() {
                return create(r - 50, g - 50, b - 50);
            }            
        };

    }

	return {
        create: create
	};
	
});
