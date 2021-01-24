import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {TextInput} from 'react-native-gesture-handler'
import {colors} from '../../../utils'

const Inputtext =({title,placeholder}) =>{
    return(
        <View>
            <Text style={styles.texttitle}>{title} :</Text>
            <TextInput placeholder={placeholder} style={styles.textinput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    texttitle:{
        fontSize:16,
    },
    textinput:{
        borderColor:colors.default2,
        borderWidth:1,
        borderRadius:8,
        padding: 10,
        marginVertical:6

    }
});

export default Inputtext;