import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const Title = () => {
    return (
        <View>
            <Text style={styles.title}>Dude, Where's My Yoga?</Text>
        </View>
    );
};

export default Title;
