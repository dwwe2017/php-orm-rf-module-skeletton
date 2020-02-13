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


use Doctrine\Common\Annotations\AnnotationException;
use Exceptions\CacheException;
use Exceptions\DoctrineException;
use Exceptions\InvalidArgumentException;
use ReflectionException;

/**
 * Class ApiController
 * @package Modules\Dashboard\Controllers
 */
class ApiController extends \Controllers\ApiController
{
    /**
     * ApiController constructor.
     * @param string $baseDir
     * @throws AnnotationException
     * @throws CacheException
     * @throws DoctrineException
     * @throws InvalidArgumentException
     * @throws ReflectionException
     */
    public function __construct(string $baseDir)
    {
        parent::__construct($baseDir);

        /**
         * With this method the context is cleaned up before an output takes place.
         * So you make sure that only the information you declare is output!
         */
        $this->contextClear();
    }

    /**
     * @see fronted/IndexController/indexAction/TestAction.js
     */
    public function indexAction(): void
    {
        $this->redirect("reactModule", "index", "form");
    }

    /**
     *
     */
    protected function getMessageAction(): void
    {
        $this->addContext("message", "Message from ApiController");
    }

    /**
     *
     */
    protected function postExampleAction(): void
    {
        $this->addContext("success", __("Saved"));
    }

    /**
     * @param string $default
     */
    protected function getTranslationAction(string $default = "en_US"): void
    {
        parent::getTranslationAction($default);
    }
}
