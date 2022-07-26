import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 0,
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },

    btn: {
        border: '1px solid black',
        padding: 10,
        margin: 10,
        borderRadius: 3,
        backgroundColor: 'gray'
    },
    white: {
        color: 'white'
    }
});

export default globalStyles;