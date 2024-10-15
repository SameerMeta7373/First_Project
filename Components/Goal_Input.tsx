import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import {useState} from 'react';

function GoalInput(props: any) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/file.png')}></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#8ab557" title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View>
            <Button
              color="#b80000"
              title="Cancel"
              onPress={props.onCancel}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 2,
    padding: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 20,
    padding: 2,
    color: 'black',
    borderRadius: 6,
    borderWidth: 2,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputContainer: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom : 90,
    flex : 0.7,
    // backgroundColor: '#1a23a1'
  },
  appContainer: {
    // flex: 8,
    padding: 60,
    // paddingTop: 60,
    paddingHorizontal: 15,
  },
  textInput: {
    color: 'black',
    fontSize: 20,
    borderRadius: 7,
    borderWidth: 2.5,
    borderColor: 'black',
    width: '90%',
    backgroundColor: '#c1bea4',
    padding: 12,
  },

  seperate: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  goalcontainer: {
    flex: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },

  button: {
    width: '40%',
    marginHorizontal: 15,
  },
  imageStyle: {
    width: 250,
    height: 250,
    margin: 40,
  },
});

export default GoalInput;
