import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MoodPicker} from '../components/MoodPicker';

import {useAppContext} from '../App.provider';

export const Home: React.FC = () => {
  const {handleSelectMood} = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
