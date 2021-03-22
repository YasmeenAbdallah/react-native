import React from 'react';
import {text , StyleSheet} from 'react-native';

const ComponentsScreen = () =>{
    return <Text style={styles.textstyle}> hi there!!</Text>;
};

const styles = StyleSheet.create({
   textstyle:{
       fontSize:30
   }
});

export default ComponentsScreen;