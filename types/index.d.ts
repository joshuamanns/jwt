// Type definitions for koa-jwt 2.x
// Project: https://github.com/koajs/jwt
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Koa = require("koa");

export = jwt;

declare function jwt(options: jwt.Options): jwt.Middleware;

declare namespace jwt {
    export interface Options {
        secret: string | Buffer;
        key?: string;
        getToken?(opts: jwt.Options): string;
        passthrough?: boolean;
        cookie?: string;
        debug?: boolean;
        audience?: string;
        issuer?: string;
        algorithms?: string[];
    }

    export interface Middleware extends Koa.Middleware {
        unless(params?: any): any;
    }
}
