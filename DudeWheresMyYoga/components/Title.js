import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginLeft: 75
    },
});

const Title = () => {
    return (
            <View style={{  alignItems: 'center'}}>
                <Image
                    style={styles.logo}
                source={require('../assets/Flow Finder.webm')}
            />
        </View>
    );
};

export default Title;
