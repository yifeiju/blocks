import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { signIn } from '../app/api';
import logo from '../assets/logo.png'
import globalStyles from '../app/globalStyles';


const Login  = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
            <View style={globalStyles.container}>
                <View style={styles.center}>
                <Image source={logo} style={{ width:266 , height: 74 }} resizeMode={'center'} />
                </View>
                <Text style={styles.siempre}>Siempre cerca de ti.</Text>
                <Text style={styles.ini}>iniciar sesión :</Text>
              
                <TextInput style={styles.input} keyboardType="email-address" placeholder='E-mail' autoCapitalize="none" onChangeText={text => setEmail(text)} />
                
                <TextInput style={styles.input} placeholder='contraseña' secureTextEntry autoCapitalize="none" onChangeText={text => setPassword(text)} />
            
                <TouchableOpacity ><Text style={styles.txtcenter}>¿Has olvidado la contraseña?</Text></TouchableOpacity>

                <View style={styles.prompt}>
                    <TouchableOpacity onPress={() => signIn(email, password)}>
                        <View style={globalStyles.btnyellow}>
                            <Text style={styles.negrita}>
                                Iniciar sessión
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
               
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login; 

const styles = StyleSheet.create({

    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:55,
    },
    prompt: {
        alignItems: 'center',
        textAlign:'center',
        position:'absolute',
        width: '100%',
        height:154,
        bottom:0,
        left:0,
    },
   
    txtcenter:{
        textAlign:'center',
        marginTop:8,
        
    },
    
    input: {
        padding: 12,
        fontSize: 16,
        color: '#626262',
        backgroundColor: '#D9D9D9',
        borderRadius:8,
        marginTop:40,
        height:40,
        width:360,
    },
    ini:{
        
        marginTop:76,
    },

    negrita:{
        fontWeight:'bold'
    },
    siempre:{
        color:'#041E42',
        textAlign:'center',
        fontSize:23,
        marginTop:48,
    },
})