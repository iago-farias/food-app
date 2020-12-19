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
import {useNavigation} from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import {icons, COLORS} from '../../constants';

const burgerImage1 = require('../../assets/images/burger-1.png');
const burgerImage2 = require('../../assets/images/burger-3.png');

const categories = [
  {
    id: '0',
    title:"All",
    icon:"",
  },
  {
    id: '1',
    title:"Burgers",
    icon: icons.hamburger,
  },
  {
    id: '2',
    title:"Pizza",
    icon: icons.pizza,
  },
  {
    id: '3',
    title:"Deserts",
    icon:icons.donut,
  },
  {
    id: '4',
    title:"Sushi",
    icon:icons.sushi,
  },
  {
    id: '5',
    title:"Breakfast",
    icon:icons.breakfast,
  },
];

const foods = [
  {
    id:'0',
    title:'Chipotle Cheesy Chicken',
    image: burgerImage1,
    bugerType:'Chicken Burger',
    weight: 380,
    price: 20.95,
  },
  {
    id:'2',
    title:'Triple Meat Cheese',
    image: burgerImage2,
    bugerType:'Cheese Burger',
    weight: 350,
    price: 25.75,
  },
  {
    id:'3',
    title:'Chipotle Cheesy Chicken',
    image: burgerImage1,
    bugerType:'Chicken Burger',
    weight: 380,
    price: 20.95,
  },
  {
    id:'4',
    title:'Triple Meat Cheese',
    image: burgerImage2,
    bugerType:'Cheese Burger',
    weight: 350,
    price: 25.75,
  },
];

function CategorieItem({item, onPress, style}){
  const {backgroundColor, color} = style;
  
  return(
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.categoryButton, {backgroundColor:backgroundColor}]}
    >
      {
        item.icon === "" ? 
        null 
        : 
        <Image 
          source={item.icon} 
          style={{width:30, height:30, marginRight: 8}}
        />
      }
      <Text 
        style={{color:color, fontWeight:'bold'}}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

function FoodItem({item, navigation}){
  return(
    <View style={styles.foodCard}>
      <View style={{backgroundColor:COLORS.lightYellow, flexGrow:10, borderRadius: 15, padding:10, height:'50%', marginTop:25}}>

      <Image
          style={{width:150, height:150, alignSelf:'center'}}
          source={item.image}
          resizeMode="cover"
        />
        <Text style={{fontWeight:'bold', fontSize: 17,marginTop: 10, width:'80%'}}>{item.title}</Text>
      </View>

      <View style={{paddingHorizontal:10}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
          <Text style={{color:COLORS.lightGray1}}>{item.bugerType}</Text>
          <Text>{item.weight} g</Text>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:10}}>
          <Text style={{fontWeight:'bold', fontSize:22}}>${item.price}</Text>

          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("FoodDescription", {item:item})}>
            <MaterialIcons name="add" size={30} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Home(){
  const [selectedCategoryId, setSelectedCategoryId] = useState('1');
  const [foodSearch, setFoodSearch] = useState('');

  const navigation = useNavigation();

  function renderCategoryItem({item}){
    const backgroundColor = item.id === selectedCategoryId ? COLORS.primary : COLORS.white;
    const color = item.id === selectedCategoryId ? COLORS.white : COLORS.black;

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
        navigation={navigation}
      />
    );
  }

  return(
    <View style={{flex:1, paddingTop:8, paddingHorizontal:12, backgroundColor:COLORS.lightGray3}}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={32} color="#000" />

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <MaterialIcons name="place" size={30} color="#AF3617" />
          <Text style={{fontWeight:'bold', fontSize:18}}>Chicago, </Text>
          <Text style={{fontSize:18, color:COLORS.lightGray1}}>IL</Text>
        </View>

        <View style={styles.profilePic}>
          <MaterialIcons name="person" size={30} color={COLORS.lightGray1} />
        </View>

      </View>

      <Text style={{fontWeight:'bold', fontSize:35}}>Hi, Craig</Text>
      <Text style={{fontSize:20, marginBottom:18, color:COLORS.lightGray1}}>What do you feel like today?</Text>

      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={30} color={COLORS.lightGray1} />
        <TextInput
          style={{marginLeft:5, color:COLORS.lightGray1}}
          placeholder="Search our delicious food"
          placeholderTextColor={COLORS.lightGray1}
          value={foodSearch}
          onChange={setFoodSearch}
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
    backgroundColor:COLORS.white,
    width:45,
    height:45,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },

  searchBar:{
    flexDirection:'row',
    alignItems:'center',
    padding:8,
    backgroundColor:COLORS.white,
    width:'100%',
    borderRadius:10
  },

  categoryButton:{
    backgroundColor:COLORS.white,
    color:COLORS.black,
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
    backgroundColor:COLORS.white, 
    marginRight:12, 
    height:340,
    width:200,
    borderRadius:18,
    padding:10
  },

  addButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.primary,
    borderRadius:10,
    height:40,
    width:40,
  }
}); 

export default Home;