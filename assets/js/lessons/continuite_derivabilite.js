$(document).ready(function() {
	createPlots(computeDimension());
});

$(window).resize(function() {
	createPlots(computeDimension());
});

function createPlots(dimensions) {
	if(!canSVG) {
		$('#representation-1').html(innerImage('assets/img/continuite_derivabilite', 'representation-1'));
		$('#representation-2').html(innerImage('assets/img/continuite_derivabilite', 'representation-2'));
		return;
	}
	
	functionPlot({
		title: 'La fonction partie entière',
		target: '#representation-1',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: '[x]',
				sampler: 'builtIn',
				fn: 'floor(x)',
				graphType: 'polyline'
			}
		]
	});
	
	functionPlot({
		title: 'Une fonction et sa dérivée',
		target: '#representation-2',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: 'f(x)',
				fn: 'x^2-x-1',
				derivative: {
					fn: '2x-1',
					updateOnMouseMove: true
				}
			}
		]
	});
}