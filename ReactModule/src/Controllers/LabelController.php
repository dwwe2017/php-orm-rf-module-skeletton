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


use Annotations\Navigation;
use Annotations\SubNavigation;
use Controllers\RestrictedFrontController;

/**
 * Class LabelController
 * @package Modules\ReactModule\Controllers
 * @Navigation(text="Only Bookmarks", position="sidebar", isLabel=true, labelClass="success")
 */
class LabelController extends RestrictedFrontController
{
    /**
     * @SubNavigation(text="Bookmark 2", href="javascript:void(0)", isLabel=true, labelClass="warning")
     */
    public function label1Action(): void {}

    /**
     * @SubNavigation(text="Tea(m)speak Interface", href="https://www.teamspeak-interface.net", target="_blank", isLabel=true, labelClass="info")
     */
    public function label2Action(): void {}

    /**
     * @SubNavigation(text="dwwe2017/phorm", href="https://github.com/dwwe2017/php-orm-react-framework", target="_blank", isLabel=true, labelClass="danger")
     */
    public function label3Action(): void {}
}