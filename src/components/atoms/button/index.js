import React from 'react';
import { Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors} from '../../../utils'

const Button = ({title,backcolor=colors.default1,textcolor=colors.text.dark}) =>{
    return(
        <TouchableOpacity style={styles.button(backcolor)}>
            <Text style={styles.textbutton(textcolor)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:(backcolor)=>({
        padding: 12,
        alignItems:'center',
        backgroundColor:backcolor,
        marginVertical:6,
        borderRadius:8,
    }),
    textbutton:(textcolor)=>({
        fontFamily:'Poppins-Medium',
        fontSize:14,
        color:textcolor
    }),
});
export default Button;