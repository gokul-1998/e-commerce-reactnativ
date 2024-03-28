import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const AddressScreen = () => {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
    return (
        <ScrollView
            style={{ marginTop: 50, }}
        >
            <View style={{
                height: 50,
                backgroundColor: "#00CED1"
            }}>

            </View>
            <View style={{
                padding: 10
            }}>
                <Text style={{
                    fontSize: 17,

                    fontWeight: 'bold'
                }}>
                    Add a new Address
                </Text>
                <TextInput placeholderTextColor={'black'}
                    placeholder='India'
                    style={{
                        padding: 10, borderColor: "#D0D0D0",
                        borderWidth: 1, marginTop: 10, borderRadius: 5
                    }}
                />
                <View
                    style={{
                        marginVertical: 10
                    }}
                >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Full Name (First Name and last name) </Text>

                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={'black'}
                        style={{
                            padding: 10, borderColor: "#D0D0D0",
                            borderWidth: 1, marginTop: 10, borderRadius: 5
                        }} placeholder='enter your name'></TextInput>
                </View>
                <View>
                    <Text style={{
                        fontSize: 17,

                        fontWeight: 'bold'
                    }}>Mobile Number</Text>
                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        placeholderTextColor={'black'}
                        style={{
                            padding: 10, borderColor: "#D0D0D0",
                            borderWidth: 1, marginTop: 10, borderRadius: 5
                        }} placeholder='Mobile Number'></TextInput>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{
                        fontSize: 17,

                        fontWeight: 'bold'
                    }}>Flat,House No,Building,Company</Text>
                    <TextInput
                        value={houseNo}
                        onChangeText={(text) => setHouseNo(text)}
                        placeholderTextColor={'black'}
                        style={{
                            padding: 10, borderColor: "#D0D0D0",
                            borderWidth: 1, marginTop: 10, borderRadius: 5
                        }} placeholder=''></TextInput>


                </View>
                <View >
                    <Text style={{
                        fontSize: 15,

                        fontWeight: 'bold'
                    }}>Area, Street, Sector, Village</Text>

                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        placeholderTextColor={'black'}
                        style={{
                            padding: 10, borderColor: "#D0D0D0",
                            borderWidth: 1, marginTop: 10, borderRadius: 5
                        }} placeholder=''></TextInput>



                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{
                        fontSize: 17,

                        fontWeight: 'bold'
                    }}>
                        LandMark
                    </Text>
                    <TextInput
                        value={landmark}
                        onChangeText={(text) => setLandmark(text)}
                        placeholderTextColor={'black'}
                        style={{
                            padding: 10, borderColor: "#D0D0D0",
                            borderWidth: 1, marginTop: 10, borderRadius: 5
                        }} placeholder='Eg : Near appollo hospital'></TextInput>

                </View>
                <View>
                    <Text style={{
                        fontSize: 17,

                        fontWeight: 'bold'
                    }}>Pincode</Text>

                    <TextInput
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                        placeholderTextColor={'black'}
                        style={{
                            padding: 10, borderColor: "#D0D0D0",
                            borderWidth: 1, marginTop: 10, borderRadius: 5
                        }} placeholder='Enter Pincode'></TextInput>


                </View>

                <Pressable
                    style={{
                        backgroundColor: "#FFC72C", padding: 19, borderRadius: 6,
                        justifyContent: "center", marginTop: "20", alignItems: "center"
                    }}>
                    <Text style={{ fontWeight: "bold" }}>Add Address</Text>
                </Pressable>

            </View>

        </ScrollView>
    )
}

export default AddressScreen

const styles = StyleSheet.create({})