require(['color'], function(color) {

	describe('Color', function () {

	    it('can print an RGB color', function () {
            var myColor = color.create(1, 2, 3);
            expect(myColor.print()).toBe('rgb(1,2,3)');
	    });

	    it('can make a color lighter', function () {
            var lighter = color.create(100, 100, 100).lighter();
            expect(lighter.print()).toBe('rgb(150,150,150)');
	    });

	    it('clamps the brightest value at 255', function () {
            var lighter = color.create(210, 210, 210).lighter();
            expect(lighter.print()).toBe('rgb(255,255,255)');
	    });
    
	    it('can make a color darker', function () {
            var darker = color.create(100, 100, 100).darker();
            expect(darker.print()).toBe('rgb(50,50,50)');
	    });

	    it('clamps the darkest value at 0', function () {
            var darker = color.create(10, 10, 10).darker();
            expect(darker.print()).toBe('rgb(0,0,0)');
	    });
        
	});

});
