import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const LoginScreen = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try{
            
            const token = await AsyncStorage.getItem("authToken");
            if (token) {
                navigation.replace("Main");
            }   
        } catch (error) {
            console.log(error);
        }
        }
        checkLoginStatus();
    }, []);



    const handleLogin = () => {
        const user = {
            email: email,
            password: password,
        };

        // send a post request to the  backend  API

        axios.post("/login", user).then((response) => {
            console.log(response.data);
            //  to print the url of the  API
            console.log(response.config.url);
            token = response.data.token;
            AsyncStorage.setItem("authToken", token);
            navigation.replace("Main" )


            // // navigation.navigate("Home");
            // Alert.alert("Login successful", "You have been logged in successfully");
            // setEmail('');
            // setPassword('');
        }
        ).catch((error) => {
            Alert.alert("Login failed", error.response.data.message);
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
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: '#041E42' }}>Login to your account </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />

                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder='Enter your  email' />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>

                        <AntDesign style={{ marginLeft: 8 }} name="lock" size={24} color="gray" />

                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }} placeholder='Enter your  password' />
                    </View>

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
                    onPress={handleLogin}
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
                    }}>Login</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                        Dont have an account ? signup
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})