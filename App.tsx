import React from 'react';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import GoalItems from './Components/Goal_Items';
import GoalInput from './Components/Goal_Input';

function App(): React.JSX.Element {
  const [modalisVisible, setModalisVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<any[]>([]);

  function startAddGoalHandler() {
    setModalisVisible(true);
  }

  function endAddGoalHandler() {
    setModalisVisible(false);
  }
  function addGoalHandler(enteredGoalText: any) {
    setCourseGoals(currCourseGoals => [
      ...currCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id: number) {
    setCourseGoals(currCourseGoals => {
      return currCourseGoals.filter(goals => goals.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#8ab557"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalisVisible}
        addGoalHandler={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <Text style={styles.seperate}>List of Goals:</Text>
      <FlatList
        data={courseGoals}
        renderItem={itemData => {
          return (
            <GoalItems
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              index={itemData.index + 1}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
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

    // paddingBottom: 30
  },
  highlight: {
    fontWeight: '700',
  },
  inputContainer: {
    // borderColor : 'black',
    // height : 40,
    // borderWidth: 1,
    color: 'black',
    fontSize: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appContainer: {
    // flex: 8,
    padding: 60,
    // paddingTop: 60,
    paddingHorizontal: 15,
  },
  textInput: {
    height: 43,
    borderRadius: 7,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: '75%',
    marginRight: 4,
  },

  seperate: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  goalcontainer: {
    flex: 5,
  },
});

export default App;

// <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             margin: 16, borderWidth: 10, borderColor: 'black', padding: 16,
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//           <View style={{
//             margin: 16, borderWidth: 4, borderColor: 'black',
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Button
//            title='tap for more'></Button>
//            </View>
//            </View>
//       </ScrollView>
//     </SafeAreaView>

// <View
// style = {{
//   padding : 50,
//   flexDirection: 'row',
//   width: '80%',
//   height: 300,
//   justifyContent: 'space-around',
//   alignItems: 'stretch'
// }}>
// <View
// style = {{
//   backgroundColor:'black',
//   flex : 1,
//   justifyContent: 'center',
//   alignItems: 'center'
// }}>
//   <Text style = {{
//     color : 'white'
//   }}> Hello </Text>
//   <View
//   style = {{
//     backgroundColor:'green',
//     flex : 2,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }}>
//     <Text> Hello  </Text>
//   </View>
// </View>
// </View>

// {
//   /* <TouchableOpacity
//               style={{
//                 backgroundColor: 'black',
//                 height: 37,
//                 width: 60,
//               }}>
//               <Text style = {{
//                 color : 'white',
//                 alignItems : 'center',
//                 paddingTop: 9,
//                 paddingHorizontal: 13
//               }}>
//                 Enter
//               </Text> */
// }
// {
//   /* <Button
//               title='Add goal'></Button> */
// }
// {
//   /* </TouchableOpacity> */
// }

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
