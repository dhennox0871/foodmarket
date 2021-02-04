import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title ,Subtitle} from '../../atoms';

const Header = ({title,subtitle}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.iconBack}/>
            <View>
                <Title title={title}/>
                <Subtitle subtitle={subtitle}/>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    wrapper:{
        padding:24,
        backgroundColor:'white',
        flexDirection:'row'
    },
    iconBack:{
        width:40,
        height:40,
        backgroundColor:'yellow',
        margin:10

    }
})
