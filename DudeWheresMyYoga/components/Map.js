import React from "react";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const Map = () => {
    return (
        <MapView
            style={{ width, height }}
            initialRegion={{
                latitude: 52.5200,
                longitude: 13.4050,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
        />
    );
}

export default Map;