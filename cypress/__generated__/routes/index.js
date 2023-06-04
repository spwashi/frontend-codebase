"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsoluteUrl = exports.mainRoutes = exports.adminRoutes = void 0;
var adminRoutes_1 = require("./domains/adminRoutes");
Object.defineProperty(exports, "adminRoutes", { enumerable: true, get: function () { return adminRoutes_1.adminRoutes; } });
var mainRoutes_1 = require("./domains/mainRoutes");
Object.defineProperty(exports, "mainRoutes", { enumerable: true, get: function () { return mainRoutes_1.mainRoutes; } });
const envSiteUrl = "http://localhost:5173";
const getAbsoluteUrl = (route, siteUrl = envSiteUrl) => {
    return siteUrl + route.href;
};
exports.getAbsoluteUrl = getAbsoluteUrl;
