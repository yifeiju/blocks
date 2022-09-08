import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        height: 892,
        width:412,
        borderColor:'black',
        borderWidth:1,
        padding:25,
    },
    btnyellow:{
        width:300,
        height:48,
        backgroundColor:'#FF8200',
        textAlign:'center',
        justifyContent: 'center', 
        borderRadius:37,
        
    },
    screen: {
        flex: 1,
        justifyContet: 'center',
        alignItems: 'center',
    },
    
});

export default globalStyles;