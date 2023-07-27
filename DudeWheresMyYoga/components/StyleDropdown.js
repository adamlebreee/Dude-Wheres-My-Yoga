import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = ['Vinyasa', 'Hatha', 'Aerial', 'Acro', 'Bikram', 'Jivamukhti', 'Beer'];

const StyleDropdown = ({ setSelectedStyle }) => {
    return (
        <View>
            <Picker
                onValueChange={(itemValue) => setSelectedStyle(itemValue)}
            >
                <Picker.Item label="Select a Style" value={null} />
                {styles.map((style, index) => {
                    return <Picker.Item key={index} label={style} value={style} />;
                })}
            </Picker>
        </View>
    );
};

export default StyleDropdown;