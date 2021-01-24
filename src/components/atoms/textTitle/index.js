import React from 'react'
import {Text,StyleSheet} from 'react-native'
import {colors} from '../../../utils'

const Title = ({title}) => {
    return(
        <Text style={styles.textTitle}>{title}</Text>

    )
}

const styles = StyleSheet.create({
    textTitle:{
        fontSize:22,
        fontFamily: 'Poppins-Medium',
        color: colors.text.dark,
    }
});
export default Title;