import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch, Provider } from 'react-redux';
import { Input } from 'react-native-elements';
import style from '../assets/css/style.js'
import * as ActionType from '../actions/toDoActions'

const Login = (props) => {
    const dispatch = useDispatch()
    const logged=useSelector((state)=>state.toDo.logged)
    const [user, setUser] = useState({email:"Aaaa",password:"Aaaa"})
   

    const submitLogin=async ()=>{
        await dispatch(ActionType.doLogin(user))
        if (logged ===true) props.navigation.navigate("ToDo")
        }



    return (
        <View style={style.container}>
            <Input value={user.email} onChangeText={(newEmail) => setUser({...user,email:newEmail})} placeholder="Email" />
            <Input value={user.password} onChangeText={(newPassword) => setUser({...user,password:newPassword})} placeholder="Password" />
            <Button title="Login" onPress={() => {submitLogin()}}></Button>
        </View>
    )
}


export default Login


