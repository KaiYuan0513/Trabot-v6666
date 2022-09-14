import React from "react";
import { render } from "react-dom";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native'
import ari from '../assets/ari.png';
import geo from '../assets/geo.png';



// const ListHeader = () => (
//     <>
//       <View style={styles.titleWrapper}>
//           <Text style={styles.largeTitle}>Markets</Text>
//         </View>
//       <View style={styles.divider} />
//     </>
//   )


const BotScreen = () => {
    const navigation = useNavigation()

    return (
        <>
        <ScrollView style={styles.scrollView}>

       



        <View style={styles.titleWrapper}>
            <Text style={styles.largeTitle}>BOT</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnBackground}
            onPress= {()=> navigation.navigate('ArithmeticBot', {screen: 'ArithmeticBot' })}>
                <Text style={styles.buttonText}>Arithmetric Bot</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnBackground}
            onPress= {()=> navigation.navigate('GeometricBot', {screen: 'GeometricBot' })}>
                <Text style={styles.buttonText}>Geometric Bot</Text>
            </TouchableOpacity>
        </View>
 
        <View>
            <Text style={styles.textTitle}>Arithmetic Bot</Text>
             <Text style={styles.textView}>
                Each grid has an equal price difference(e.g. 1, 2, 3, 4...).
                The arithmetic grid divides the price range from Lower Price to Upper Price into the number of grids by equal price difference.
                The price difference of each grid is:
                Spread = (Upper Price - Lower Price) / Number of grids
                The price distribution will be as follows:
                Price_1 = Lower Price
                Price_2 = Lower Price + Spread
                Price_3 = Lower Price + Spread * 2
                …
                Price_n = Lower Price + Spread * (n-1)
                The highest price is Upper Price, where n = the number of grids.
                Example: Arithmetic Grid = 100: 1000, 1100, 1200, 1300, 1400,... (the next price is 100 higher than the previous one) 
                </Text>
                {/* <Image source={ari}></Image> */}

        </View> 
         <View>

                <Text style={styles.textTitle}>
                    Geometric Bot
                </Text>
                <Text style={styles.textView}>
                    Each grid has an equal price difference ratio. Price range of each cell of the geometric grid is proportional (e.g. 1, 2, 4, 8...). The profits are fixed between each grid.
                The geometric grid divides the price range from the Lower Price to the Upper Price into the number of girds by equal price ratio.
                The price ratio of each grid is:
                Ratio = (Upper Price / Lower Price) ^ (1/n) * 100%
                n = the number of girds
                The price distribution will be as follows:
                Price_1 = Lower Price
                Price_2 = Lower Price * Ratio
                Price_3 = Lower Price * Ratio ^ 2
                …
                Price_n = Lower Price* Ratio ^ (n-1)
                The highest price is the Upper Price, where n = the number of grids.
                </Text>
                {/* <Image source={geo} style= {{width: 10, height:50, justifyContent: "center"}}></Image> */}
        </View> 

            <View>

                <Text style={styles.textTitle}>
                Lower Price and Upper Price
                </Text>
                <Text style={styles.textView}>
                Lower Price: Bottom of the grid trading price range. The system will no longer execute orders when the market price is lower than the Lower Price.
                Upper Price: Top of the grid trading price range. The system will no longer execute orders when the market price is higher than the Upper Price.
              
                </Text>
            </View> 

            <View>

            <Text style={styles.textTitle}>
            Grids
            </Text>
            <Text style={styles.textView}>
            Divide the interval upper limit price and interval lower limit price into corresponding shares.
            </Text>
            </View> 






            </ScrollView>

        </> 
    );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleWrapper: {
      marginTop: 30,
      paddingHorizontal: 16,
    },
    largeTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#000',
      marginHorizontal: 16,
      marginTop: 13,
      marginBottom: 13,
      
    },
    bottomSheet: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    buttonContainer:{
        paddingHorizontal: 8,
        paddingVertical: 3,
        //borderRadius: 30,
        //backgroundColor: "blue",
        
        //marginHorizontal: "1%",
         marginBottom: 6,
        // minWidth: "48%",
         
         flexDirection: "row",
        //justifyContent: "space-evenly",
        justifyContent: "space-between",
       // justifyContent: "space-around",
        marginLeft: 15,
        //alignItems: "center"
        
        

    },

    buttonText:{
        paddingHorizontal: 16,
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 10

    },

    btnBackground:{
        backgroundColor: '#0782F9',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    },

    textTitle : {
       
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center' ,
        marginTop: 15,
        backgroundColor: '#D7C0AE'
        


    },

    textView: {
        
        
        alignItems: 'center',
        textAlign: 'justify',
        marginHorizontal: 13,
        marginBottom: 12


    },
    scrollView: {
        backgroundColor: '#F9F9F9',
       
      },

  });
export default BotScreen 