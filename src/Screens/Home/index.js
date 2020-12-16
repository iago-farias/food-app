import React, {useState} from 'react';
import 
{ View, 
  Text, 
  TextInput, 
  StyleSheet, 
  FlatList, 
  ScrollView,
  TouchableOpacity, 
  Image} 
from 'react-native';
import Constants from 'expo-constants';
import {MaterialIcons} from '@expo/vector-icons';

const categories = [
  {
    id: '0',
    title:"All",
    icon:"",
  },
  {
    id: '1',
    title:"Burgers",
    icon:"",
  },
  {
    id: '2',
    title:"Pizza",
    icon:"",
  },
  {
    id: '3',
    title:"Deserts",
    icon:"",
  },
  {
    id: '4',
    title:"Sushi",
    icon:"",
  },
  {
    id: '5',
    title:"Breakfast",
    icon:"",
  },
];

const foods = [
  {
    id:'0',
    title:'Chipotle Cheesy Chicken',
    image: require('../../assets/burger-1.png'),
    bugerType:'Chicken Burger',
    weight: 380,
    price: 20.95,
  },
  {
    id:'2',
    title:'Triple Meat Cheese',
    image: require('../../assets/burger-3.png'),
    bugerType:'Cheese Burger',
    weight: 350,
    price: 25.75,
  },
  {
    id:'3',
    title:'Chipotle Cheesy Chicken',
    image: require('../../assets/burger-1.png'),
    bugerType:'Chicken Burger',
    weight: 380,
    price: 20.95,
  },
  {
    id:'4',
    title:'Triple Meat Cheese',
    image: require('../../assets/burger-3.png'),
    bugerType:'Cheese Burger',
    weight: 350,
    price: 25.75,
  },
];

function CategorieItem({item, onPress, style}){
  const {backgroundColor, color} = style;
  
  return(
    <TouchableOpacity onPress={onPress} style={[styles.categoryButton,{backgroundColor:backgroundColor}]}>
      <Text style={{color:color, fontWeight:'bold'}}>{item.title}</Text>
    </TouchableOpacity>
  );
}

function FoodItem({item}){
  return(
    <View style={styles.foodCard}>
      <View style={{backgroundColor:'#F1C669', flexGrow:10, borderRadius: 15, padding:10, height:'50%', marginTop:25}}>

      <Image
          style={{width:150, height:150, alignSelf:'center'}}
          source={item.image}
          resizeMode="cover"
        />
        <Text style={{fontWeight:'bold', marginTop: 10, width:'80%'}}>{item.title}</Text>
      </View>

      <View style={{paddingHorizontal:10}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
          <Text style={{color:'#E4E4E4'}}>{item.bugerType}</Text>
          <Text>{item.weight} g</Text>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:10}}>
          <Text style={{fontWeight:'bold', fontSize:22}}>${item.price}</Text>

          <TouchableOpacity style={styles.addButton}>
            <MaterialIcons name="add" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Home(){
  const [selectedCategoryId, setSelectedCategoryId] = useState('0');

  function renderCategoryItem({item}){
    const backgroundColor = item.id === selectedCategoryId ? '#AF3617' : '#FFF';
    const color = item.id === selectedCategoryId ? '#FFF' : '#000';

    return(
      <CategorieItem
        item={item}
        onPress={() => setSelectedCategoryId(item.id)}
        style={{backgroundColor, color}}
      />
    );
  }

  function renderFoodItem({item}){
    return(
      <FoodItem
        item={item}
      />
    );
  }

  return(
    <View style={{marginTop:Constants.statusBarHeight+10, flex:1, paddingHorizontal:12}}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={32} color="#000" />

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <MaterialIcons name="place" size={30} color="#AF3617" />
          <Text style={{fontWeight:'bold', fontSize:18}}>Chicago, </Text>
          <Text style={{fontSize:18}}>IL</Text>
        </View>

        <View style={styles.profilePic}>

        </View>

      </View>

      <Text style={{fontWeight:'bold', fontSize:35}}>Hi, Craig</Text>
      <Text style={{fontSize:20, marginBottom:18, color:'#E4E4E4'}}>What do you feel like today?</Text>

      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={30} color="#BEB6A5" />
        <TextInput
          style={{marginLeft:5}}
          placeholder="Search our delicious food"
          value=""
        />
      </View>

      <FlatList
        style={{marginTop:25, flexGrow:0}}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        extraData={setSelectedCategoryId}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.foodSection}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.foodSectionTitle}>Popular</Text>
          <Text style={{color:'#AF3617'}}>View all {' >'} </Text>
        </View>

        <FlatList
        style={{marginTop:25, flexGrow:0}}
        data={foods}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        extraData={setSelectedCategoryId}
        showsHorizontalScrollIndicator={false}
        />
      </View>
     </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:15
  },

  profilePic:{
    backgroundColor:'#fff',
    width:45,
    height:45,
    borderRadius:25
  },

  searchBar:{
    flexDirection:'row',
    alignItems:'center',
    padding:8,
    backgroundColor:'#fff',
    width:'100%',
    borderRadius:10
  },

  categoryButton:{
    backgroundColor:'#fff',
    color:'#000',
    flexDirection:'row',
    height:45,
    alignItems:'center',
    padding:15,
    marginRight:10,
    borderRadius:15,
  },

  foodSection:{
    marginTop:25,
    marginBottom:10
  },

  foodSectionTitle:{
    fontWeight:'bold',
    fontSize:20
  },

  foodCard:{
    backgroundColor:'#fff', 
    marginRight:12, 
    height:340,
    width:200,
    borderRadius:18,
    padding:10
  },

  addButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#AF3617',
    borderRadius:10,
    height:40,
    width:40,
  }
}); 

export default Home;