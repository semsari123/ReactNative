import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Touchable, TouchableOpacity } from "react-native";


const ButtonCard =({onPress,title,custom_style,custom_text})=>{
    return(
        <TouchableOpacity style={custom_style ? custom_style: styles.press} onPress={onPress}>
            <Text style={custom_text ? custom_text: styles.text}>{title}</Text>
        </TouchableOpacity>
    ); 


};
const styles = StyleSheet.create({
    press:{
        backgroundColor:'silver',
        borderRadius:15,
        padding:8,
        marginTop:5,
    },
    text:{
        textAlign:'center',
        fontSize:15,
        color:'white',
    },
});

export default ButtonCard;