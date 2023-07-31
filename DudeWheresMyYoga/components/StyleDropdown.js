import React from 'react';
import { Select, NativeBaseProvider } from 'native-base';

const stylesList = ['Vinyasa', 'Hatha', 'Aerial', 'Bikram', 'Jivamukti', 'Beer'];

const StyleDropdown = ({ selectedStyle, setSelectedStyle }) => {
    return (
        <NativeBaseProvider>
            <Select
                selectedValue={selectedStyle || 'Select a Style'}
                minWidth="200"
                placeholder='Select a Style'
                onValueChange={(itemValue) => setSelectedStyle(itemValue)}
                _selectedItem={{
                    alignItems: "center",
                    background: "#387043",
                }}
                textAlign={'center'}
                fontSize={20}
                fontWeight={'bold'}
                textTransform='uppercase'
                color={'#4b7e55'}
            >
                {stylesList.map((style, index) =>
                    <Select.Item
                        key={index}
                        label={style}
                        value={style}
                        _text={textAlign = "center"}
                    >
                    </Select.Item>
                )}
            </Select>
        </NativeBaseProvider>
    );
};

export default StyleDropdown;