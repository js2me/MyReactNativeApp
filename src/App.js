import * as React from "react";
import {Root, View, Spinner} from "native-base";
import {Font} from "expo";
import platformStyles from './theme/variables/platform';
import {AppNavigator} from './AppNavigator';



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
        if(!this.state.isLoaded){
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Spinner color={platformStyles.brandPrimary}/>
                </View>
            )
        }

        return (
            <Root>
                <AppNavigator/>
            </Root>
        )
    }
}
