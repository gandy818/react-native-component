import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const EventButton = () => {
    const _onPressIn = ()=> console.log('press In! \n')
    const _onPressOut = ()=> console.log('press Out! \n')
    const _onPress = ()=> console.log('press\n')
    const _OnLongPress = ()=> console.log('long press! \n')

    return (
        <TouchableOpacity
        style={{
            backgroundColor: '#f1c40f',
            padding: 16,
            margin: 10,
            borderRadius: 8
        }}
        onPressIn={_onPressIn}
        onLongPress={_OnLongPress}
        onPressOut={_onPressOut}
        onPress={_onPress}
        delayLongPress={3000}
        >
            <Text style={{color: 'white', fontSize: 24}}>Press</Text>
        </TouchableOpacity>
    )
}
export default EventButton