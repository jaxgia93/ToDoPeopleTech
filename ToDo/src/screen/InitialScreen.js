
import React from 'react';
import { View, Button } from 'react-native'
import { Provider, useSelector } from 'react-redux';
import { store } from '../store';
import style from '../assets/css/style.js'

const InitialScreen = (props) => {
    return (
            <View style={style.container}>
                <Button title="Registrazione" onPress={()=>props.navigation.navigate('Registration')}/>
                <Button title="Login" onPress={()=>props.navigation.navigate('Login')}/>
            </View>
       )
}

export default InitialScreen;
