/*
 * MIT License
 *
 * Copyright (c) 2020 DW Web-Engineering
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('./ReactModule/views')
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
    .addEntry('IndexController/formAction', './ReactModule/fronted/IndexController/formAction/index.js')
    //.addEntry('ExampleController/secondAction', './Module/fronted/IndexController/secondAction/index.js')
    //.addEntry('ExampleController/thirdAction', './Module/fronted/IndexController/thirdAction/index.js')
    //.addEntry('ExampleController/etcAction', './Module/fronted/IndexController/etcAction/index.js')

    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableReactPreset()

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment if you use Sass/SCSS files
//.enableSassLoader()

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
