"use strict";
const Encore = require("./webpackUtils/Encore.extend");

import path from "path";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
// раскоментить, если сайт работает в cp1251
// import EncodingPlugin from 'webpack-encoding-plugin';
import BComponent from "./webpackUtils/BComponent";

const PATH_TO_ROOT = "..";
const TEMPLATE_NAME = "profnastil-redesign";
const TEMPLATE_PATH = `local/templates/${TEMPLATE_NAME}`;

const rootPath = (p = "") => {
    const root = path.resolve(__dirname, PATH_TO_ROOT);
    return root + p;
};

Encore.BXComponent = new BComponent({root: rootPath()});

process.noDeprecation = true;

Encore.setOutputPath(PATH_TO_ROOT)
    .setPublicPath(rootPath())

    // Подключение компонентов в сборку webpack
    // файлы выхода (out) надо указывать без расширения

    // Заголовки кистью
    .BXComponentStyle("pfn:brush-title")

    // Компонент «Верхнее меню»
    .BXComponentStyle("bitrix:menu", {
        siteTemplate: ".default",
        template: "menu.header-top",
    })

    // Компонент «Главное меню»
    .BXComponentStyle("bitrix:menu", {
        siteTemplate: ".default",
        template: "menu.main",
    })

    // Компонент «Меню каталога»
    .BXComponentStyle("bitrix:menu", {
        siteTemplate: ".default",
        template: "menu.catalog",
    })
    .BXComponentJs("bitrix:menu", {
        siteTemplate: ".default",
        template: "menu.catalog",
    })

    // Компонент «Вертикальное меню»
    .BXComponentStyle("bitrix:menu", {
        siteTemplate: ".default",
        template: "menu.vertical",
    })

    // Компонент «Поиск в шапке»
    .BXComponentStyle("bitrix:search.form", {
        siteTemplate: ".default"
    })

    // Компонент «Мобильное меню»
    .BXComponentStyle("bitrix:menu", {
        siteTemplate: ".default",
        template: "vue-navigation",
    })
    .BXComponentJs("bitrix:menu", {
        siteTemplate: ".default",
        template: "vue-navigation",
    })

    // Компонент «Карусель товаров»
    .BXComponentStyle("bitrix:catalog.top", {
        siteTemplate: ".default",
        template: "products-carousel",
    })
    .BXComponentJs("bitrix:catalog.top", {
        siteTemplate: ".default",
        template: "products-carousel",
    })

    // Миникарточка товара
    .BXComponentStyle("bitrix:catalog.item", {
        siteTemplate: ".default",
        template: "mini-product",
    })

    // Фильтр в каталоге
    .BXComponentStyle("bitrix:catalog.smart.filter", {
        siteTemplate: ".default",
    })
    .BXComponentJs("bitrix:catalog.smart.filter", {
        siteTemplate: ".default",
    })

    // Обёртка для мобильного фильтра
    .BXComponentStyle("bitrix:catalog.smart.filter", {
        siteTemplate: ".default",
        template: "modal-wrapped-filter",
    })
    .BXComponentJs("bitrix:catalog.smart.filter", {
        siteTemplate: ".default",
        template: "modal-wrapped-filter",
    })

    // Хлебные крошки
    .BXComponentStyle("bitrix:breadcrumb", {
        siteTemplate: ".default",
        template: "shop",
    })

    // Каталог
    .BXComponentStyle("bitrix:catalog", {
        siteTemplate: ".default",
    })

    .enablePostCssLoader()
    .enableSassLoader()
    .enableVueLoader()
    .enableSourceMaps(!Encore.isProduction())

    .addLoader({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            {
                loader: "file-loader",
            },
        ],
    })

    // если сайт работает в cp1251, то подключаем этот плагин,
    // при этом все файлы для сборки (.js, .sass, .css и пр) должны быть в utf-8, плагин сам их конвертит при сборке
    // .addPlugin(new EncodingPlugin({encoding: "cp1251"}))
    .addPlugin(new FriendlyErrorsWebpackPlugin({clearConsole: true}));

const config = Encore.getWebpackConfig();

if (!config.resolve.hasOwnProperty("modules")) {
    config.resolve = Object.assign({}, config.resolve, {
        modules: [
            rootPath("/local/src/js"),
            "node_modules", // указываем папку, откуда брать основные либы, иначе будут косяки
        ],
    });

    config.stats = Object.assign({}, config.stats, {
        hash: false,
        version: false,
        timings: false,
        assets: true,
        chunks: true,
        maxModules: 0,
        modules: true,
        children: false,
        source: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        // publicPath: true,
        colors: true,
        entrypoints: true,
        performance: true,
        reasons: true,
    });
}

config.performance = {hints: false};

// Добавляем шаблон
config.entry[
    `${TEMPLATE_PATH}/dist/bundle.min`
    ] = `${rootPath()}/${TEMPLATE_PATH}/src/js/app.js`;

// fs.writeFileSync('./encore_conf.txt', JSON.stringify(config.plugins));
// console.info(config.plugins);
// throw new Error;

module.exports = config;
