import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useInsertionEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../services/firebase";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if (user) {
                navigation.replace('Login', { screen: 'LoginScreen' })
            }
        })

        return unsubscribe
    },[])

    const handleSignUp = () =>{
        
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
        })
        console.log(email,password)
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            
        })
        .catch(error => alert(error.message))
    }


    return (
        <View
        style = {styles.container}
        behavior="padding">
            <Text style={styles.header}>Trabot</Text>
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder="EMAIL"
                    value = {email}
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}
                />

                <TextInput
                    placeholder="PASSWORD"
                    value = {password}
                    onChangeText={text => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                />
            </View>


            <View style ={styles.buttonContainer}>
                <TouchableOpacity
                // onPress= {handleLogin}
                onPress= {()=> navigation.navigate('Market', {screen: 'MarketScreen' })}
                style={styles.button}
                >
                    <Text style ={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>


                <TouchableOpacity
                onPress = {handleSignUp}
                style={[styles.button, styles.buttonOutline]}
                >
                    <Text style ={styles.buttonOutlineText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'
    },

    input:{
        backgroundColor :'grey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop:5,
    },
    buttonContainer:{
        width : '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },

    button :{
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },

    buttonOutline :{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,

    },
    
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,

    },

    header: {
        fontSize: 50,
        marginBottom: 50,
    }

})