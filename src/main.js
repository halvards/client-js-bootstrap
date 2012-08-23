require(['./color'], function(color) {
    
	var myColor = color.create(100, 100, 100);
    document.querySelector('#color').innerHTML = myColor.lighter().print();
    
});
