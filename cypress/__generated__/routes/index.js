"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativeRouterPath = exports.getRouterPath = exports.getAbsoluteUrl = exports.forumRoutes = exports.mainRoutes = exports.adminRoutes = void 0;
var adminRoutes_1 = require("./domains/adminRoutes");
Object.defineProperty(exports, "adminRoutes", { enumerable: true, get: function () { return adminRoutes_1.adminRoutes; } });
var mainRoutes_1 = require("./domains/mainRoutes");
Object.defineProperty(exports, "mainRoutes", { enumerable: true, get: function () { return mainRoutes_1.mainRoutes; } });
var forumRoutes_1 = require("./domains/forumRoutes");
Object.defineProperty(exports, "forumRoutes", { enumerable: true, get: function () { return forumRoutes_1.forumRoutes; } });
const envSiteUrl = "http://localhost:5173";
function getAbsoluteUrl(route, siteUrl = envSiteUrl) {
    return siteUrl + route.href;
}
exports.getAbsoluteUrl = getAbsoluteUrl;
function getRouterPath(route, ...params) {
    if (route.buildPath) {
        return route.buildPath(false, ...params);
    }
    return route.absolutePath;
}
exports.getRouterPath = getRouterPath;
function getRelativeRouterPath(route) {
    if (!route.relativePath)
        throw new Error("improper usage of routes");
    return route.relativePath;
}
exports.getRelativeRouterPath = getRelativeRouterPath;
