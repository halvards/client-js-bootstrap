require(['math'], function(math) {

	describe('Math', function () {

	    it('clamps a number between a min and a max value', function () {
            expect(math.clamp(-1, 0, 10)).toBe(0);
            expect(math.clamp(0, 0, 10)).toBe(0);
            expect(math.clamp(5, 0, 10)).toBe(5);
            expect(math.clamp(10, 0, 10)).toBe(10);
            expect(math.clamp(11, 0, 10)).toBe(10);
	    });

	});

});
