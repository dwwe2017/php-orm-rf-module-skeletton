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

namespace Modules\ReactModule\Controllers;


use Annotations\Access;
use Annotations\Navigation;
use Annotations\Redirect;
use Annotations\SubNavigation;
use Controllers\RestrictedFrontController;

/**
 * Class PublicController
 * @package Modules\Dashboard\Controllers
 * @Access(role=Entities\Group::ROLE_USER)
 * @Navigation(text="React Examples", position="sidebar", icon="cil-level-down")
 */
class IndexController extends RestrictedFrontController
{
    /**
     * @internal ReactJS
     * @see views/IndexController/indexAction.js
     * @Redirect(module="reactModule", action="form")
     */
    public function indexAction(): void {}

    /**
     * @SubNavigation(text="Forms and Validation", icon="cil-short-text")
     */
    public function formAction(): void
    {
        $this->addContext("example_message", "This text has been sent by Ajax ;)");
    }

    /**
     * @SubNavigation(text="Tabs and Routes", icon="cil-window-restore")
     */
    public function routesAction(): void {}
}
