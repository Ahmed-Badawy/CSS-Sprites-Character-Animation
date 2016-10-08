function animate_one_row(obj){
	var elm = document.getElementById(obj.id);
	var left = obj.x;
	var i = 0;
	setInterval(function(){
		if(i==obj.x_slides){ left=obj.x; i=0; }
		left -= obj.x;
		// console.log(i,left);
		i++;
		elm.setAttribute('style',`background: url(${obj.img}) ${left}px 0px no-repeat;`);
	},obj.timer)
}
/*EX: 
	animate_one_row({
		id: 'img1',
		x: 185,
		x_slides: 8,
		timer: 100,
		img: './sprites/capguy-walk.png' 
	});
*/




//----------------------------------------------------------
// Two Levels
function animate_full_sprite(obj){
	var elm = document.getElementById(obj.id);
	var left = obj.x;
	var top = 0;
	var i = 0;
	var j = 0;
	setInterval(function(){
		if(i==obj.x_slides){ left=obj.x; i=0; j++; top -= obj.y; }
		if(j==obj.y_slides){ top=0; i=0; j=0; }
		left -= obj.x;
		// console.log(i,j,left,top);
		i++;
		elm.setAttribute('style',`background: url(${obj.img}) ${left}px ${top}px no-repeat;`);
	},obj.timer)
}
/*EX: 
	animate_full_sprite({
		id: 'img3',
		x: 180,
		y: 340,
		x_slides: 9,
		y_slides: 8,
		timer: 100,
		img: './sprites/player-running.png' 
	});
*/





//----------------------------------------------------------
//automatic two levels. same as the previous but without the need to define x & y. it will get defined automatically.
function auto_animate_full_sprite(obj){
	var elm = document.getElementById(obj.id);
	elm.className = 'hidden';
	elm.setAttribute('src',obj.img);
	elm.onload = function(){
		var height = elm.height;
	  	var width = elm.width;
	  	var src = elm.src;
	  	elm.src = '';
	  	obj.x = width / obj.x_slides;
	  	obj.y = height / obj.y_slides;
	  	obj.img = src;

	  	elm.width = obj.x;
	  	elm.height = obj.y;

	  	elm.className = elm.className.replace(/\bhidden\b/,'');

		var left = obj.x;
		var top = 0;
		var i = 0;
		var j = 0;
		setInterval(function(){
			if(i==obj.x_slides){ left=obj.x; i=0; j++; top -= obj.y; }
			if(j==obj.y_slides){ top=0; i=0; j=0; }
			left -= obj.x;
			// console.log(i,j,left,top);
			i++;
			elm.setAttribute('style',`background: url(${obj.img}) ${left}px ${top}px no-repeat;`);
		},obj.timer)
	}
}
/*EX: 
	auto_animate_full_sprite({
		id: 'img6',
		x_slides: 16,
		y_slides: 16,
		timer: 80,
		img: './sprites/actionstashhd.png'
	});
*/

