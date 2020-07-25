import React from 'react';
import { View, Text,Button } from 'react-native'
import {  useSelector,useDispatch } from 'react-redux';
import * as ActionType from '../../actions/toDoActions'

const TestComponent = () => {
    const session = useSelector((state) => state.toDo)
     const dispatch = useDispatch()
    return (
        <View>
           <Button onPress={()=>dispatch({type:ActionType.ADD_TODO})} title="dsa" ></Button>
        </View>
    )
}


export default TestComponent
 