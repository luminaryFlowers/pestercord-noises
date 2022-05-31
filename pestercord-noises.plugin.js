/**
 * @name PestercordNoises
 * @author luminaryFlowers
 * @description This plugin changes the default Discord connect/disconnect sounds to be the Pesterchum chat open/close noises.
 * @version 1.0.0
 * @authorLink https://lumenscode.tumblr.com/
 * @donate https://ko-fi.com/lumens
 * @website https://lumens.live
 * @source https://github.com/luminaryFlowers/pestercord-noises
 */

/*
CONNECT: 835579
DISCONNECT: 279686

CHAT RECEIVE: 423796
*/

module.exports = class PestercordNoises {
    load() {
        let id = "bd-webpackmodules";
        let __discord_webpack_require__;
        __discord_webpack_require__ = window.webpackJsonp.push([[], {
            [id]: (module, exports, __internal_require__) => module.exports = __internal_require__
        }, [[id]]]);

        this.modules = __discord_webpack_require__.c;
    }

    start() {
        this.modules[835579].exports = "https://64.media.tumblr.com/13f42345f60d588f7558598a811ef2ff/73268037f138ba07-fb/5609f0f3eadb7f264df33dd33d1a0e81617967b8.mp3";
        this.modules[279686].exports = "https://64.media.tumblr.com/64a1041c8cc41b988a3fe5dc9f381b1b/73268037f138ba07-49/a4fb855559f052b40d25495acbb8a811fcf6fd12.mp3";
    }

    stop() {
        // this.modules[835579].exports = "/assets/5dd43c946894005258d85770f0d10cff.mp3";
        // this.modules[279686].exports = "/assets/7e125dc075ec6e5ae796e4c3ab83abb3.mp3";
    }
}