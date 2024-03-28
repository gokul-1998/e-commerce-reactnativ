import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { AntDesign } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import { UserType } from '../UserContext';

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  console.log("userId", userId)
  useEffect(() => {
    // fetch all addresses of the user
    fetchAddresses();
  }
    , [])
  const fetchAddresses = async () => {
    // fetch all addresses of the user
    try {
      const response = await axios.get(`/addresses/${userId}`);
      const { addresses } = response.data;
      setAddresses(addresses);
    }
    catch (error) {
      console.error("Error fetching addresses:", error);
    }
  }
  console.log("addresses", addresses)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        marginTop: 50
      }}
    >
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

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Adddresses</Text>
        <Pressable
          onPress={() => navigation.navigate("Add")}
          style={{

            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 7,
            paddingHorizontal: 5,


          }}>
          <Text>
            Add a new address
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </Text>
        </Pressable>
        <Pressable>
          {/* all the added addresses */}
          {addresses?.map((item, index) => (
            <Pressable style={{
              borderWidth: 1,
              borderColor: "#D0D0D0",
              padding: 10,
              flexDirection: "column",
              gap: 5,
              marginVertical: 10,
            }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
              }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold"
                  }}
                >{item?.name}</Text>
                <Entypo name="location-pin" size={24} color="red" />
              </View>
              <Text style={{
                fontSize: 15,
                color: '#181818'

              }}>{item?.houseNo},{item?.landmark}</Text>

              <Text
                style={{
                  fontSize: 15,
                  color: '#181818'
                }}
              >
                {item?.street}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#181818'
                }}
              >
                India,Bangalore
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#181818'
                }}
              >
                Phone No : {item?.mobileNo}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#181818'
                }}
              >
                Pincode: {item?.postalCode}
              </Text>

                <View>
                  <Pressable
                  style={{backgroundColor:"#F5F5F5",
                paddingHorizontal:10,
                paddingVertical:5,
                borderRadius:5,
                borderWidth:0.9,
                borderColor:"#D0D0D0",
              
              }}
                
                  >
                    <Text>Edit</Text>
                  </Pressable>
                </View>


            </Pressable>
          ))}
        </Pressable>
      </View>


    </ScrollView>
  )
}

export default AddAddressScreen

const styles = StyleSheet.create({})