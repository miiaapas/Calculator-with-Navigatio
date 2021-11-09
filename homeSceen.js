import React from "react";
import { View, Text, Button } from "react-native";
import { Ionicons} from '@expo/vector-icons'; 

import SettingScreen from './settinScreen';

export default function Homescreen ({ navigation }){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>This is Homescreen</Text>
            <Button
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
                />
        </View>
    );
}