$(document).ready(function() {
	createPlots(computeDimension());
});

$(window).resize(function() {
	createPlots(computeDimension());
});

function createPlots(dimensions) {
	if(!canSVG) {
		$('#representation-1').html(innerImage('assets/img/fonction_exponentielle', 'representation-1'));
		return;
	}
	
	functionPlot({
		title: 'La fonction exponentielle',
		target: '#representation-1',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: 'exp(x)',
				fn: 'exp(x)'
			},
			{
				title: 'y = x + 1',
				fn: 'x + 1'
			}
		]
	});
}