import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { Title ,Subtitle} from '../../atoms';

const HeaderNoIcon =({title,subtitle})=>{
    return(
        <View style={styles.wrapper}>
            <Title title={title}/>
            <Subtitle subtitle={subtitle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding:24,
        
    }
});
export default HeaderNoIcon;