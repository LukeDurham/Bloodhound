import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomNavbar: {
        backgroundColor: "yellow",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    menuIcon: {
        height: 40,
        width: 40,
        borderRadius: 10,
        resizeMode: "center"
    },
});

export default styles;