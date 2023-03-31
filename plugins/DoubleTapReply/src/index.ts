import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Double Tap Reply has started.");
    },
    onUnload: () => {
        logger.log("Double Tap Reply has stopped.");
    },
    settings: Settings,
}