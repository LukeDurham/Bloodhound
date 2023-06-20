import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    menuButton: {
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    menuIcon: {
        height: 40,
        width: 40,
        borderRadius: 10,
        resizeMode: "center"
    },
    greetingContainer: {
        backgroundColor: "red"
    },
    greetingText: {
        fontSize: 32,
        fontWeight: "bold",
        padding: 20,
    },
    toDoContainer: {
        backgroundColor: "green",
    },
    toDoBox: {
        backgroundColor: "blue",
        margin: 25,
        padding: 25,
        height: 100,
        borderRadius: "25%",
    },
    toDoHeader: {

    },
})

export default styles;