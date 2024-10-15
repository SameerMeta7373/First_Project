import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

function GoalItems(this: any, props: any) {
  const letters = '123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.ceil(Math.random() * 10)];
  }


  return (
    <View style={styles.sectionDescription}>
      <Pressable
        android_ripple={{color: 'red'}}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={[styles.goalsItem, {backgroundColor : color} ]}>
          {props.index} - {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalsItem: {
    margin: 7,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'black',
    color: 'white',
  },
  sectionDescription: {
    marginTop: 20,
    padding: 2,
    color: 'black',
    borderRadius: 6,
    borderWidth: 2,
    fontSize: 18,
    fontWeight: '400',

    // paddingBottom: 30
  },
  goalsItemOdd: {
    margin: 7,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'grey',
    color: 'white',
  },
});

import App from '../App';
import {Colors} from 'react-native/Libraries/NewAppScreen';import babelConfig from '../babel.config';

