var square = '<div class="square"></div>';
var divsToAppend;
var numRows = 16;
var numCols = 16;
var width = 600 / numRows - 0.01;
var height = 600 / numCols - 0.01;

$(document).ready(function() {
	makeGrid();
});

function makeGrid() {
	var divsToAppend = "";
	for (i = 0; i < numCols; i++) {
		divsToAppend += "<div class='row'>";
		for (p = 0; p < numRows; p++) {
			divsToAppend += square;
		}
		divsToAppend += "</div>";
	}
	$('#grid').append(divsToAppend);
	$('.square').css('height', height + 'px');
	$('.square').css('width', width + 'px');
}

$(document).on('mouseenter', '.square', function() {
	$(this).css('background-color', 'black');
});

$(document).on('mouseleave', '.square', function() {

});

function reset() {
	$('.square').remove();
	$('.row').remove();
	numRows = prompt("Please enter the number of rows");
	numCols = prompt("Please enter the number of columns");
	makeGrid();
	width = 600 / numRows - 0.01;
	height = 600 / numCols - 0.01;
	$('.square').css('height', height + 'px');
	$('.square').css('width', width + 'px');
}
