import * as React from "react";
import {DrawerLayoutAndroid, View, Text, StyleSheet} from "react-native";
import {BACKGROUND_COLOR1, BACKGROUND_COLOR2, FONT_COLOR} from "../../constants/colors";


export default class DrawerLayout extends React.Component {

    navigationView = ()=>(
        <View style={styles.drawerView}>
            <Text style={styles.drawerViewTitle} elevation={5}>I'm in the Drawer!</Text>
        </View>
    );

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.navigationView}>
                {this.props.children}
            </DrawerLayoutAndroid>
        )
    }
}
const styles = StyleSheet.create({
    drawerView:{
        flex:1,
        backgroundColor:BACKGROUND_COLOR1,
        paddingBottom:20
    },
    drawerViewTitle:{
        width:'100%',
        flex:0.05,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingTop:40,
        paddingBottom:20,
        color:FONT_COLOR,
        backgroundColor:BACKGROUND_COLOR2
    }
});