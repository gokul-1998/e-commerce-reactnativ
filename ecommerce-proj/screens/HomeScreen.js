import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
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



        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})