import React from 'react'
import {  StyleSheet, View } from 'react-native'
import { Button, HeaderNoIcon, Inputtext } from '../../components'
import {colors} from '../../utils'


const SignIn = () => {
    return (
        <View>
            <HeaderNoIcon title='Sign In' subtitle='Find your best ever meal'/>
            <View style={styles.wrapbody}>
                <Inputtext title='Email Address' placeholder='Type your email address' />
                <Inputtext title='Password' placeholder='Type your password'/>
                <Button title='Sign In'/>
                <Button title='Create New Account' backcolor={colors.default2} textcolor='white'/>            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapbody:{
            marginTop:24,
            padding: 24,
        },
});
export default SignIn


