import React from 'react';
import {View, Text, Button} from 'react-native'
import MyButton from './components/MyButton'

const App = () => {
    return (
        <View style={{
            flex : 1,
            backgroundColor : 'skyblue',
            alignItems : 'center',
            justifyContent : 'center',
        }}>
          <Text style={{ fontSize: 30, marginBottom: 10}}>Button Component</Text>
          {/* <Button title="Button" onPress={()=>alert('clicked')}></Button> */}
          <MyButton></MyButton>
        </View>
    )
}

export default App