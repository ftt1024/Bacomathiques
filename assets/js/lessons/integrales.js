$(document).ready(function() {
	createPlots(computeDimension());
});

$(window).resize(function() {
	createPlots(computeDimension());
});

function createPlots(dimensions) {
	if(!canSVG) {
		$('#representation-1').html(innerImage('assets/img/integrales', 'representation-1'));
		$('#representation-2').html(innerImage('assets/img/integrales', 'representation-2'));
		$('#representation-3').html(innerImage('assets/img/integrales', 'representation-3'));
		$('#representation-4').html(innerImage('assets/img/integrales', 'representation-4'));
		$('#representation-5').html(innerImage('assets/img/integrales', 'representation-5'));
		$('#representation-6').html(innerImage('assets/img/integrales', 'representation-6'));
		return;
	}
	
	functionPlot({
		title: 'L\'Unité d\'Aire (U.A.)',
		target: '#representation-1',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				fn: '1',
				range: [0, 1],
				closed: true
			}
		]
	});
	
	functionPlot({
		title: 'Intégrale sur [-2;2] de x²+x-2',
		target: '#representation-2',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: 'x^2+x-2',
				fn: 'x^2+x-2',
				range: [-2, 2],
				closed: true
			},
			{
				title: 'x^2+x-2',
				fn: 'x^2+x-2'
			}
		]
	});
	
	functionPlot({
		title: 'Intégrale positive',
		target: '#representation-3',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: 'x',
				fn: 'x',
				range: [0, 2],
				closed: true
			},
			{
				title: 'x',
				fn: 'x'
			}
		]
	});
	
	functionPlot({
		title: 'Intégrale négative',
		target: '#representation-4',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: 'x',
				fn: 'x',
				range: [-2, 0],
				closed: true
			},
			{
				title: 'x',
				fn: 'x'
			}
		]
	});
	
	functionPlot({
		title: 'Intégrale sur [-1.5;1.5] de x²',
		target: '#representation-5',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: 'x^2',
				fn: 'x^2',
				range: [-1.5, 1.5],
				closed: true
			},
			{
				title: 'x^2',
				fn: 'x^2'
			}
		]
	});
	
	functionPlot({
		title: 'Intégrale sur [-1.5;1.5] de x^3',
		target: '#representation-6',
		grid: true,
		height: dimensions.height,
		width: dimensions.width,
		data: [
			{
				title: 'x^3',
				fn: 'x^3',
				range: [-1.5, 1.5],
				closed: true
			},
			{
				title: 'x^3',
				fn: 'x^3'
			}
		]
	});
}