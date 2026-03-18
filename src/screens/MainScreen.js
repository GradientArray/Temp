import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import CardMenuItem from '../components/CardMenuItem';

const menuItems = [
  { id: '1', title: 'Loading Stock', route: 'LoadingStock', icon: 'auto-awesome-mosaic' },
  { id: '2', title: 'Loading Tally', route: 'LoadingTally', icon: 'receipt' },
  { id: '3', title: 'Print Manifest', route: 'PrintManifest', icon: 'print' },
  { id: '4', title: 'MF Attachment', route: 'MFAttachment', icon: 'description' },
  { id: '5', title: 'Vehicle Arrival Reporting', route: 'VehicleArrivalReporting', icon: 'local-shipping' },
  { id: '6', title: 'Pre Check Tally Sheet', route: 'PreCheckTallySheet', icon: 'balance' },
  { id: '7', title: 'Unloading Tally', route: 'UnloadingTally', icon: 'move-to-inbox' },
  { id: '8', title: 'Unloading View', route: 'UnloadingView', icon: 'fact-check' },
  { id: '9', title: 'Change Location', route: 'ChangeLocation', icon: 'add-location' },
  { id: '10', title: 'DD Loading Tally', route: 'DDLoadingTally', icon: 'inventory' },
  { id: '11', title: 'DC View', route: 'DCView', icon: 'find-in-page' },
  { id: '12', title: 'Loading Tally Scan', route: 'LoadingTallyScan', icon: 'document-scanner' },
  { id: '13', title: 'Manual Unloading TALLY SCAN', route: 'ManualUnloadingTallyScan', icon: 'qr-code-scanner' },
  { id: '14', title: 'Loading Tally Full', route: 'LoadingTallyFull', icon: 'contact-page' },
  { id: '15', title: 'IFX +IWL UNLOADING TALLY', route: 'IFXUnloadingTally', icon: 'location-searching' },
  { id: '16', title: 'IFX +IWL LOADING TALLY', route: 'IFXLoadingTally', icon: 'location-searching' },
];

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Menu - IWL" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.gridContainer}>
          {menuItems.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <CardMenuItem 
                title={item.title} 
                iconName={item.icon} 
                onPress={() => navigation.navigate(item.route)} 
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '49%', // To get 2 items per row with slight gap
    marginBottom: 5,
  }
});

export default MainScreen;
