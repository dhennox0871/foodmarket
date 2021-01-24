import React from 'react'
import {  StyleSheet, View } from 'react-native'
import { HeaderNoIcon, Inputtext, Button2,Button1 } from '../../components'


const SignIn = () => {
    return (
        <View>
            <HeaderNoIcon title='Sign In' subtitle='Find your best ever meal'/>
            <View style={styles.wrapbody}>
                <Inputtext title='Email Address' placeholder='Type your email address' />
                <Inputtext title='Password' placeholder='Type your password'/>
                <Button1 title='Sign In'/>
                <Button2 title='Create New Account'/>
                
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


