import React from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";

const Search = ({value, space ,onChangeText}) =>{
    
    return(
        <View style={styles.container}>
            
           <TextInput
                color='black'
                placeholderTextColor={'black'}
                value={value}
                placeholder={space}
                onChangeText={onChangeText}
                
           />
                
            
        </View>


    )};
    const styles= StyleSheet.create({
        container:{
            borderRadius:10,
            backgroundColor:'#fffafa',
            
            
            
            
        },
      
    })

export default Search;

