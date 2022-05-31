/**
 * @name PestercordNoises
 * @author luminaryFlowers
 * @description This plugin changes the default Discord connect/disconnect sounds to be the Pesterchum chat open/close noises.
 * @version 1.1.0
 * @authorLink https://lumenscode.tumblr.com/
 * @donate https://ko-fi.com/lumens
 * @website https://lumens.live
 * @source https://github.com/luminaryFlowers/pestercord-noises
 */

const CONNECT_LINK = "https://lumens.live/resources/pestercordnoises/join.mp3";
const DISCONNECT_LINK = "https://lumens.live/resources/pestercordnoises/cease.mp3";
const CHAT_LINK = "https://lumens.live/resources/pestercordnoises/alarm.mp3";

const DEF_CONNECT = "/assets/5dd43c946894005258d85770f0d10cff.mp3";
const DEF_DISCONNECT = "/assets/7e125dc075ec6e5ae796e4c3ab83abb3.mp3";
const DEF_OTHERDISCONNECT = "/assets/4fcfeb2cba26459c4750e60f626cebdc.mp3"
const DEF_CHAT = "/assets/dd920c06a01e5bb8b09678581e29d56f.mp3";

module.exports = class PestercordNoises {
    updateConnect() {
        if(this.connectModule) return;

        try {
            this.connectModule = Object.values(this.modules).filter(module => module.exports === DEF_CONNECT)[0];
            this.connectModule.exports = CONNECT_LINK;
        } catch {}
    }

    updateDisconnect() {
        if(this.disconnectModule) return;

        try {
            this.disconnectModule = Object.values(this.modules).filter(module => module.exports === DEF_DISCONNECT)[0];
            this.disconnectModule.exports = DISCONNECT_LINK;
        } catch {}
    }

    updateOtherDisconnect() {
        if(this.otherDisconnectModule) return;

        try {
            this.otherDisconnectModule = Object.values(this.modules).filter(module => module.exports === DEF_OTHERDISCONNECT)[0];
            this.otherDisconnectModule.exports = DISCONNECT_LINK;
        } catch {}
    }

    updateChatNoise() {
        if(this.chatModule) return;

        try {
            this.chatModule = Object.values(this.modules).filter(module => module.exports === DEF_CHAT)[0];
            this.chatModule.exports = CHAT_LINK;
        } catch {}
    }

    attemptUpdateSounds() {
        if(Object.keys(this.modules).length === this.moduleCount) return;

        this.updateConnect();
        this.updateDisconnect();
        this.updateOtherDisconnect();
        this.updateChatNoise();
    }

    load() {
        let id = "bd-webpackmodules";
        let __discord_webpack_require__;
        __discord_webpack_require__ = window.webpackJsonp.push([[], {
            [id]: (module, exports, __internal_require__) => module.exports = __internal_require__
        }, [[id]]]);

        this.modules = __discord_webpack_require__.c;
        this.moduleCount = Object.keys(this.modules).length;
    }

    start() {
        if(this.connectModule) {
            this.connectModule.exports = CONNECT_LINK;
        } else this.updateConnect();

        if(this.disconnectModule) {
            this.disconnectModule.exports = DISCONNECT_LINK;
        } else this.updateDisconnect();

        if(this.otherDisconnectModule) {
            this.otherDisconnectModule.exports = DISCONNECT_LINK;
        } else this.updateOtherDisconnect();

        if(this.chatModule) {
            this.chatModule.exports = CHAT_LINK;
        } else this.updateChatNoise();
    }

    stop() {
        try {
            this.connectModule.exports = DEF_CONNECT;
        } catch {}

        try {
            this.disconnectModule.exports = DEF_DISCONNECT;
        } catch {}

        try {
            this.otherDisconnectModule.exports = DEF_OTHERDISCONNECT;
        } catch {}

        try {
            this.chatModule.exports = DEF_CHAT;
        } catch {}
    }

    observer(_) {
        this.attemptUpdateSounds();
    }
}