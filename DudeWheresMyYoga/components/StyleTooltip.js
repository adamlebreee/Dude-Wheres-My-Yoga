import React from "react";
import { View, Text } from "react-native";

const styleInfo = {
    Vinyasa: 'Vinyasa',
    Hatha: 'Hatha',
    Ashtanga: 'Ashtanga',
    Bikram: 'Bikram',
    Aerial: 'Aerial',
    Acro: 'Acro',
    Jivamukti: 'Jivamukti',
    Beer: 'Beer',
};

const StyleTooltip = ({ selectedStyle }) => {
    return (
        <View>
            <Text>{styleInfo[selectedStyle]}</Text>
        </View>
    );
}

export default StyleTooltip;
    
