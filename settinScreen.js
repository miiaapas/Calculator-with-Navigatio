import React from "react";
import { View, Text, Button } from "react-native";
import { Ionicons} from '@expo/vector-icons'; 

import Homescreen from './homeSceen';

export default function SettingScreen ( {navigation }){
    return(
        <View style={styles.container}>
        <Text>History</Text>
        <FlatList
            data={data}
            renderItem = {({item}) =>
            <Text>{item.key}
            </Text>}
            />
            <Button 
                title="Settings"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',  
      marginTop:'50%'
    }
  })