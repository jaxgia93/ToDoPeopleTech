import React, { useState } from 'react';
import { View, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Input, Text } from 'react-native-elements';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button/index';
import { AsyncStorage } from "react-native"
import style from '../assets/css/style.js'
import * as  ActionType from '../actions/toDoActions'

const Registration = (props) => {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        id: Math.floor(Math.random() * 10) + 1,
        name: "",
        email: "",
        password: "",
        gender: "M",
        children: "",
        toDo: [],
    })


    var radio_props = [
        { label: 'Maschio', value: "M" },
        { label: 'Femmina', value: "F" }
    ];

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
            <Button title="Registrati" onPress={() => { dispatch(ActionType.registrationUser(user)) }} />
            <Button title="Leggi" onPress={() => { props.navigation.navigate("ToDo") }} />


        </View>
    )
}


export default Registration
