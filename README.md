# Phorm RF Skeletton
The framework for the development of an extension module for the Php Orm React Framework

.. will be updated! ..

#### Use of React and JSX in the frontend

```
└ ModuleName/
 ...
  ├ fronted/
  │ └ IndexController/
  │   └ indexAction
  │     └ index.js
  │     └ routes.js
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
Now let's create the file ```src/fronted/IndexController/indexAction/FirstRouteAction.js``` and fill it up as follows:
```jsx harmony
import React from 'react';
import {Div, WidgetBox, WidgetContent, WidgetHeader} from "tsi2-ui-library";

export default class RoutesAction extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const timeText = <span >It's {this.state.date.toLocaleTimeString()}</span >;

        return (
            <Div cols={"12"} >
                <WidgetBox >
                    <WidgetHeader title={"Time Example"} />
                    <WidgetContent padding={true} >
                        <div className="tabbable box-tabs" >
                            <ul className="nav nav-tabs" >
                                <li className="" ><a href="#box_tab3" data-toggle="tab" >Section 3</a ></li >
                                <li className="" ><a href="#box_tab2" data-toggle="tab" >Section 2</a ></li >
                                <li className="active" ><a href="#box_tab1" data-toggle="tab" >Time is running..</a ></li >
                            </ul >
                            <div className="tab-content" >
                                <div className="tab-pane active" id="box_tab1" >
                                    <div className="alert alert-warning" ><strong >Hey there!</strong > I'm a cool
                                        alert.
                                    </div >
                                    <p >
                                        {timeText}
                                    </p >
                                </div >
                                <div className="tab-pane" id="box_tab2" >
                                    <p >Content #2</p >
                                </div >
                                <div className="tab-pane" id="box_tab3" >
                                    <p >Content #3</p >
                                </div >
                            </div >
                        </div >
                    </WidgetContent >
                </WidgetBox >
            </Div >
        );
    }
}
```
In order to compile the file accordingly so that they are then processed in the view, we need Yarn and Node.js. If you have not already installed it, you can download it from ```https://nodejs.org/``` and ```https://yarnpkg.com/en/```.
Once you've set up Node.js and Yarn, open the command line, go to the root of your project, and enter the following commands:
````
yarn install
````
> Note: All required modules are now installed from the package.json file.

After this process, a folder named ```node_modules``` should now be in your root folder. 

Now open the file ```webpack.config.js``` and adjust the paths of the controllers and their actions accordingly, this is important for the build process so that the files are copied wherever they are supposed to go
````javascript

...    
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
...
````
Finished! You can now start the build process by executing the following command in the command line:
````
> npm run dev (for developement)
> npm run build (for production)
````

In order for the system to know that this action even exists, you only need to make it known in the associated index controller under ```src/src/Controllers/IndexController.php```. For this we simply create the method indexAction as follows:
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

#More coming soon ..
