import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center "}}>
        <Image
          style={{ width: 350, height: 300 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})