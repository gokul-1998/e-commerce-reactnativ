import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';



const RegisterScreen = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const navigation = useNavigation();


    const handleRegister = () => {
        const user = {
            name: name,
            email: email,
            password: password,
        };

        // send a post request to the  backend  API

        axios.post("http://192.168.21.57:8000/register", user).then((response) => {
            console.log(response.data);
            // navigation.navigate("Home");
            Alert.alert("Registration successful", "You have been registered successfully, please verify your email to login");
            setName('');
            setEmail('');
            setPassword('');


        }).catch((error) => {
            Alert.alert("Registration failed", "An error occured while registering, please try again");
            console.log(error);
        }
        )
    }
    return (

        <SafeAreaView
            style={{ flex: 1, backgroundColor: "white", alignItems: "center", marginTop: 50 }}>
            <View>

                <Image
                    style={{ width: 150, height: 100 }} source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: '#041E42' }}>Register to your account </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>

                        <Ionicons style={{ marginLeft: 8 }} name="person-sharp" size={24} color="gray" />

                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}

                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: name ? 16 : 16 }} placeholder='Enter your  name' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />

                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder='Enter your  email' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>

                        <AntDesign style={{ marginLeft: 8 }} name="lock" size={24} color="gray" />

                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }} placeholder='Enter your  password' />
                    </View>


                </View>

                <View style={{ marginTop: 10 }}>



                </View>

                <View style={{
                    marginTop: 12, flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <Text>Keep me logged  in</Text>
                    <Text style={{ color: '#007F77', fontWeight: '500' }}>Forgot password</Text>
                </View>
                <View style={{ marginTop: 80 }} />
                <Pressable
                    onPress={handleRegister}
                    style={{
                        width: 200, backgroundColor: "#FEBE10", borderRadius: 6, marginLeft: "auto",
                        marginRight: "auto ",
                        padding: 15,
                        textAlign: 'center',

                    }}>
                    <Text style={{
                        textAlign: "center", color: "white",
                        fontSize: 16,
                        fontWeight: "bold"
                    }}>Register</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                        Already have an account ? Sign In
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})