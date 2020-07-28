import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { AsyncStorage } from '@react-native-community/async-storage';

const Todo = (props) => {
    const [value,setValue]=useState("")
    const list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        }
      ]

      const _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'aaa',
            'I like to save it.'
          );
        } catch (error) {
          // Error saving data
        }
      };


      const _retrieveData = async () => {
        try {
            var value = await AsyncStorage.getItem('aaa')
            setValue (value)
            alert(value)

        } catch (error) {
        }
      };

    return (
        <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
              rightElement={<TouchableOpacity onPress={()=>alert("elimina")}><Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
              /></TouchableOpacity>}
              rightIcon={<Icon
                name='g-translate'
                color='#00aced' />}
            />
          ))
        }

        <Button onPress={()=>_storeData()} title="save"/>
        <Button onPress={()=>console.log(_retrieveData())} title="load"/>

      </View>
    )

}


export default Todo