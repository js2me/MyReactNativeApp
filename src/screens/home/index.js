import React, {Component} from "react";
import {ImageBackground, View, StatusBar} from "react-native";
import {Container, Button, H3, Text, Input, Item, Form, Content} from "native-base";
import CardView from 'react-native-cardview'
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

                    <CardView
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={5}>
                        <Container style={styles.playerSearchFormContainer}>
                            <Content>
                                <Form>
                                    <Item>
                                        <Input placeholder="Underline Textbox"/>
                                    </Item>
                                </Form>
                            </Content>
                        </Container>
                    </CardView>
                </ImageBackground>
            </Container>
        );
    }
}

export default Home;
