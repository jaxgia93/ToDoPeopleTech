import React from 'react'
import { AsyncStorage } from "react-native"


export const storeData = async (key, data) => {
    try {
        var value = await AsyncStorage.getItem(key)
        if (value !== null) return false
        else {
            await AsyncStorage.setItem(key, JSON.stringify(data))
            return true
        }
    } catch (e) {

        alert(e)
    }
}


export const retrieveData = async (key) => {

    try {
       // alert(email)
        const value = await AsyncStorage.getItem(key)
        console.log(value)
        return value
    } catch (error) {
        alert(error)
    }

}
