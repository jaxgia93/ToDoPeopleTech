import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-native-modal'
import { Input } from 'react-native-elements';
import * as ActionType from '../actions/toDoActions'

const Todo = (props) => {
  const [value, setValue] = useState("")
  const [toDo, setTodo] = useState([])
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const user = useSelector((state) => state.toDo.user)
  const toDoState = useSelector((state) => state.toDo.toDo)
  

  const retrieveData = async () => {

    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodo(response.data))
      .catch((err) => alert(err))
    console.log(toDo)
  }



  return (
    <ScrollView >
      <Modal isVisible={modal} backdropColor="#fff">
        <View>
          <Input value={title} onChangeText={(newToDo) => { setTitle(newToDo) }} placeholder="Aggiungi una ToDo" />
          <Button title="Aggiungi" onPress={() => dispatch(ActionType.addToDo(title))} />
        </View>

      </Modal>
      {toDoState.length > 0 ?
        toDoState.map((l, i) => (
          < ListItem
            key={i}
            title={l.title}
            subtitle={1 === l.userId ? user.name : "utente ospite"}
            bottomDivider
            rightElement={< TouchableOpacity onPress={() => alert(l.userId)}><Icon
              reverse
              name='ios-american-football'
              type='ionicon'
              color='#517fa4'
            /></TouchableOpacity>}
            rightIcon={< Icon
              name='g-translate'
              color='#00aced' />}
          />
        )) : <Text>Nessun risultato</Text>
      }

      {
        toDoState.length === 0 ?
          <Button onPress={() => retrieveData()} title="Carica Risultati" /> : null
      }

      <Button title="Modal" onPress={() => setModal(true)} />
    </ScrollView >
  )

}


export default Todo