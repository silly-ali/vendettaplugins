import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Bluetooth Audio Fix has started.");
    },
    onUnload: () => {
        logger.log("Bluetooth Audio Fix has stopped.");
    },
    settings: Settings,
}