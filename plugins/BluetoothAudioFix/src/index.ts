import { getModule, Toasts, React, ReactNative, Dialog, Locale } from '@vendetta/metro';
import { getAssetId } from '@vendetta/getAssetId';
import { after } from "@vendetta/patcher";

type FilterOptions = {
    exports?: boolean;
    default?: false;
} | {
    exports?: true;
    default?: true;
};

export default class BluetoothAudioFix extends Plugin {
    private getByName(defaultName: string, options?: FilterOptions) {
        return getModule(m => m?.default?.name === defaultName, options);
    }
    public async start() {
        const AudioManager = ReactNative.NativeModules.AudioManager
        this.patcher.insteadDoNothing(AudioManager, "setCommunicationModeOn");
        /*this.patcher.after(AudioManager, "setCommunicationModeOn", (ctx) => {
            console.log("setCommunicationModeOn", ctx.args, ctx.result);
        })
        this.patcher.after(AudioManager, "getAudioDevices", (ctx) => {
            console.log("getAudioDevices", ctx.args, ctx.result);
        })
        this.patcher.after(AudioManager, "getActiveAudioDevice", (ctx) => {
            console.log("getActiveAudioDevice", ctx.args, ctx.result);
        })
        this.patcher.after(AudioManager, "setActiveAudioDevice", (ctx) => {
            console.log("setActiveAudioDevice", ctx.args, ctx.result);
        })*/
    }
}
