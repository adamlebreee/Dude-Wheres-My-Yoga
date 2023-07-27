import React from "react";
import { View, Text } from "react-native";

const StudioInfo = ({ studio }) => {
    console.log(studio)
    return (
        <View> 
            <Text>{studio.name}</Text>
            <Text>{studio.address}</Text>
            <Text>{studio.website}</Text>
        </View>
    )
}

export default StudioInfo;