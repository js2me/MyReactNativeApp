import color from "color";
import { PixelRatio } from "react-native";

import {
    platformStyle,
    platform,
    deviceHeight,
    deviceWidth,
    isIphoneX,
    platformIsIOS
} from "./deviceInfo";

export default {
  platformStyle,
  platform,

  // Android
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: "#ED1727",
  badgeColor: "#fff",
  badgePadding: platformIsIOS ? 3 : 0,

  // Button
  btnFontFamily: platformIsIOS ? "System" : "Roboto_medium",
  btnDisabledBg: "#b5b5b5",
  btnDisabledClr: "#f1f1f1",
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platformIsIOS ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: "#fff",
  cardBorderColor: "#ccc",

  // CheckBox
  CheckboxRadius: platformIsIOS ? 13 : 0,
  CheckboxBorderWidth: platformIsIOS ? 1 : 2,
  CheckboxPaddingLeft: platformIsIOS ? 4 : 2,
  CheckboxPaddingBottom: platformIsIOS ? 0 : 5,
  CheckboxIconSize: platformIsIOS ? 21 : 14,
  CheckboxIconMarginTop: platformIsIOS ? undefined : 1,
  CheckboxFontSize: platformIsIOS ? 23 / 0.9 : 18,
  DefaultFontSize: 17,
  checkboxBgColor: "#039BE5",
  checkboxSize: 20,
  checkboxTickColor: "#fff",

  // Color
  brandPrimary: "#007aff",
  brandInfo: "#62B1F6",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandSidebar: "#252932",
  brandDark: "#000",
  brandLight: "#f4f4f4",

  // Font
  fontFamily: platformIsIOS ? "System" : "Roboto",
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: isIphoneX ? 89 : 55,
  footerDefaultBg: platformIsIOS ? "#F8F8F8" : "#4179F7",
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: "#2874F0",
  tabBarTextSize: platformIsIOS ? 14 : 11,
  activeTab: "#fff",
  sTabBarActiveTextColor: "#007aff",
  tabBarActiveTextColor: "#2874F0",
  tabActiveBgColor: "#cde1f9",

  // Header
  toolbarBtnColor: "#007aff",
  toolbarDefaultBg: platformIsIOS ? "#F8F8F8" : "#3F51B5",
  toolbarHeight: platformIsIOS ? (isIphoneX ? 88 : 64) : 56,
  toolbarIconSize: platformIsIOS ? 20 : 22,
  toolbarSearchIconSize: platformIsIOS ? 20 : 23,
  toolbarInputColor: platformIsIOS ? "#CECDD2" : "#fff",
  searchBarHeight: platformIsIOS ? 30 : 40,
  searchBarInputHeight: platformIsIOS ? 30 : 50,
  toolbarInverseBg: "#222",
  toolbarTextColor: "#000",
  toolbarDefaultBorder: "#a7a6ab",
  iosStatusbar: platformIsIOS ? "dark-content" : "light-content",
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: platformIsIOS ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platformIsIOS ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",
  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return "#575757";
  },
  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: platformIsIOS ? 37 : 30,
  lineHeight: platformIsIOS ? 20 : 24,

  // List
  listBg: "#fff",
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: platformIsIOS ? 10 : 12,
  listNoteColor: "#808080",
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: platformIsIOS ? 25 : 23,
  radioSelectedColorAndroid: "#3F51B5",
  radioBtnLineHeight: platformIsIOS ? 29 : 24,
  radioColor: "#7e7e7e",
  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hex();
  },

  // Segment
  segmentBackgroundColor: platformIsIOS ? "#F8F8F8" : "#3F51B5",
  segmentActiveBackgroundColor: platformIsIOS ? "#007aff" : "#fff",
  segmentTextColor: platformIsIOS ? "#007aff" : "#fff",
  segmentActiveTextColor: platformIsIOS ? "#fff" : "#3F51B5",
  segmentBorderColor: platformIsIOS ? "#007aff" : "#fff",
  segmentBorderColorMain: platformIsIOS ? "#a7a6ab" : "#3F51B5",

  // Spinner
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",

  // Tab
  tabDefaultBg: platformIsIOS ? "#F8F8F8" : "#3F51B5",
  topTabBarTextColor: platformIsIOS ? "#6b6b6b" : "#b3c7f9",
  topTabBarActiveTextColor: platformIsIOS ? "#007aff" : "#fff",
  topTabActiveBgColor: platformIsIOS ? "#cde1f9" : undefined,
  topTabBarBorderColor: platformIsIOS ? "#a7a6ab" : "#fff",
  topTabBarActiveBorderColor: platformIsIOS ? "#007aff" : "#fff",

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,
  tabTextColor: "#222222",

  // Text
  textColor: "#000",
  inverseTextColor: "#fff",
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platformIsIOS ? "System" : "Roboto_medium",
  titleFontSize: platformIsIOS ? 17 : 19,
  subTitleFontSize: platformIsIOS ? 12 : 14,
  subtitleColor: platformIsIOS ? "#8e8e93" : "#FFF",
  titleFontColor: platformIsIOS ? "#000" : "#FFF",

  // Other
  borderRadiusBase: platformIsIOS ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownBg: "#000",
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  jumbotronBg: "#C9C9CE",
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30
};
