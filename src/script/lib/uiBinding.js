// Hoofdmodule
const uiBinding = (function () {
    // Submodules
    const wave = (function () {

        this.waveElement = null;

        const setup = function (waveClass) {
            this.waveElement = document.querySelector(`${waveClass}`);
        };

        const updateWaveHeight = function (newPercentage) {
            if (newPercentage > 100) newPercentage = 100;

            this.waveElement.style.transform = `translateY(${100 - newPercentage}%)`;
        };

        return {
            setup: setup,
            updateWaveHeight: updateWaveHeight
        }
    })();

    const logging = (function (buttonClass) {
        this.addButton;

        const setup = function () {
            this.addButton = document.querySelector(`.${this.buttonClass}`);
        };

        const enableAmountOptions = function () {
            this.addButton.addEventListener('click', function () {
                console.log(this.dataset);
            });
        };

        return {
            setup: setup,
            enableAmountOptions: enableAmountOptions
        }
    })();

    return {
        wave: wave,
        logging: logging
    }
})();