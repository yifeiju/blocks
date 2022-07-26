import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import logo from '../assets/logo.png';
import Login from './Login';


export default({navigation, route})=>
    
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen}
        >
            <View style={styles.container}>
                <View style={styles.center } >
                <Image source={logo} style={{ width:200 , height: 100 }} resizeMode={'center'} />
                </View>
                <Text style={styles.siempre}>Siempre cerca de ti.</Text>

                <Text style={styles.bienvenido}>¡Te damos la bienvenida!</Text>
                
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        
                        <View style={styles.btn}>
                            <Text style={styles.negrita}>
                                Iniciar sessión
                            </Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
                
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <View style={styles.btn}>
                            <Text style={styles.negrita}>
                                Registrarse
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.politica}><TouchableOpacity ><Text style={styles.politi}>Politíca de privacidad</Text></TouchableOpacity></View>
            </View>
        </KeyboardAvoidingView>
    



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContet: 'center',
        alignItems: 'center',
        
    },
    bienvenido:{
        color:'#F9BF1C',
        textAlign:'center',
        fontSize:25,
        marginBottom:40,
    },
    
    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:50,
        marginBottom:0,
    },
  
    container: {
        width: '100%',
        maxWidth: 400,
        padding: 50,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        position:'relative',
        backgroundColor: '#1a1a1a',
        height:800,
    },
    prompt: {
        alignItems: 'center',
        marginBottom:45,
    },
    promptMessage: {
        fontSize: 16,
        color: '#333'
    },

    btn:{
        width:300,
        height:50,
        backgroundColor:'#F9BF1C',
        textAlign:'center',
        justifyContent: 'center', 
        borderRadius:100,
    },
    negrita:{
        fontWeight:'bold',
        textAlign:'center',
    },
    siempre:{
        color:'white',
        textAlign:'center',
        fontSize:15,
        marginBottom:40,
    },
    politica:{
        textAlign:'center',
        position:'absolute',
        width: '100%',
        height:60,
        bottom:0,
        left:0,
    },
    politi:{
        color:'white',
        
    },
})