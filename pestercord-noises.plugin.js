/**
 * @name PestercordNoises
 * @author luminaryFlowers
 * @description This plugin changes some Discord noises to be Pesterchum themed. Press the SBURB icon in the server tray to replace the sounds. A sound must play at least once before it can be replaced.
 * @version 1.2.0
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
        if(this.connectModule) return 1;

        try {
            this.connectModule = Object.values(this.modules).filter(module => module.exports === DEF_CONNECT)[0];
            this.connectModule.exports = CONNECT_LINK;
            return 1;
        } catch { return 0; }
    }

    updateDisconnect() {
        if(this.disconnectModule) return 1;

        try {
            this.disconnectModule = Object.values(this.modules).filter(module => module.exports === DEF_DISCONNECT)[0];
            this.disconnectModule.exports = DISCONNECT_LINK;
            return 1;
        } catch { return 0; }
    }

    updateOtherDisconnect() {
        if(this.otherDisconnectModule) return 1;

        try {
            this.otherDisconnectModule = Object.values(this.modules).filter(module => module.exports === DEF_OTHERDISCONNECT)[0];
            this.otherDisconnectModule.exports = DISCONNECT_LINK;
            return 1;
        } catch { return 0; }
    }

    updateChatNoise() {
        if(this.chatModule) return 1;

        try {
            this.chatModule = Object.values(this.modules).filter(module => module.exports === DEF_CHAT)[0];
            this.chatModule.exports = CHAT_LINK;
            return 1;
        } catch { return 0; }
    }

    attemptUpdateSounds() {
        return this.updateConnect() + this.updateDisconnect() + this.updateOtherDisconnect() + this.updateChatNoise();
    }

    load() {
        let id = "bd-webpackmodules";
        let __discord_webpack_require__;
        __discord_webpack_require__ = window.webpackJsonp.push([[], {
            [id]: (module, exports, __internal_require__) => module.exports = __internal_require__
        }, [[id]]]);

        this.modules = __discord_webpack_require__.c;
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

        this.pestercordIcon = document.getElementById("pestercord-wao");

        if(this.pestercordIcon) { this.pestercordIcon.remove(); }

        let scroller = document.getElementsByClassName("scroller-3X7KbA")[0];
        this.pestercordIcon = document.createElement("div");
        this.pestercordIcon.className = "listItem-3SmSlK";
        this.pestercordIcon.id = "pestercord-wao";
        this.pestercordIcon.innerHTML = `
        <div class="listItem-3SmSlK">
            <div class="pill-1NRFie">
                <div class="wrapper-z5ab_q" aria-hidden="true">
                </div>
            </div>
            
            <div class="listItemWrapper-3d87LP" style="color: #3BA55D;">
                <div class="wrapper-28eC3z">
                    <svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
                        <defs>
                            <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="aa635ce3-5b7f-4319-8151-5d8e41aed794-blob_mask">
                            </path>
                        </defs>
                        <mask id="aa635ce3-5b7f-4319-8151-5d8e41aed794" fill="black" x="0" y="0" width="48" height="48">
                            <use href="#aa635ce3-5b7f-4319-8151-5d8e41aed794-blob_mask" fill="white">
                            </use>
                        </mask>
                        <foreignObject mask="url(#aa635ce3-5b7f-4319-8151-5d8e41aed794)" x="0" y="0" width="48" height="48">
                            <div class="circleIconButton-1VxDrg">
                                <svg width="24" height="24" viewBox="0 0 24 24" class="svg-2zuE5p circleIcon-3489FI" overflow="visible" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width: 2.5pt; height: auto; margin: 7px 0 0 9px;">
                                    <g id="#4be14eff">
                                        <path fill="currentColor" opacity="1.00" d=" M 106.10 7.03 C 139.87 24.39 173.84 41.38 207.52 58.90 C 174.38 59.12 141.22 58.95 108.07 58.99 C 108.02 60.66 107.98 62.34 107.93 64.01 C 73.45 63.93 38.96 64.13 4.48 63.91 C 17.85 56.67 31.55 50.06 44.99 42.95 C 45.02 32.64 44.98 22.32 45.01 12.01 C 57.34 11.99 69.67 11.99 81.99 12.01 C 81.99 15.67 82.00 19.32 82.01 22.98 C 89.99 19.32 98.02 15.75 105.93 11.96 C 105.99 10.32 106.03 8.68 106.10 7.03 Z" />
                                        <path fill="currentColor" opacity="1.00" d=" M 115.01 65.01 C 139.00 64.99 163.00 64.99 186.99 65.01 C 187.01 89.00 187.01 113.00 186.99 136.99 C 175.33 137.01 163.67 137.01 152.01 136.99 C 151.98 124.66 152.02 112.34 151.99 100.01 C 139.66 99.98 127.34 100.02 115.01 99.99 C 114.99 88.33 114.99 76.67 115.01 65.01 Z" />
                                        <path fill="currentColor" opacity="1.00" d=" M 29.01 69.01 C 53.00 68.99 77.00 68.99 100.99 69.01 C 101.01 93.00 101.01 117.00 100.99 140.99 C 77.00 141.01 53.00 141.01 29.01 140.99 C 28.99 117.00 28.99 93.00 29.01 69.01 Z" />
                                        <path fill="currentColor" opacity="1.00" d=" M 109.01 107.01 C 121.00 106.99 133.00 106.99 144.99 107.01 C 145.01 119.00 145.01 131.00 144.99 142.99 C 133.00 143.01 121.00 143.01 109.01 142.99 C 108.99 131.00 108.99 119.00 109.01 107.01 Z" />
                                        <path fill="currentColor" opacity="1.00" d=" M 29.01 151.01 C 53.00 150.99 77.00 150.99 100.99 151.01 C 101.01 175.00 101.01 199.00 100.99 222.99 C 77.00 223.01 53.00 223.01 29.01 222.99 C 28.99 199.00 28.99 175.00 29.01 151.01 Z" />
                                        <path fill="currentColor" opacity="1.00" d=" M 111.01 151.01 C 135.00 150.99 159.00 150.99 182.99 151.01 C 183.01 175.00 183.01 199.00 182.99 222.99 C 159.00 223.01 135.00 223.01 111.01 222.99 C 110.99 199.00 110.99 175.00 111.01 151.01 Z" />
                                    </g>
                                </svg>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </div>
        `;

        this.pestercordIcon.onclick = () => {
            let total = this.attemptUpdateSounds();
            window.BdApi.showToast(`Attempted to update sounds. Replaced ${total}/4 sounds.`);
        }
        scroller.insertBefore(this.pestercordIcon, scroller.children[scroller.children.length - 1]);
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

        try {
            this.pestercordIcon.remove();
        } catch {}
    }
}