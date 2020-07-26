import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'react-native-elements';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button/index';
import AsyncStorage from '@react-native-community/async-storage'

const Registration = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("M")
    const [children, setChildren] = useState("")


    const getValue=async (id)=>{

       return await AsyncStorage.getItem(id)
    }


    const setValue=async (id,value)=>{

         await AsyncStorage.setItem(id,JSON.stringify(value))
     }

    var radio_props = [
        { label: 'Maschio', value: "M" },
        { label: 'Femmina', value: "F" }
    ];

    return (
        <View>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <RadioForm
                radio_props={radio_props}
                onPress={(value) => { setGender({ value: value }) }}
            />
            <Input value={children} onChange={(e) => setChildren(e.target.value)} placeholder="Bambini" keyboardType="numeric" />
            <Button onPress={() => { setValue("@user",email)}} title="Salva" ></Button>
            <Button onPress={() => { console.log(getValue("@user")) }} title="Carica" ></Button>
        </View>
    )
}


export default Registration
