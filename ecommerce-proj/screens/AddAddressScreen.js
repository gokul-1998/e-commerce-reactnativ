import { StyleSheet, Text, View,ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddAddressScreen = () => {
    const navigation=useNavigation();
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
          
            <View style={{padding:10}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Your Adddresses</Text>
                <Pressable 
                onPress={()=>navigation.navigate("Add")}
                style={{

                    flexDirection:'row',
                    alignItems:"center",
                    justifyContent:"space-between",
                    marginTop:10,
                    borderColor:"#D0D0D0",
                    borderWidth:1,
                    borderLeftWidth:0,
                    borderRightWidth:0,
                    paddingVertical:7,
                    paddingHorizontal:5, 


                }}>
                    <Text>
                        Add a new address
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </Text>
                </Pressable>
                <Pressable>
                    {/* all the added addresses */}
                </Pressable>
            </View>


            </ScrollView>
  )
}

export default AddAddressScreen

const styles = StyleSheet.create({})