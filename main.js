
document.addEventListener('DOMContentLoaded', function(){ 

	let grid_container = document.getElementById('grid-container');
	initGrid(16);

    function initGrid(size){

		for(let i=1; i<=size; i++){

			let row_container_div = document.createElement('div');
			row_container_div.id = `row_container_div_${i}`;
			row_container_div.className = 'row_container_div';
			grid_container.appendChild(row_container_div);

			for(let j=1; j<=size; j++){
				let row_div = document.createElement('div');
				row_div.id = `row_div_${i}_${j}`;
				row_div.className = 'row_div';
				row_container_div.appendChild(row_div);
				row_div.addEventListener("mouseover", mouseOver)
			}
		}
	}

	/*function random_rgba() {
    	let o = Math.round, r = Math.random, s = 255;
    	return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
	}*/
	
	let percent_brightness = 80;
	let brightness_up = false;
	function mouseOver(e){
		e.target.style.backgroundColor = 'rgb(200, 200, 200)';
		e.target.style.filter = `brightness(${percent_brightness}%)`;
		if(brightness_up == true ){
			percent_brightness += 1;
			if(percent_brightness >= 80){
				brightness_up = false; 
			}
		} else {
			percent_brightness -= 1;
			if(percent_brightness <= 10){
				brightness_up = true; 
			}
		}
		
	}

	document.getElementById("clear-button").addEventListener("click", function(){
		percent_brightness = 100;
		while(grid_container.firstChild){
			grid_container.removeChild(grid_container.lastChild);
		}
		let size = prompt("Type in a number for the grid size:");
		initGrid(size);
	})

}, false);

