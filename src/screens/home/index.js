import React, {Component} from "react";
import {ImageBackground, View, StatusBar} from "react-native";
import {Container, Button, H3, Text, Input} from "native-base";
import images from 'app-theme/variables/images';

import styles from "./styles";

class Home extends Component {
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <ImageBackground source={images.launchScreen} style={styles.imageContainer}>
                    <View style={styles.logoContainer}>
                        <Text style={[styles.logoText, styles.launchScreenTextShadow]}>OPENDOTA</Text>
                    </View>
                    <View style={styles.playerSearchFormContainer}>
                        <Text style={[styles.text]}>player search</Text>
                        <Input placeholder="Search" style={{width:'100%',borderBottomWidth:2, borderBottomColor:'rgba(0,0,0,0.4)'}}/>
                        <Button
                            style={{backgroundColor: "#6FAF98", alignSelf: "center", width:'100%'}}
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Text style={{textAlign:'center',width:'100%'}}>search</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

export default Home;
