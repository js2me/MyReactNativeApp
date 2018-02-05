import { Platform, Dimensions } from "react-native";
import { PixelRatio } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
export const platform = Platform.OS;
export const platformIsIOS = platform === "ios";
export const platformStyle = undefined;
export const isIphoneX =
    platformIsIOS && deviceHeight === 812 && deviceWidth === 375;