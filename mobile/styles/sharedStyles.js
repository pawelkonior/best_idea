import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    scrollView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    footer: {
        paddingBottom: 30,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    sectionTitleGreen: {
        fontSize: 24,
        fontWeight: '600',
        color: 'green',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
    },
    sectionDescriptionBold: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    clickableText: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'green',
    },
    sectionTitleStory: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
    sectionDescriptionStory: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
    },
    highlight: {
        fontWeight: '700',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    storyImage: {
        width: 700,
        height: 700,
        resizeMode: 'cover',
        position: 'absolute',
    },
    storyImageSmall: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonWrapper: {
        marginTop: 200,
    },
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: 'lightsalmon',
        padding: 5,
        paddingTop: 15,
        marginTop: 20,
        paddingBottom: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },
    storyContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    storyInnerContainer: {
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    seperatorStyle: {
        height: 1,
        backgroundColor: 'lightsalmon',
        paddingTop: 2,
        marginTop: 25,
    },
    headerImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    footerImage: {
        width: 75,
        height: 75,
        resizeMode: 'cover',
    },
    footerContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        marginBottom: 20,
    },
    headerContainer: {
        paddingHorizontal: 25,
        marginBottom: 10,
        backgroundColor: 'lightsalmon',
        borderRadius: 6,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        alignSelf: 'center',
    },
    container: {
        height: 53,
        width: 450,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchInput: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: 10,
        paddingTop: 15,
        paddingLeft: 20,
        flexDirection: 'column',
        color: 'black',
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: 20,
        justifyContent: 'center',
    },
    clearContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingRight: 50,
        paddingBottom: 1,
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    clearImage: {
        height: 20,
        width: 20,
    },
});
