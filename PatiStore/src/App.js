import React, { useState } from "react";
import { View, Image, Text, FlatList, ScrollView,StyleSheet } from "react-native";
import  product_data from './product_data.json';
import NewCard from './components/NewCard';
import Search from "./components/Search";

const App =() => {
    const renderData =({item})=><NewCard store ={item} />;
    const [state,setState]= useState('') /*state değişkenini alarak setState değişkenine atıyor.
    useState state(değişken) ve setState(değişkeni değiştirecek fonksiyon) diye iki parametre alır.
    useState React'ın bir hookudur. Durumun kontrolü ve değiştirmeyi sağlar. 
    useState her tetiklendiğinde ekranı da renderlıyor.
    normal kullanımı useState() şeklindedir. Burada kullandığımız '' useState'in başlangıç değeridir.
    Biz de ekran ilk açıldığında dataların title'ı string değer olduğu için useState'in başlangıç değerine
    boş bir string verdik. Böylece ekran açıldığında dataları görebildik.*/
    let data=product_data.filter(product=> product.title.includes(state))?? '' /*Arama işlemi için kullandık
    array'i title özelinde filtreledik, ?? yoksa demek ,'' boş dön, includes dahil mi demek.
    */
    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>PATISTORE</Text>
            </View>
            <Search
                    value={state} /*Klavyede yazdığımız değerler value ={state} dememizin nedeni
                    klavyede yazdığımız her bir değer sonucunda setState()'in devreye girmesi*/
                    onChangeText={setState}/*TextInput'a ne zaman bir değer girse ya da çıksa bu fonksiyon
                    tetikleniyor
                    */
                    space='Ara...'
                />
            <View style={styles.container_row}>          
                
                <FlatList
                columnWrapperStyle={{flex:1,justifyContent:'space-around'}}/*Tek sayılı objelerde 
                en son obje en solda kalıyordu bu methot ile ortalamış olduk. NewCard içindeki style flex 1/2 olmalı*/
                numColumns={2} /* ekranda iki tane sütun olmasını sağlar*/
                data={data} /* normalde json dosyasındaki verileri çekmek için json dosyasının adını çağırırız
                burda ise yukarıda tanımladığımız data ile filtrelediğimiz nesneleri çağırıyoruz*/
                renderItem={renderData}/>
            </View>
        </View>
    );

};
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        

    },
    container_row:{
        flex:1,
        
    },
    title:{
        fontSize:20,
        color:'purple',
        fontWeight:'900'
    },
    
});
export default App;