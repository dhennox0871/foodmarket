import React from 'react';
import {Text,StyleSheet} from 'react-native';
import {colors} from '../../../utils'

const Subtitle =({subtitle})=>{
    return (
        <Text style={styles.textSubtitle}>{subtitle}</Text>
    )
}

const styles = StyleSheet.create({
    textSubtitle:{
        fontSize:14,
        fontFamily:'Poppins-Light',
        color:colors.default2
    }
});

export default Subtitle;