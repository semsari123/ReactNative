import React, {useState} from "react";
import { View, Text, Button,StyleSheet, TouchableOpacity } from "react-native";


const ToDoCard = ({listItem, setdata=null})=>{
    const [isTruePush,setIsTruePush] = useState(true);
    const onPressItem = () => {
        
        setIsTruePush(!isTruePush);
        setdata(isTruePush);
    };

    return(
        <TouchableOpacity style = {[isTruePush ? styles.container : styles.afterpushcontainer]} onPress={onPressItem}>
            
            <Text style = {[isTruePush ? styles.text : styles.afterpushtext]}>{listItem}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start',
        backgroundColor:'#65a301',
        margin:5,
        borderRadius:6,
    },
    text : {
        
        color:'black',
        fontSize:20,
    },
    afterpushcontainer:{
        alignItems:'flex-start',
        backgroundColor:'#2f4a05',
        margin:5,
        borderRadius:6,
    },
    afterpushtext:{
        
        color:'black',
        fontSize:20,
        textDecorationLine:'line-through',
    }
    
});

export default ToDoCard;