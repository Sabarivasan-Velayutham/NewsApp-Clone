import { View, Text, Dimensions, StyleSheet, Image, ImageBackground, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index, darkTheme }) => {

    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
                // backgroundColor: darkTheme ? "red" : "red",
            }}
        >
            <Image
                source={{ uri: item.urlToImage }}
                style={{ height: "35%", resizeMode: "cover", width: windowHeight }}
            />

            <View
                style={{
                    ...styles.description,
                    backgroundColor:"black" 
                }}
            >
                <Text style={{ ...styles.title, color: darkTheme ? "black" : "white" }}>
                    {item.title}
                </Text>
                <Text
                    style={{ ...styles.content, color: darkTheme ? "black" : "white" }}
                >
                    {item.description}
                </Text>
                <Text style={{ color: darkTheme ? "black" : "white" }}>
                    Short by
                    <Text style={{ fontWeight: "bold" }}>
                        {" "}
                        {item.author ?? "unknown"}
                    </Text>
                </Text>
            </View>

            <ImageBackground
                blurRadius={30}
                style={styles.footer}
                source={{ uri: item.urlToImage }}
            >
                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                    <Text style={{ fontSize: 13, color: "white" }}>
                        '{item?.content?.slice(0, 45)}...'
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
                        Read More
                    </Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    description: {
        padding: 15,
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    content: {
        fontSize: 15,
        paddingBottom: 10
    },
    footer: {
        height: 80,
        width: windowWidth,
        position: "absolute",
        // top:0,
        bottom: 67,
        backgroundColor: "#d7be69",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
})

export default SingleNews