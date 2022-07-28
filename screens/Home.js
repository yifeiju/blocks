@ -1,4 +1,8 @@
import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import monza from '../assets/monza.png';
import cofac from '../assets/cofac.png';
import cadena88 from '../assets/cadena88.png';

const Home=()=>{
    return(
@ -7,4 +11,41 @@ const Home=()=>{
        </View>
    )
}
export default Home;
export default Home;

<View style={styles.container}>
    <View style={styles.center}>
    <Image source={monza} style={{width:325 , height:93}} resizeMode={'center'}/>
    </View>
    <View style={styles.}></>

</View>

const styles = StyleSheet.create({
 screen: {
        flex: 1,
        justifyContet: 'center',
        alignItems: 'center',
 },
 center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17,
        marginBottom:0,
 },
 container: {
    width: '100%',
    maxWidth: 400,
    padding: 50,
    margin: 12,
    borderColor: '#ccc',
    borderwith: 1,
    position: 'relative',
    backgroundColor: '#1A1A1A',
    height:800,
 },
 prompt: {
    alignItems: 'center',
    margin
 },
})
