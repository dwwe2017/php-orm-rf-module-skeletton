<?php


namespace Modules\Dashboard\Controllers;


use Controllers\RestrictedXmlController;

/**
 * Class ApiController
 * @package Modules\Dashboard\Controllers
 */
class ApiController extends RestrictedXmlController
{
    /**
     * eg. for Ajax request via React
     * @see IndexController::reactAction()
     */
    public function indexAction(): void
    {
        $this->addContext("example_message", "This text has been sent by Ajax ;)");
    }
}