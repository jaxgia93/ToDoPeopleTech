import React, { useState } from 'react';
import { View, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Input, Text } from 'react-native-elements';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button/index';
import { AsyncStorage } from "react-native"
import style from '../assets/css/style.js'

const Registration = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        children: ""
    })


    var radio_props = [
        { label: 'Maschio', value: "M" },
        { label: 'Femmina', value: "F" }
    ];

    const storeData = async (key, data) => {
        try {
            var value = await AsyncStorage.getItem(key)
            if (value!==null) alert("errore utente già creato")
            else
            await AsyncStorage.setItem(key, JSON.stringify(data))

        } catch (e) {

            alert("errore")
        }
    }




    const _retrieveData = async (key) => {
        try {
            //alert(key)

            var value = await AsyncStorage.getItem(key)
            console.log((JSON.parse(value)))
        } catch (error) {
            alert(error)
        }
    };

    return (
        <View style={style.container}>
            <Text h1>Registrazione</Text>
            <Input value={user.name} onChangeText={(newUser) => setUser({ ...user, name: newUser })} placeholder="Nome" />
            <Input value={user.email} onChangeText={(newEmail) => { setUser({ ...user, email: newEmail }) }} placeholder="Email" />
            <Input value={user.password} onChangeText={(newPassword) => setUser({ ...user, password: newPassword })} placeholder="Password" />
            <RadioForm
                radio_props={radio_props}
                onPress={(newGender) => { setUser({ ...user, gender: newGender }) }}
            />


            {user.gender === 'F' && <Input value={user.children} onChangeText={(newChildren) => setUser({ ...user, children: newChildren })} placeholder="Bambini" keyboardType="numeric" />}
            <Button title="Registrati" onPress={() => { storeData(user.email, user), _retrieveData(user.email) }} />
            <Button title="Leggi" onPress={() => {  _retrieveData(user.email) }} />


        </View>
    )
}


export default Registration
