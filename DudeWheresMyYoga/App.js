import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { View } from 'react-native';
import Title from './components/Title';
import StyleDropdown from './components/StyleDropdown';
import StyleTooltip from './components/StyleTooltip';
import Map from './components/Map';
import StudioInfo from './components/StudioInfo';


export default function App() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedStudio, setSelectedStudio] = useState(null);

  return (
    <View>
      <Title />
      <StyleDropdown setSelectedStyle={setSelectedStyle} />
      {selectedStyle && <StyleTooltip selectedStyle={selectedStyle} />}
      <Map setSelectedStudio={setSelectedStudio} />
      {selectedStudio && <StudioInfo selectedStudio={selectedStudio} />}
    </View>
  );
}

registerRootComponent(App);