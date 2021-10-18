import React from 'react';
import {View, Text, Button} from 'react-native'
import MyButton from './components/MyButton'
import Counter from './components/Counter'
import EventButton from './components/EventButton'
import EventInput from './components/EventInput'

const App = () => {
    return (
        <View style={{
            flex : 1,
            backgroundColor : 'skyblue',
            alignItems : 'center',
            justifyContent : 'center',
        }}>
          {/* <Text style={{ fontSize: 30, marginBottom: 10}}>Props</Text> */}
          {/* <Button title="Button" onPress={()=>alert('clicked')}></Button> */}
          {/* <MyButton title="Button!!" onPress={()=> alert('props')}></MyButton>
          <MyButton title="Button" onPress={()=> alert('children')}>Childern Props</MyButton>
          <MyButton onPress={()=> alert('default')}/> */}
          {/* <Counter></Counter> */}
          <EventButton></EventButton>
          <EventInput></EventInput>
        </View>
    )
}

export default App