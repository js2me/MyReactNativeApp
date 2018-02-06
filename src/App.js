import * as React from "react";
import {Root} from "native-base";
import {Font} from "expo";
import {AppNavigator} from './AppNavigator';
import Loading from "./components/Loading";



export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoaded: false};
    }

    componentWillMount() {
        this.loadFonts();
    }

    async loadFonts() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({isLoaded: true});
    }

    render() {
        return (
            <Loading isLoading={!this.state.isLoaded}>
                <Root>
                    <AppNavigator/>
                </Root>
            </Loading>
        )
    }
}
