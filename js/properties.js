window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {
        console.log("Loading with key: "+properties.public_API_Key.value);
        require(["settings"], function (settings) {
            
             settings.api_key = properties.public_API_Key.value;

            if (properties.public_API_Key) {
                _.debounce(function () {
                    settings.api_key = properties.public_API_Key.value;
                    console.log("GOGOGO");
                }, 1000);
            }

        });
    }
};
