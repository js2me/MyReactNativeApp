import * as React from "react";
import {DrawerNavigator} from "react-navigation";
import Header from "./screens/Header/";

import Home from "./screens/home/";
import Anatomy from "./screens/anatomy/";
import Overview from "./screens/Overview/";
import Footer from "./screens/footer/";
import NHBadge from "./screens/badge/";
import NHButton from "./screens/button/";
import NHCard from "./screens/card/";
import NHCheckbox from "./screens/checkbox/";
import NHDeckSwiper from "./screens/deckswiper/";
import NHFab from "./screens/fab/";
import NHForm from "./screens/form/";
import NHIcon from "./screens/icon/";
import ListSwipe from "./screens/listSwipe/";
import BasicIcon from "./screens/icon/basic";
import IconState from "./screens/icon/state";
import SpecificIcon from "./screens/icon/specific";
import NHLayout from "./screens/layout/";
import NHList from "./screens/list/";
import NHRadio from "./screens/radio/";
import NHSearchbar from "./screens/searchbar/";
import NHSpinner from "./screens/spinner/";
import NHPicker from "./screens/picker/";
import NHTab from "./screens/tab/";
import NHThumbnail from "./screens/thumbnail/";
import NHTypography from "./screens/typography/";
import SideBar from "./screens/sidebar";
import Segment from "./screens/segment";
import Toast from "./screens/toast";
import Actionsheet from "./screens/actionsheet";


export const AppDrawerNavigator = DrawerNavigator(
    {
        Home: {screen: Home},
        Overview: {screen: Overview},
        Header: {screen: Header},
        Footer: {screen: Footer},
        NHBadge: {screen: NHBadge},
        NHButton: {screen: NHButton},
        NHCard: {screen: NHCard},
        NHCheckbox: {screen: NHCheckbox},
        NHDeckSwiper: {screen: NHDeckSwiper},
        NHFab: {screen: NHFab},
        NHForm: {screen: NHForm},
        NHIcon: {screen: NHIcon},
        BasicIcon: {screen: BasicIcon},
        IconState: {screen: IconState},
        SpecificIcon: {screen: SpecificIcon},
        NHLayout: {screen: NHLayout},
        NHList: {screen: NHList},
        ListSwipe: {screen: ListSwipe},
        NHRadio: {screen: NHRadio},
        NHSearchbar: {screen: NHSearchbar},
        NHSpinner: {screen: NHSpinner},
        NHPicker: {screen: NHPicker},
        NHTab: {screen: NHTab},
        NHThumbnail: {screen: NHThumbnail},
        NHTypography: {screen: NHTypography},
        Segment: {screen: Segment},
        Toast: {screen: Toast},
        Actionsheet: {screen: Actionsheet}
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);