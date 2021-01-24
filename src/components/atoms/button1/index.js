import React from 'react';
import { Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors} from '../../../utils'

const Button1 = ({title}) =>{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        padding: 12,
        alignItems:'center',
        backgroundColor:colors.default1,
        marginVertical:6,
        borderRadius:8,
    },
    textbutton:{
        fontFamily:'Poppins-Medium',
        fontSize:14,
        color:colors.text.dark
    }
});
export default Button1;