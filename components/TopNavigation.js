
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fasun } from 'react-icons/fa';
import { NewsContext } from '../API/Context';
import { useContext } from 'react';


export default function TopNavigation({ index, setIndex }) {

    const { darkTheme, setDarkTheme } = useContext(NewsContext)
    return (
        <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white", }}>

            {/* left side element  */}
            {index === 0 ? (
                <TouchableOpacity
                    onPress={() => setDarkTheme(!darkTheme)}
                    style={styles.left}
                >
                    <Text style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/moon.png')}
                        />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/left-arrow.png')}
                    />
                    <Text style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}>Discover</Text>
                </TouchableOpacity>
            )
            }


            {/* centre element  */}
            <Text style={{ ...styles.centre, color: darkTheme ? "white" : "black" }}>
                {index === 0 ? "Discover" : "All news "}
            </Text>


            {/* right side element */}
            {index === 0 ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Text style={{ ...styles.text, color: darkTheme ? "white" : "black" }}>
                        All News
                        <Image
                            style={styles.icon}
                            source={require('../assets/right-arrow.png')}
                        />
                    </Text>


                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.right}
                // onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Text style={styles.text}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/refresh.png')}
                        />
                    </Text>
                </TouchableOpacity>
            )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        borderBottomColor: "white",
        borderBottomWidth: 0.5,
        // height: 50,
    },

    left: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // width:80,
    },

    centre: {
        paddingBottom: 6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
    },

    right: {
        alignItems: "flex-end",
        // width:80,
    },

    text: {
        fontSize: 16,
    },

    icon: {
        width: 20,
        height: 20,
    }
})

