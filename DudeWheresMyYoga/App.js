import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Title from './components/Title';
import StyleDropdown from './components/StyleDropdown';
import StyleTooltip from './components/StyleTooltip';
import Map from './components/Map';
import StudioInfo from './components/StudioInfo';


export default function App() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedStudio, setSelectedStudio] = useState(null);
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    setSelectedStudio(null);
    setStudios([]);
    if (selectedStyle) {
      fetch('http://192.168.178.31:3000/studio/style/' + selectedStyle)
        .then(response => response.json())
        .then(data => {
          setStudios(data);
        })
        .catch((error) => {
          console.error('error:', error);
        });
    }
  }, [selectedStyle]);

  return (
    <View style={{ flex: 1 }}>
      <Title />
      <StyleDropdown setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle} />
      {selectedStyle && <StyleTooltip selectedStyle={selectedStyle} />}
      <View style={{ flex: 0.7 }}>
        <Map setSelectedStudio={setSelectedStudio} studios={studios} />
      </View>
      {selectedStudio &&
        <View style={{ flex: 0.3 }}>
          <StudioInfo studio={selectedStudio} />
        </View>
      }
    </View>
  );
}

registerRootComponent(App);