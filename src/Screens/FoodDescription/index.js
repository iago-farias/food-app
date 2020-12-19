import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';

import {COLORS} from '../../constants';

const burgerImage3 = require('../../assets/images/burger-2.png'); 

function FoodDescription(){
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const {item} = useRoute().params;
  const navigation = useNavigation();

  function isSelected(size){
    let backgroundColor;
    let color;

    size === selectedSize ? backgroundColor = COLORS.primary : backgroundColor = COLORS.white;
    size === selectedSize ? color = COLORS.white : color = COLORS.lightGray2;
    
    return {backgroundColor, color};
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="chevron-left" size={30} color={COLORS.black} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{item.title}</Text>

        <TouchableOpacity 
          style={styles.headerButton} 
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <MaterialIcons 
            name={isFavorite ? "favorite" : "favorite-border"} 
            size={30} 
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.ingredients}>Meat,tomato,onion,salad,cheese,bread,ketchup,mayo,mustard</Text>

      <View style={styles.options}>
        <View style={{justifyContent:'space-between'}}>
          <View>
            <TouchableOpacity 
              onPress={() => setSelectedSize("S")} 
              style={[
                styles.optionSizeButton, 
                isSelected("S"),           
              ]}
            >
              <Text style={[isSelected("S"), {backgroundColor:'transparent'}]}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setSelectedSize("M")} 
              style={[
                styles.optionSizeButton, 
                {marginTop: 12}, 
                isSelected("M"),
              ]}
            >
              <Text style={[isSelected("M"), {backgroundColor:'transparent'}]}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setSelectedSize("L")} 
              style={[
                styles.optionSizeButton, 
                {marginTop: 12}, 
                isSelected("L"),
              ]}
            >
              <Text style={[isSelected("L"), {backgroundColor:'transparent'}]}>L</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.optionQuantityButton}>
              <MaterialIcons name="add" size={30} color={COLORS.lightGray2} />
            </TouchableOpacity>
            <Text style={{fontSize:28, marginVertical:10}}>{quantity}</Text>
            <TouchableOpacity 
            onPress={() => quantity - 1 < 1 ? setQuantity(1) : setQuantity(quantity - 1)} 
            style={styles.optionQuantityButton
            }>
              <MaterialIcons name="remove" size={30} color={COLORS.lightGray2} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={{backgroundColor:COLORS.lightYellow, borderTopLeftRadius:300, borderBottomLeftRadius:300}}>
          <Image
            source={burgerImage3}
            resizeMode='contain'
            style={{width:250, height:350}}
          />
        </View>
      </View>

      <View style={styles.foodProprieties}>
        <View>
          <Text style={styles.propertyTitle}>Calories:</Text>
          <Text style={styles.property}>540 kcal</Text>
        </View>

        <View>
          <Text style={styles.propertyTitle}>Weight:</Text>
          <Text style={styles.property}>{item.weight} g</Text>
        </View>
          
        <View>
          <Text style={styles.propertyTitle}>Delivery:</Text>
          <Text style={styles.property}>45 min</Text>
        </View>        
      </View>

      <View style={{flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', paddingLeft:12, marginTop:18}}>
        <View>
          <Text style={[styles.propertyTitle,{fontSize:18}]}>Price</Text>
          <Text style={{fontSize:28, fontWeight:'bold'}}>$ {(item.price * quantity).toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.addCartButton} onPress={() => {}}>
          <MaterialIcons name="add" size={25} color={COLORS.white} />
          <Text style={{color:COLORS.white, fontSize:17, marginLeft: 10}}>Add to cart</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    paddingBottom:10,
    backgroundColor:COLORS.lightGray3,
  },

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:12,
  },

  headerButton:{
    backgroundColor:'#FFF',
    height:50,
    width:50,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
  },

  headerTitle:{
    fontSize:22,
    fontWeight:'bold',
    width:'60%',
    textAlign:'center',
  },

  ingredients:{
    fontSize:16,
    color:COLORS.lightGray1,
    alignSelf:'center',
    width:'72%',
    marginTop:18,
    paddingHorizontal:12
  },

  options:{
    marginTop:10,
    height:'55%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:12,
  },

  optionSizeButton:{
    backgroundColor:'#FFF',
    height:45,
    width:45,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },

  optionQuantityButton:{
    backgroundColor:'#FFF',
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },

  foodProprieties:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:12,
    paddingHorizontal:12
  },

  propertyTitle:{
    fontSize: 17,
    color:COLORS.lightGray1,
  },

  property:{
    fontSize:20,
    fontWeight:'700'
  },

  addCartButton:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:25,
    paddingVertical:22,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    backgroundColor:COLORS.primary
  }
});

export default FoodDescription;