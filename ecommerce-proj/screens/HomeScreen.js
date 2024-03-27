import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
    const list = [
        {
          id: "0",
          image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
          name: "Home",
        },
        {
          id: "1",
          image:
            "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
          name: "Deals",
        },
        {
          id: "3",
          image:
            "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
          name: "Electronics",
        },
        {
          id: "4",
          image:
            "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
          name: "Mobiles",
        },
        {
          id: "5",
          image:
            "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
          name: "Music",
        },
        {
          id: "6",
          image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
          name: "Fashion",
        },
      ];

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: "white" }}>
            <ScrollView>
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

                <View style={{ flexDirection: "row", alignItems: "center", gap: 5, padding: 10, backgroundColor: "#AFEEEE" }}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Pressable>
                        <Text style={{ fontSize: 13, fontWeight: "500" }}>
                            Deliver  to  Gokul -  Bangalore 560054
                        </Text>
                    </Pressable>

                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />

                </View>

            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {list.map((item,index)=>{
                        <Pressable>
                            
                            <Image style={{width:50,height:50,resizeMode:"contain"}}  source={{uri:item.image}} />

                            <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>{item?.name} </Text>

                        </Pressable>
                    }) }
            </ScrollView>


                <Text>fajjsdfaf</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})