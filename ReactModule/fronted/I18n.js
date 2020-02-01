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
 *
 * IT IS RECOMMENDED TO USE THE FOLLOWING SCRIPT FOR FURTHER DEVELOPMENT AND NOT TO CHANGE IT!
 */

import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const fallbackLng = ['en_US'];
const availableLanguages = ['en_US', 'de_DE'];

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng,
        debug: false,
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false
        },
        backend: {
            /**
             * To load a translation, one of your API classes that have the ApiController
             * as parent class must contain the parent::getTranslationAction method
             * @example ReactModule/src/Controllers/ApiController.php::getTranslationAction()
             */
            loadPath: "index.php?module=reactModule&controller=api&action=getTranslation&langCode={{lng}}",
        },
        detection: {
            checkWhitelist: true,
            caches: ['localStorage', 'cookie'],
        },
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    });

export default i18n;