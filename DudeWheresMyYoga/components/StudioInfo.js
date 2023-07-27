import React from "react";
import { View, Text } from "react-native";

const StudioInfo = ({ studio }) => {
    return (
        <View> 
            <Text>{studio.name}</Text>
            <Text>{studio.address}</Text>
        </View>
    )
}

export default StudioInfo;