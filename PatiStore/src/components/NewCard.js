import React from "react";
import { View,Text,Image,Dimensions,StyleSheet } from "react-native";

const NewCard = ({store}) =>{
    console.log(store);
    return(
        <View style={styles.container}>
            
            <View style={styles.view_color}>
                <Image style={styles.image} source={{uri: store.imgURL}}/>
                <Text style={styles.title}>{store.title}</Text>
                <Text style={styles.price}>{store.price}</Text>
                {
                    !store.inStock && <Text style={styles.stok} >STOKTA YOK</Text>
                }
            </View>
            
        </View>


    );


};
const styles= StyleSheet.create({
    container:{
        flex:1/2,
        backgroundColor:'white',
        flexDirection:'row',
        paddingLeft:5,
        paddingBottom:5,
        paddingTop:7,
        
        
    },
    //container_1:{
        //flex:1,
    //},
    //container_2:{
        //flex:1, 
    //},
    image:{
        resizeMode:'contain',
        height:Dimensions.get('window').height/4,
        width:Dimensions.get('window').width/2.3,
        borderRadius:20,
        backgroundColor:'aqua',
        
    },
    view_color:{
        backgroundColor:'#faf0e6',
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:10,
    },
    title:{
        fontSize:10,
        fontWeight:'bold',
        color:'black',   
    },
    price:{
        fontSize:7,
        fontWeight:'bold',
        color:'gray', 
        paddingBottom:5,
    },
    stok:{
        fontSize:12,
        color:'red',
    }
})
export default NewCard;