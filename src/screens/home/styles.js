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
        color: '#fff'
    },
    launchScreenTextShadow:{
        textShadowColor: 'rgba(0, 0, 0, 0.87)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 5
    },
    playerSearchFormContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: "flex-start",
        padding:'10%',
        backgroundColor: "rgba(255,255,255,0.8)",
        marginBottom:'50%'
    },
    text: {
        color: "rgba(0,0,0,0.4)",
        fontSize:20,
        fontWeight:'100',
        textAlign:'left',
        paddingTop: 20
    }
};
