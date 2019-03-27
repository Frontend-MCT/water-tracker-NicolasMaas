// Hoofdmodule
const uiBinding = (function() {
    // Submodules
    const wave = (function() {
        const setup = function() {
            console.log('setup');
        };

        const updateWaveHeight = function() {
            console.log('updateWaveHeight');
        };

        return {
            setup : setup,
            updateWaveHeight : updateWaveHeight
        }
    })();

    const logging = (function() {
        const setup = function() {
            console.log('setup');
        };

        const enableAmountOptions = function() {
            console.log('enableAmountOptions');
        };

        return {
            setup : setup,
            enableAmountOptions : enableAmountOptions
        }
    })();

    return {
        wave : wave,
        logging : logging
    }
})();