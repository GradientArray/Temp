import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import LoadingStock from './src/screens/LoadingStock';
import LoadingTally from './src/screens/LoadingTally';
import PrintManifest from './src/screens/PrintManifest';
import MFAttachment from './src/screens/MFAttachment';
import VehicleArrivalReporting from './src/screens/VehicleArrivalReporting';
import PreCheckTallySheet from './src/screens/PreCheckTallySheet';
import UnloadingTally from './src/screens/UnloadingTally';
import UnloadingView from './src/screens/UnloadingView';
import ChangeLocation from './src/screens/ChangeLocation';
import DDLoadingTally from './src/screens/DDLoadingTally';
import DCView from './src/screens/DCView';
import LoadingTallyScan from './src/screens/LoadingTallyScan';
import ManualUnloadingTallyScan from './src/screens/ManualUnloadingTallyScan';
import LoadingTallyFull from './src/screens/LoadingTallyFull';
import IFXUnloadingTally from './src/screens/IFXUnloadingTally';
import IFXLoadingTally from './src/screens/IFXLoadingTally';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        
        <Stack.Screen name="LoadingStock" component={LoadingStock} />
        <Stack.Screen name="LoadingTally" component={LoadingTally} />
        <Stack.Screen name="PrintManifest" component={PrintManifest} />
        <Stack.Screen name="MFAttachment" component={MFAttachment} />
        <Stack.Screen name="VehicleArrivalReporting" component={VehicleArrivalReporting} />
        <Stack.Screen name="PreCheckTallySheet" component={PreCheckTallySheet} />
        <Stack.Screen name="UnloadingTally" component={UnloadingTally} />
        <Stack.Screen name="UnloadingView" component={UnloadingView} />
        <Stack.Screen name="ChangeLocation" component={ChangeLocation} />
        <Stack.Screen name="DDLoadingTally" component={DDLoadingTally} />
        <Stack.Screen name="DCView" component={DCView} />
        <Stack.Screen name="LoadingTallyScan" component={LoadingTallyScan} />
        <Stack.Screen name="ManualUnloadingTallyScan" component={ManualUnloadingTallyScan} />
        <Stack.Screen name="LoadingTallyFull" component={LoadingTallyFull} />
        <Stack.Screen name="IFXUnloadingTally" component={IFXUnloadingTally} />
        <Stack.Screen name="IFXLoadingTally" component={IFXLoadingTally} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
