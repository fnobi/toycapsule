(function () {
    var config  = {
        paths: {
            jquery: 'lib/jquery-1.9.1.min',
            underscore: 'lib/underscore-min',
            backbone: 'lib/backbone-min'
        },
        shim: {
            backbone: {
                deps: [ 'jquery', 'underscore' ]
            },
            Library: {
                deps: [ 'backbone' ]
            },
            main: {
                deps: [ 'Library' ],
                route: '/'
            }
        }
    };

    var path = location.pathname, modules = [], route, name;

    for (name in config.shim) {
        route = config.shim[name].route;
        if (!route) {
            continue;
        }
        if (path.match(new RegExp('^' + route + '$'))) {
            modules.push(name);
        }
    };

    requirejs.config(config);
    require(modules);
})();
