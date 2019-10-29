var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('./Module/views')
    .setPublicPath('/')

    /*
     * CONFIG
     *
     * Add 1 entry for each action method of a controller
     * As a name, you should use the controller followed by the action method (e. g. IndexController/indexAction)
     *
     * Each entry will result in one JavaScript file (e.g. indexAction.js)
     * and one CSS file (e.g. indexAction.css) if your JavaScript imports CSS.
     */
    .addEntry('IndexController/indexAction', './Module/fronted/IndexController/indexAction/index.js')
    //.addEntry('ExampleController/secondAction', './Module/fronted/IndexController/secondAction/index.js')
    //.addEntry('ExampleController/thirdAction', './Module/fronted/IndexController/thirdAction/index.js')
    //.addEntry('ExampleController/etcAction', './Module/fronted/IndexController/etcAction/index.js')

    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    //.enableVersioning(Encore.isProduction())
    .enableReactPreset()

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment if you use Sass/SCSS files
//.enableSassLoader()

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
