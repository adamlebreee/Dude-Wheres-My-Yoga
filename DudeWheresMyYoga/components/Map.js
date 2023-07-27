import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const Map = ({ studios, setSelectedStudio }) => {
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 52.5200,
                longitude: 13.4050,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
        >

            {studios.map((studio, index) => (
                <Marker
                    key={index}
                    coordinate={{ latitude: studio.latitude, longitude: studio.longitude }}
                    title={studio.name}
                    description={studio.address}
                    onPress={() => setSelectedStudio(studio)}
                />

            ))}
        </MapView>

    );
}

export default Map;