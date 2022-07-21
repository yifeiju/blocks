import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { signUp, signIn } from '../app/api';
import logo from '../assets/logo.png'

const Login  = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen}
        >
            <View style={styles.container}>
                <View style={styles.center } >
                <Image source={logo} style={{ width:200 , height: 100 }} resizeMode={'center'} />
                </View>
            
                
                <TextInput style={styles.input} keyboardType="email-address" placeholder='E-mail' autoCapitalize="none" onChangeText={text => setEmail(text)} />
                
                <TextInput style={styles.input} placeholder='contraseña' secureTextEntry autoCapitalize="none" onChangeText={text => setPassword(text)} />
            <br></br>
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={() => signIn(email, password)}>
                        <View style={styles.btn}>
                            <Text style={styles.negrita}>
                                iniciar session
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <br></br>
                <TouchableOpacity ><Text style={styles.txtcenter}>olvidado contraseña?</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login; 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContet: 'center',
        alignItems: 'center',
        
    },
    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:50,
        marginBottom:50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 25,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        
        backgroundColor: '#1a1a1a',
        height:700,
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        color: '#333'
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

    },
    white:{
        color:'white',
    },
    btn:{
        width:350,
        height:50,
        backgroundColor:'yellow',
        textAlign:'center',
        justifyContent: 'center', 
        borderRadius:100,
    },
    negrita:{
        fontWeight:'bold'
    }
})