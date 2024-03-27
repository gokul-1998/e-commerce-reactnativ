import { ScrollView, StyleSheet, Text, View ,Pressable,TextInput, ImageBackground, Dimensions} from 'react-native'
import React from 'react'

import { AntDesign,Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductInfoScreen = () => {

    const route=useRoute();
    const {width} = Dimensions.get("window");
    const navigation = useNavigation();
    const height = (width*100)/100;

  return (
    <ScrollView style={{marginTop:45,flex:1,
    backgroundColor:"white"}} showsVerticalScrollIndicator={false}>
                <View style={{
          backgroundColor: "#00CED1",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,

        }}>
          <Pressable style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 5,
            height: 38,
            flex: 1,
          }}>
            <AntDesign
              style={{ paddingLeft: 10 }}
              name="search1" size={24} color="black" />
            <TextInput placeholder="Search for products" />


          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {route.params.carouselImages.map((item,index)=>{
                <ImageBackground
                style={{width,height,marginTop:25,resizeMode:'contain'}}
                source={{uri: item}}   key={index}>

                    <View>
                    </View>
                </ImageBackground>
            })}
          </ScrollView>


    </ScrollView>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})