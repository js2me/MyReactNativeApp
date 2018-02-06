const React = require("react-native");
const {Dimensions, Platform} = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    imageContainer: {
        flex: 1,
        width: null,
        height: null
    },
    logoContainer: {
        flex: 1,
        marginTop: deviceHeight / 8,
        marginBottom: 30,
        justifyContent:'flex-start'
    },
    logoText: {
        fontSize:60,
        width:'100%',
        textAlign:'center',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.87)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 5
    },
    text: {
        color: "#D8D8D8",
        bottom: 6,
        marginTop: 5
    }
};
