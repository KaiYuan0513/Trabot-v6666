import React from 'react';
import { TouchableOpacity, Text, View, Button, StyleSheet  } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getMarketData } from '../../services/cryptoService';
import { AsyncStorage } from "react-native";



const Preset = () =>

{
    // const [data, setData] = useState([]);
    // const [selectedCoinData, setSelectedCoinData] = useState(null);
    // useEffect(() => {
    //     const fetchMarketData = async () => {
    //       const marketData = await getMarketData();
    //       setData(marketData);
    //     }
    
    //     fetchMarketData();
    //   }, [])


    return(

        <View style={StyleSheet.container}>
            
            {/* //select coins */}
            <View>
                <Text style= {styles.title}>Arithmetic BOT (AI)</Text>

            </View>

            <View style={styles.inputContainer}>
                <Text> Grids</Text>
                <TextInput 
                    placeholder="Enter Amount of GRIDS"
                    // value = {grid}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text> Upper Boundary</Text>
                <TextInput 
                    placeholder="Enter Upper Boundary ($)"
                    // value = {lowerBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text> Lower Boundary</Text>
                <TextInput 
                    placeholder="Enter Lower Boundary ($)"
                    // value = {upperBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text> Stop Loss</Text>
                <TextInput 
                    placeholder="Stop Loss ($)"
                    // value = {stopLoss}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text> Amount</Text>
                <TextInput 
                    placeholder="Amount ($)"
                    // value = {amount}
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style ={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                    <Text>Create</Text>
                </TouchableOpacity>
            </View>


             
  

  



        </View>
        
    )
}


const styles = StyleSheet.create({

    title:{

        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20,
        paddingHorizontal: 20,
        
    

    },

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        marginTop : 30,
        width: '80%',
        paddingHorizontal: 15,
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
        width: '10',
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

export default Preset
