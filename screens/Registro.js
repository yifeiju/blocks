import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { signUp } from '../app/api';
import logo from '../assets/logo.png';

const Registro  = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen}
        >
            <View style={styles.container}>
                <View style={styles.center}>
                <Image source={logo} style={{ width:200 , height: 100 }} resizeMode={'center'} />
                </View>
                <Text style={styles.siempre}>Siempre cerca de ti.</Text>
                
                
                <TextInput style={styles.input} placeholder='Nombre' autoCapitalize="none" onChangeText={text => setName(text)} />

                <TextInput style={styles.input} keyboardType="email-address" placeholder='E-mail' autoCapitalize="none" onChangeText={text => setEmail(text)} />
                
                <TextInput style={styles.input} placeholder='contraseña' secureTextEntry autoCapitalize="none" onChangeText={text => setPassword(text)} />

                

                <TextInput style={styles.input} secureTextEntry placeholder='confirmar contraseña' autoCapitalize="none" onChangeText={text => setConfirm(text)} />
            
            
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={() => signUp(email, password)}>
                        <View style={styles.btn}>
                            <Text style={styles.negrita}>
                                Completar registro
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
               
            </View>
        </KeyboardAvoidingView>
    )
}

export default Registro; 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContet: 'center',
        alignItems: 'center',
        
    },
    icons:{
        height:80,
        
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:50,
        marginBottom:0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '100%',
        maxWidth: 400,
        padding: 50,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        
        backgroundColor: '#1a1a1a',
        height:800,
    },
    prompt: {
        alignItems: 'center',
        marginTop:20,
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
        marginBottom:40,
    },
    white:{
        color:'white',
        marginBottom:20,
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
        fontWeight:'bold'
    },
    siempre:{
        color:'white',
        textAlign:'center',
        fontSize:15,
        marginBottom:50,
    }
})