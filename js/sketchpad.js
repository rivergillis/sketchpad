var square = '<div class="square"></div>';
var divsToAppend;
var numRows = 16;
var numCols = 16;
var width = 600 / numRows - 0.01;
var height = 600 / numCols - 0.01;
var mode = "pen";

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
	if (mode === "pen") {
		$(this).css('background-color', 'black');
	} else if (mode === "random") {
		$(this).css('background-color', getRandomColor());
	} else if (mode === "fadein") {
		var opacity = parseFloat($(this).css("opacity"));
		opacity += 0.1;
		$(this).fadeTo("fast", opacity);
	}
});

$(document).on('mouseleave', '.square', function() {

});

function reset() {
	$('.square').remove();
	$('.row').remove();
	numRows = prompt("Please enter the number of rows", "16");
	numCols = prompt("Please enter the number of columns", "16");
	makeGrid();
	width = 600 / numRows - 0.01;
	height = 600 / numCols - 0.01;
	$('.square').css('height', height + 'px');
	$('.square').css('width', width + 'px');
	mode = "pen";
}

function setRandom() {
	mode = "random";
	$('.square').fadeTo("slow", "1.0");
}

function setPen() {
	mode = "pen";
	$('.square').fadeTo("slow", "1.0");
}

function setFadeIn() {
	mode = "fadein";
	$('.square').fadeTo("slow", "0.1");
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
  for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}
