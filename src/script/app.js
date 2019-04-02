(function () {
	console.log('💧', 'https://www.youtube.com/watch?v=ARC1w1WWxGY');

	const options = {
		units: 'ml',
		dailyGoal: 2000,
		mode: 'local',
		domRefs: {
			percentage: 'js-amount',
			timeStampHolder: 'js-timestamps',
			addButton: 'js-log',
			currentGoal: 'js-goal',
			currentUnits: 'js-units'
		},
		afterUpdate: function (newPercentage) {
			uiBinding.wave.updateWaveHeight(newPercentage);
			console.log("It's been updated! 👍");
			console.log("Current progress: ", newPercentage, "%");
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		uiBinding.wave.setup('.js-waves'); // . NIET toegevoegd aan setup 
		uiBinding.logging.setup('js-log'); // . WEL toegevoegd aan setup

		// uiBinding.logging.enableAmountOptions();
		new ProgressTracker(options);
	});
})();