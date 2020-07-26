import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch, Provider } from 'react-redux';
import { Input } from 'react-native-elements';

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Button title="Login" ></Button>
        </View>
    )
}


export default Login


