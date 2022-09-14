import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet,Text,View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../services/firebase'

const ProfileScreen =() =>{

    const navigation = useNavigation()

    const handleSignOut = () => {
       
        auth
        .signOut()
        .then (() => {
            navigation.replace('Login', { screen: 'LoginScreen' })
        })
        .catch(error => alert(error.message))
    }
    return (
        <View  style ={styles.container}>
            <Text>Email:kaiyuan0513@gmail.com {auth.currentUser?.email}</Text>
            <TouchableOpacity

            onPress={handleSignOut}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>


        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,

    },
    
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },


})