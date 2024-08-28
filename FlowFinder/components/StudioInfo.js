import React from "react";
import { StyleSheet, Linking, TouchableOpacity, Text } from "react-native";

const StudioInfo = ({ studio }) => {
    if (!studio) {
        return null;
    }

    return (
        <>
            <Text style={styles.title}>{studio.name}</Text>
            <Text style={styles.info}>{studio.address}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(studio.website)}>
                <Text style={styles.link}>{studio.website}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    info: {
        fontSize: 16,
        textAlign: 'center',
    },
    link: {
        fontSize: 16,
        textAlign: 'center',
        color: 'blue'
    }
})

export default StudioInfo;
