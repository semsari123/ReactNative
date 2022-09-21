import React , {useEffect, useState} from "react";
import { View, Text,TextInput, Button,StyleSheet, SafeAreaView, FlatList } from "react-native";
import ToDoCard from './components/ToDoCard';
import InputBar from './components/InputBar';
import ButtonCard from "./components/Button";

function App (){
    const [list , setList] = useState([]);
    const [text , setText] = useState();
    const [counter , setCounter] = useState(0);
    const useEffectCounter = () => {counter < 0 && setCounter(0)}

    useEffect(() => {useEffectCounter} , [counter])

    const renderItem = ({item}) => {
         return(<ToDoCard listItem={item} setdata = {(isTruePush)=> {isTruePush === true ? setCounter(counter-1) : setCounter(counter+1)} } />);
    };

    const onPress = () =>{
        setList([...list,text])
        setCounter(counter+1)
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.header_container}>
                <Text style={styles.text}>YAPILACAKLAR</Text>
                <ButtonCard 
                    custom_style={styles.buttonstyle}
                    custom_text={styles.buttontextstyle}
                    title="Temizle" 
                    onPress={()=> {setList([]) ; setCounter(0)}}
                />
                <Text style={styles.text}>{counter}</Text>
            </View>
            <View style={styles.todo}>
                <FlatList
                   data={list}
                   renderItem={renderItem}
                />
                
            </View>
            <View style={styles.inputbar_view}>
                <InputBar
                    onChangeText={setText}
                    value={text}
                    onPress={() => onPress()}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    container : {
        flex:1,
        justifyContent:'space-evenly',
        backgroundColor:'#02120a',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#9aa301',
        
    },
    header_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:7,
        flex:1,
        
    },
    inputbar_view:{
        padding:7,
        paddingBottom:15,
        flex:1,
    },
    todo:{
        flex:5,
    },
    buttonstyle:{
        borderRadius:7,
        justifyContent:'flex-start',
        marginBottom:30,
        marginTop:5,
        
       
    },
    buttontextstyle:{
        color:'black',
        alignItems:'center',
        fontSize:15,
        fontWeight:'bold',
        backgroundColor:'#65a301',
        borderRadius:5,
        
    }
    
   
});
export default App;