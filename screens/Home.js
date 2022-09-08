import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight} from 'react-native';
import { logout } from '../app/api';
import globalStyles from '../app/globalStyles';
import logo from '../assets/logo.png'
import busca from '../assets/busca.png'

const Home=()=>{
    return(
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <View style={styles.center}>
            <Image source={logo} style={{ width:266 , height: 74 }} resizeMode={'center'} />
            </View>
            
                <View style={styles.searchContainer}>
                    <Image source={busca} style={{width:32, height:32}}></Image>
                        <TextInput underlineColorAndroid="transparent" style={{marginLeft:10, width:'85%',height:'80%'}}></TextInput>
                        
                </View>
            
            <TouchableOpacity onPress={()=>logout()}>
                <Text>out</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}
export default Home;

const styles = StyleSheet.create({

 
    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:55,
    },

    
    prompt: {
        alignItems: 'center',
        marginTop:80,
    },

    txtcenter:{
        textAlign:'center',
        color:'white',
    },
    
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginVertical: 12,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#eee',
        width: '100%',
        borderRadius:50,
        marginTop:40,
    },
    white:{
        color:'white',
        marginBottom:20,
    },
    
    negrita:{
        fontWeight:'bold'
    },
    searchContainer :{
        height:48,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        backgroundColor:'#D9D9D9',
        
    },
   
})