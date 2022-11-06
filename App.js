
import React, { useContext } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import Context, { NewsContext } from './API/Context'
import InshotsTab from './components/InshotsTab'

function App() {

  const { darkTheme, setDarkTheme } = useContext(NewsContext)

  return (
    <View style={{
      ...styles.container,
      backgroundColor: darkTheme ? "black" : "white"
    }}>
      <InshotsTab />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:StatusBar.currentHeight,
    // marginTop: 0,
  },
})

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};

