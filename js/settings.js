define(function () {
    var defaults_ = {

        api_key:'placeholderKey',
        width: screen.width,
        height: screen.height,
        margin: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50
        },
        colors: {
            background: '#000000',
            unseen: '#303030',
            apprentice: '#DD0093',
            guru: '#882D9E',
            master: '#294DDB',
            enlighten: '#0093DD',
            burned: '#FFFFFF'
        }
    };
    var settings_ = {};
    //Read and Write Cookies (Hopefully this works with WE.
    var apiform = document.getElementById('form-apikey');
    //Read And Write Settings properties.
    function read(property) {
        if (settings_[property] === undefined) {
            settings_[property] = defaults_[property];
           
        }
        return settings_[property];
    }
    function write(property, value) {
        settings_[property] = value;

    }
    
    return {
        get updateProperties(){return updateSettings()},
        get api_key() { return read('api_key'); },
        get width() { return read('width'); },
        get height() { return read('height'); },
        get margin() { return read('margin'); },
        get colors() { return read('colors'); },
        set api_key(v) { write('api_key',v); },
        set width(v) { write('width',v); },
        set height(v) { write('height',v); },
        set margin(v) { write('margin',v); },
        set colors(v) { write('colors',v); }
    };
});
