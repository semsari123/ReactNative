import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ButtonCard from "./Button";

const InputBar = ({onChangeText, value,onPress})=>{
    return(
        <View style = {styles.container}>
            <TextInput style={styles.text} 
                placeholder='Yapılacak...'
                value={value}
                onChangeText={onChangeText} />
            <ButtonCard
            title={"Kaydet"}
            onPress={onPress}/>
        </View>
    );
}

const styles = StyleSheet.create ({
    container : {
        padding:7,
        backgroundColor:'lightslategrey',
        borderRadius:10,
    },
    text:{
        borderBottomWidth:1,
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        
    }
});
export default InputBar;