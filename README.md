# tsi2-module-skeletton
The framework for the development of an extension module for the Tea(m)speak Interface 2 Framework

#### Use of React and JSX in the frontend
First of all, you need to know that JSX files are not needed in production mode, you just need the compiled versions, so first we need an image of the folder ```src/view```, where we can map the structure with JSX files. For this we create a subfolder named ```src/fronted``` which will serve as source for the respective JSX action scripts. Now take the same subfolder structure for the directory ```src/fronted``` as it also exists in the folder ```src/views```. Assuming we want to create a ViewAction "index" for the IndexController, the folder structure would look like this:
```
└ src/
 ...
  ├ fronted/
  │ └ IndexController/
  │   └ ..
 ...
  ├ src/
  │ └ Controllers/
  │   └ IndexController.php
  ...
  ├ views
  │ └ IndexController/
  │   └ ..
  │
  └ extension.json
```
Now let's create the file ```fronted/IndexController/indexAction.tpl.jsx``` and fill it up as follows:
```jsx harmony
"use strict";

/**
 *
 */
class IndexAction extends React.Component {

    constructor(props) {
        super(props);       
    }

    render() {
        return (
            <div className="col-md-12">
                Yeah! Your first React-View!
            </div>
        );
    }
}
```
In order to compile the file accordingly so that they are then processed in the view, we need Node.js. If you have not already installed it, you can download it from ```https://nodejs.org/``` and set it up according to the instructions.
Once you've set up Node.js, open the command line, go to the root of your project, and enter the following commands:
````
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
````
After this process, a file named ```package.json``` should now be in your root folder, it will be automatically created by npm during initialization. Open the file and add the following option "scripts", respectively overwrite them as follows:
````json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx babel --watch src/fronted --out-dir src/views --presets react-app/prod"
  }
}
````
Finished! You can now start the build process by executing the following command in the command line:
````
npm run build
````
The command starts a watcher that automatically compiles the .jsx files in the ```src/fronted``` directory with every change and saves them in the folder ```src/views```. To stop the watch process, simply press Ctrl + C.
___
#### Recommendation on the topic .gitignore

Please note that you must add the following lines to the ```.gitignore``` file, as they will probably not lose anything in productive operation:
````gitignore
/config/*
!/config/default-config.php.dist
!/config/.htaccess
!/log/.htaccess
**/*.sqlite
**/node_modules
**/package.json
**/package-lock.json
````
So that the system still knows that this action exists at all, you just have to make it known in the associated IndexController. To do this, we simply create the method indexAction, which is as follows:
```php
namespace Modules\Dashboard\Controllers;

use Annotations\Access;
use Annotations\Navigation;
use Controllers\RestrictedFrontController;

/**
 * Class IndexController
 * @package Modules\Example\Controllers
 * @Access(role=Entities\Group::ROLE_USER)
 * @Navigation(position="sidebar", icon="icon-example", href="index.php?module=example")
 */
class IndexController extends RestrictedFrontController
{
    /**
     * @internal View: React/JS
     */
    public function indexAction(): void
    {
        
    }
}
```
By annotating the method, you can also control navigation and access properties, but more on that later. That was all for now, you can now call the view by using the following parameters in the browser ```index.php?module=example```.