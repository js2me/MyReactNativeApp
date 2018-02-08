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
        justifyContent: 'flex-start'
    },
    logoText: {
        fontSize: 60,
        width: '100%',
        textAlign: 'center',
        color: '#fff'
    },
    launchScreenTextShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.87)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 5
    },
    playerSearchFormContainer: {
        width: '84%',
        padding: '5%',
        marginLeft: '8%',
        marginRight: '8%',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 2,
        marginBottom: 200,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 1,
        shadowOpacity: 1.0
    },
    text: {
        color: "rgba(0,0,0,0.4)",
        fontSize:
            20,
        fontWeight:
            '100',
        textAlign:
            'left',
        paddingTop:
            20
    }
}
;
