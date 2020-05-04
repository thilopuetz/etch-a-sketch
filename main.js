
document.addEventListener('DOMContentLoaded', function(){ 

    let grid_container = document.getElementById('grid-container');

	for(let i=1; i<=16; i++){

		let row_container_div = document.createElement('div');
		row_container_div.id = `row_container_div_${i}`;
		grid_container.appendChild(row_container_div);

		for(let j=1; j<=16; j++){
			let row_div = document.createElement('div');
			row_div.id = `row_div_${i}_${j}`;
			row_container_div.appendChild(row_div);
		}
	}
}, false);

