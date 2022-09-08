import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import logo from '../assets/logo.png';
import Login from './Login';
import globalStyles from '../app/globalStyles';



export default({navigation, route})=>
    
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
            <View style={globalStyles.container}>
                <View style={styles.center } >
                <Image source={logo} style={{ width:266 , height: 74 }} resizeMode={'center'} />
                </View>
                <Text style={styles.siempre}>Siempre cerca de ti.</Text>

                <Text style={styles.bienvenido}>¡Te damos la bienvenida!</Text>
                
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        
                        <View style={globalStyles.btnyellow}>
                            <Text style={styles.negrita}>
                                Iniciar sessión
                            </Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
                
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <View style={globalStyles.btnyellow}>
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
    
    bienvenido:{
        color:'#041E42',
        textAlign:'center',
        fontSize:24,
        marginTop:53,
        marginBottom:48,
        fontWeight:'Semibold',
    },
    
    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:55,
        
    },
  

    prompt: {
        alignItems: 'center',
        marginBottom:32,
    },
    promptMessage: {
        fontSize: 16,
        color: '#333'
    },

    negrita:{
        fontWeight:'bold',
        textAlign:'center',
    },
    siempre:{
        color:'#041E42',
        textAlign:'center',
        fontSize:23,
        marginTop:48,
    },
    politica:{
        textAlign:'center',
        position:'absolute',
        width: '100%',
        height:75,
        bottom:0,
        left:0,
    },
    politi:{
        color:'#041E42',
        
    },
})