import React,{useEffect} from 'react';
import {Text, View} from 'react-native';
import { Logo } from '../../assets';
import {colors} from '../../utils'

const SplashScreen = ({navigation}) =>
{
    useEffect(() => {
        setTimeout(()=>{
          navigation.replace('SignIn');
        },2000);
        
      },[])
    return (
    <View style={{ backgroundColor:colors.default1,flex:1,justifyContent:'center',alignItems:'center' }}>
            <Logo/>
            <View style={{height:38}}/>
            <Text style={{ fontSize:32,fontFamily: 'Poppins-Medium'}}>FoodMarket</Text>
        </View>
    )
}

export default SplashScreen;