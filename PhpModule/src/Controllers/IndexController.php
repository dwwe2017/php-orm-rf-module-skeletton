<?php
/**
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

namespace Modules\PhpModule\Controllers;


use Annotations\Access;
use Annotations\Navigation;
use Annotations\Redirect;
use Annotations\SubNavigation;
use Annotations\SubRoute;
use Annotations\SubRoutes;
use Controllers\RestrictedFrontController;
use Slim\Flash\Messages;

/**
 * Class IndexController
 * @package Modules\ReactModule\Controllers
 * @Access(role=Entities\Group::ROLE_USER)
 * @Navigation(text="Examples", position="sidebar", icon="cil-level-down", badge="PHP 7.4", badgeClass="success")
 */
class IndexController extends RestrictedFrontController
{
    /**
     * @Redirect(module="PhpModule", action="test")
     */
    public function indexAction(): void {}

    /**
     * @SubNavigation(text="Example Page", icon="cil-chevron-right")
     */
    public function testAction(): void
    {
        $this->getFlashHandler()->addError("This is a flash message test");
        $this->getFlashHandler()->addWarning("This is a flash message test");
        $this->getFlashHandler()->addInfo("This is a flash message test");
        $this->getFlashHandler()->addSuccess("This is a flash message test");

        $this->addContext("page_title", "DWWE - PHP ORM React Framework");
    }

    /**
     * @SubNavigation(text="Disabled Link", icon="cil-ban", requiredGetParams={"required_param_1", "required_param_2"})
     */
    public function disabledAction(): void {}

    /**
     * @SubNavigation(text="Navigation Sub-Routes", icon="cil-line-spacing")
     * @SubRoutes(routes={
     *     @SubRoute(text="SubRoute Link1", icon="cil-mood-good", hrefQueryAddition={"test": "test", "test2": "test2"}),
     *     @SubRoute(text="SubRoute Link2", labelIcon="cil-meh", href="javascript:void(0)", isLabel=true, labelClass="danger"),
     *     @SubRoute(text="SubRoute Link3", labelIcon="cil-mood-very-bad", href="javascript:void(0)", isLabel=true, labelClass="info"),
     *     @SubRoute(text="SubRoute Link4", icon="cil-mood-very-good", href="javascript:void(0)"),
     * }, onlyWhenActive=false)
     */
    public function subRoutesAction(): void {}
}