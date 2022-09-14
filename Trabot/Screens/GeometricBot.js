import React from 'react';
import { TouchableOpacity, Text, View, Button, StyleSheet, ScrollView  } from "react-native";
import { TextInput } from "react-native-gesture-handler";
//import { getMarketData } from '../../services/cryptoService';
// import { AsyncStorage } from "react-native";
import { useNavigation } from '@react-navigation/native'




const GeometricBot = () =>

{
    const navigation = useNavigation()

    
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
        <>
        <ScrollView style={styles.scrollView}>
        <View >     
        <View style={styles.titleWrapper}>
            <Text style={styles.largeTitle}> Arithmetic BOT</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnBackground}
           >
                <Text style={styles.buttonText}>CUSTOMIZE</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnBackground}
            onPress= {()=> navigation.navigate('Preset', {screen: 'Preset' })}>
                <Text style={styles.buttonText}>PRESET (AI)</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.Create, styles.titleOutline]}>
            <Text style= {styles.subTitle}>Create</Text>
            <View style={styles.inputContainer}>
            <Text style={styles.subcomp}> Coin:</Text>
                <TextInput 
                    placeholder="SELECT COIN"
                    // value = {grid}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
                <Text style={styles.subcomp}> Grids:</Text>
                <TextInput 
                    placeholder="Enter Amount of GRIDS"
                    // value = {grid}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Upper Boundary:</Text>
                <TextInput 
                    placeholder="Enter Upper Boundary ($)"
                    // value = {lowerBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Lower Boundary:</Text>
                <TextInput 
                    placeholder="Enter Lower Boundary ($)"
                    // value = {upperBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Stop Loss:</Text>
                <TextInput 
                    placeholder="Stop Loss ($)"
                    // value = {stopLoss}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Take Profit:</Text>
                <TextInput 
                    placeholder="Take Profit ($)"
                    // value = {stopLoss}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Amount:</Text>
                <TextInput 
                    placeholder="Amount ($)"
                    // value = {amount}
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View>
            <TouchableOpacity 
           >
                <Text style={styles.buttonCreate}>Create</Text>
            </TouchableOpacity>
            
        </View>

        </View>
        <View style={[styles.Create, styles.titleOutline]}>
            <Text style= {styles.subTitleRunning}>Running</Text>
            <View style={styles.inputContainer}>
            <Text style={styles.subcomp}> Coin:</Text>
                <TextInput 
                    placeholder="SELECT COIN"
                    // value = {grid}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
                <Text style={styles.subcomp}> Grids:</Text>
                <TextInput 
                    placeholder="Enter Amount of GRIDS"
                    // value = {grid}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Upper Boundary:</Text>
                <TextInput 
                    placeholder="Enter Upper Boundary ($)"
                    // value = {lowerBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Lower Boundary:</Text>
                <TextInput 
                    placeholder="Enter Lower Boundary ($)"
                    // value = {upperBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Stop Loss:</Text>
                <TextInput 
                    placeholder="Stop Loss ($)"
                    // value = {stopLoss}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Take Profit:</Text>
                <TextInput 
                    placeholder="Take Profit ($)"
                    // value = {stopLoss}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Amount:</Text>
                <TextInput 
                    placeholder="Amount ($)"
                    // value = {amount}
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}>
                </TextInput>
            </View>

            <View style={styles.pnl}>
                <Text style={styles.pnlText}>PNL:</Text>
                <TextInput style={styles.pnlInput}></TextInput>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity 
           >
                <Text style={styles.buttonTerminate}>Terminate</Text>
            </TouchableOpacity>
            
           
              </View>

        </View>
        <View style={[styles.Create, styles.titleOutline]}>
            <Text style= {styles.subTitleCancel}>Canceled</Text>
            <View style={styles.inputContainer}>
            <Text style={styles.subcomp}> Coin:</Text>
                <Text
                    placeholder="BTC"
                    // value = {grid}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>BTC
                </Text>
                <Text style={styles.subcomp}> Grids:</Text>
                <Text 
                    placeholder="Enter Amount of GRIDS"
                    // value = {grid}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}> 200
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Upper Boundary:</Text>
                <Text
                    placeholder="Enter Upper Boundary ($)"
                    // value = {lowerBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}> 40000
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Lower Boundary:</Text>
                <Text
                    placeholder="Enter Lower Boundary ($)"
                    // value = {upperBound}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>10000
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Stop Loss:</Text>
                <Text 
                    placeholder="Stop Loss ($)"
                    // value = {stopLoss}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>12000
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Take Profit:</Text>
                <Text
                    placeholder="Take Profit ($)"
                    // value = {stopLoss}
                    //onChangeText={text => setEmail(text)}
                    style = {styles.input}>40000
                </Text>
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.subcomp}> Amount:</Text>
                <Text
                    placeholder="Amount ($)"
                    // value = {amount}
                    onChangeText={text => setEmail(text)}
                    style = {styles.input}>1050
                </Text>
            </View>

        </View>
           
     </View>
     
     </ScrollView>


</>
        
        
    )
}




    const styles = StyleSheet.create({

        buttonContainer:{
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 0,
            //backgroundColor: "blue",
            
            marginHorizontal: "1%",
             marginBottom: 6,
            minWidth: "48%",
             
             flexDirection: "row",
            //justifyContent: "space-evenly",
            justifyContent: "space-between",
           // justifyContent: "space-around",
            marginLeft: 15,
            //alignItems: "center"
            
            
    
        },

        btnBackground:{
            backgroundColor: '#D3CEDF',
            borderRadius: 10,
            alignItems: "center",
            justifyContent: 'center',
            
            
        },
    
        button :{
            backgroundColor: '#0782F9',
            width: '40%',
            padding: 15,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 12,
            flexDirection: "row",
            paddingHorizontal: 20
            

            // justifyContent: 'center',
    
        },
        buttonText:{
            paddingHorizontal: 16,
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            textAlign: "center",
            justifyContent: "center",
            marginBottom: 10,
            color: 'black',
            
    
        },
        titleWrapper: {
            marginTop: 30,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3D3C42'
            
          },

          largeTitle: {
            fontSize: 24,
            fontWeight: "bold",
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          },

          subTitle:{
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#E2DCC8',
            // backgroundColor: '#898AA6',
            marginTop: 5,
            borderColor: 'white',
            borderWidth: 2,
            width: '100%',
            padding: 10,
            

          },
          divider: {
            height: StyleSheet.hairlineWidth,
            backgroundColor: 'white',
            marginHorizontal: 16,
            marginTop: 5,
            // marginBottom: 10,
            fontWeight: "bold",
          },      
          scrollView: {
            backgroundColor: '#000',
           
          },

          Create :{
           backgroundColor: '#000',
        //    justifyContent: 'center',
           alignItems: 'center',
        //    borderRadius: 30,
           paddingVertical: 20,
           justifyContent: 'center',
        
           

          },
          inputContainer:{
            marginTop : 10,
            width: '100%',
            paddingHorizontal: 15,
        },
    
        input:{
            backgroundColor :'grey',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop:5,
            width: '100%',
            color: 'white',
        },

        subcomp :{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#E2DCC8',


        },

        titleOutline:{
            alignItems: 'center',
            

            
        },

        subTitleCancel:{
            // alignItems: 'center',
            // justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
             backgroundColor: 'red',
            marginTop: 5,
            borderColor: 'black',
            borderWidth: 2,
            width: '100%',
            padding: 10,
            justifyContent: 'center',

        },

        subTitleRunning :{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#E2DCC8',
             backgroundColor: '#FF9F29',
            marginTop: 5,
            borderColor: 'black',
            borderWidth: 2,
            width: '100%',
            padding: 10,
            justifyContent: 'center',


        },

        buttonTerminate :{
            color: 'white',
            backgroundColor: 'red',
          
            width: '100%',
            padding: 10,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 16,
            
            paddingHorizontal: 20,
           
            
            
            
           
            
            
           
            
            fontSize: 20,
            
            fontWeight: 'bold',
            textAlign: "center",
            justifyContent: "center",
            
            
        },

        buttonCreate:{
            backgroundColor: 'yellow',
            width: '100%',
            padding: 10,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 16,
            
            paddingHorizontal: 20,
           
            
            
            
           
            
            
           
            
            fontSize: 20,
            
            fontWeight: 'bold',
            textAlign: "center",
            justifyContent: "center",
            
            color: 'black',

        },

        pnl :{
            marginTop : 10,
            width: '100%',
            paddingHorizontal: 15,


        },
        pnlInput:{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#E2DCC8',


        },

        pnlText :{
            backgroundColor :'grey',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop:5,
            width: '100%',
            color: 'white',


        },
    
        
        
    
       
    
    })

export default GeometricBot