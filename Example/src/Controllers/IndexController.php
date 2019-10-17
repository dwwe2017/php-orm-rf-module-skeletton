<?php
////////////////////////////////////////////////////////////////////////////////
// Copyright (c) 2019. DW Web-Engineering
// https://www.teamspeak-interface.de
// Developer: Daniel W.
//
// License Informations: This program may only be used in conjunction with a valid license.
// To purchase a valid license please visit the website www.teamspeak-interface.de

namespace Modules\Dashboard\Controllers;


use Annotations\Access;
use Annotations\Navigation;
use Controllers\RestrictedFrontController;

/**
 * Class PublicController
 * @package Modules\Dashboard\Controllers
 * @Access(role=Entities\Group::ROLE_USER)
 * @Navigation(position="sidebar", icon="icon-dashboard", href="index.php?module=dashboard")
 */
class IndexController extends RestrictedFrontController
{
    /**
     * @internal View: PHP/Twig
     */
    public function indexAction(): void
    {
        /**
         * If you use a normal PHP method, then the view is rendered using the Twig template in the directory xy of the same name.
         * @see views/IndexController/indexAction.tpl.js
         */
    }

    /**
     * @internal View: React/JS
     */
    public function reactAction(): void
    {
        /**
         * In the event that a JS file is found instead of a Twig template, the TSI automatically uses React as a view in the fronted
         * @see fronted/IndexController/reactAction.tpl.jsx
         * @see views/IndexController/indexAction.tpl.js
         */
    }
}