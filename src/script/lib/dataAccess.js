const dataAccess = (function () {
    const local = (function () {

        const localKey = 'drink-water';

        const addNewLog = () => {
            let registerdLogs = getAllItems();
            registerdLogs.push();
            localStorage.setItem(localKey, JSON.stringify(registerdLogs));
            console.log('Added to log: ');

        }

        const getAllItems = () => {
            return JSON.parse(localStorage.getItem(localKey)) || [];
        };

        const getProgressByDate = function (date) {
            return [
                // ['12:00', 100],
                // ['12:39', 200],
                // ['13:01', 300]
            ];
        }

        return {
            getProgressByDate: getProgressByDate
        };
    })();

    const api = (function () {
        // Moet dezelfde functies hebben als local !!!
        return {};
    })();

    return {
        local: local,
        api: api
    }
})();