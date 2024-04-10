import { ScrollView, StyleSheet, Text, View, Pressable, TextInput, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';

const ProductInfoScreen = () => {

  const route = useRoute();
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = React.useState(false);
  const height = (width * 100) / 100;
  const dispatch=useDispatch();
  const addItemToCart=  (item)=>{
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(()=>{
      setAddedToCart(false);
    },60000)
  }
  const cart=useSelector((state)=>state.cart.cart);
  console.log(cart )


  return (
    <ScrollView style={{
      marginTop: 45, flex: 1,
      backgroundColor: "white"
    }} showsVerticalScrollIndicator={false}>
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
        {route.params.carouselImages.map((item, index) => {
          return (
            <ImageBackground
              style={{ width, height, marginTop: 25, resizeMode: 'contain' }}
              source={{ uri: item }}
              key={index}
            >
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <View style={{
                  width: 40, height: 40, borderRadius: 20,
                  backgroundColor: '#C60C30',
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row"

                }}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 12

                    }}
                  >28% off</Text>
                </View>

                <View
                  style={{
                    width: 40, height: 40, borderRadius: 20,
                    backgroundColor: '#E0E0E0',
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"

                  }}>
                  <MaterialCommunityIcons name="share-variant" size={24} color="black" />
                </View>

              </View>

              <View style={{
                width: 40, height: 40, borderRadius: 20,
                backgroundColor: '#E0E0E0',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "auto",
                marginLeft: 20,
                marginBottom: 20

              }}>
                <AntDesign name="hearto" size={24} color="black" />
              </View>

            </ImageBackground>
          );
        })}
      </ScrollView>

      <View style={{
        padding: 10,
      }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500"
          }}

        >{route?.params?.title}</Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginTop: 6
          }}

        >₹ {route?.params?.price}</Text>



      </View>

      <Text style={{
        height: 1,
        borderColor: "#D0D0D0",
        borderWidth: 1,
      }}></Text>

      <View 
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      }}
      
      >

        <Text>Color: </Text>
        <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
        >{route.params?.color}</Text>
      </View>


      <View 
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      }}
      
      >

        <Text>Size: </Text>
        <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
        >{route.params?.size}</Text>
      </View>


      <Text style={{
        height: 1,
        borderColor: "#D0D0D0",
        borderWidth: 1,
      }}></Text>

      <View style={{
        padding:10,

      }}>
        <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          marginVertical: 5
        }}
        >Total: ₹ {route.params.price}</Text>
        <Text style={{
          color: "#00CED1",
        }} >Free delivery tomorrow by 3pm. Order within 10hrs 30 mins</Text>

        <View 
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
          gap: 5
        
        }}
        >
        <Ionicons name="location" size={24} color="black" />

        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          Deliver to gokul -  sathy 638401
        </Text>
        </View>
      </View>
      <Text style={{color:"green",
      
      marginHorizontal:10,
          fontWeight:"500"
    }}
        >In stock</Text>

    <Pressable
    onPress={()=>addItemToCart(route.params?.item)}
    style={{backgroundColor:"#FFC72C",padding:10,borderRadius:20,justifyContent:"center",
    alignItems:"center",marginHorizontal:10,marginVertical:10
  }}
    >
      {addedToCart?(
      <View>
        <Text>Added to Cart </Text>
      </View>
      ):(
      <Text>Add to Cart</Text>
      )}
     
    </Pressable>

    <Pressable
    style={{backgroundColor:"#FFAC1C",padding:10,borderRadius:20,justifyContent:"center",
    alignItems:"center",marginHorizontal:10,marginVertical:10
  }}
    >
      <Text>Buy Now</Text>
    </Pressable>


    </ScrollView>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})