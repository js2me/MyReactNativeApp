import * as React from "react";
import Setup from "./src/boot/setup";

export default class App extends React.Component {
    render() {
        return <Setup />;
    }
}

// import React from 'react';
// import * as Expo from "expo";
// import {Text, Button, View, StyleSheet, ToolbarAndroid} from "react-native";
// import DrawerLayout from "./components/DrawerLayout";
// import toolbarLogo from './assets/images/logo.png';
// import {BACKGROUND_COLOR2, FONT_COLOR} from "./constants/colors";
//
// export default class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             fontsLoaded: false
//         }
//     }
//
//     componentWillMount() {
//         Expo.Font.loadAsync({
//             'Roboto': require('native-base/Fonts/Roboto.ttf'),
//             'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//             'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
//         }).then(() => {
//                 this.setState({fontsLoaded: true});
//         });
//     }
//
//     openNewPage() {
//
//     }
//
//     onActionSelected() {
//
//     }
//
//     render() {
//         if(!this.state.fontsLoaded){
//             return <Expo.AppLoading />;
//         }
//
//         return (
//             <DrawerLayout>
//                 <ToolbarAndroid
//                     logo={toolbarLogo}
//                     title="AwesomeApp"/>
//                 <View style={{flex: 1, alignItems: 'center'}}>
//                     <Text style={{margin: 50, fontSize: 15, textAlign: 'right'}}>Здарова</Text>
//                 </View>
//             </DrawerLayout>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     loadingView:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     loadingViewText:{
//         fontSize: 28
//     }
// });