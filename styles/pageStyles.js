import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    pageContainer: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    backgroundImage: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 42,
        fontWeight: "bold",
        color: "black",
    },
    inputContainer: {
        bottom: "-30%",
        width: "66%",
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    inputField: {
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        borderWidth: 1,
        textDecorationLine: "none",
        backgroundColor: "#D3D3D1",
    },
    dividerLine: {
        borderBottomWidth: 2,
    },
    loginButton: {
        alignSelf: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        paddingVertical: 10,
        margin: 7,
        marginTop: 20,
        width: 200,
    },
    loginButtonText: {
        fontSize: 15,
        textAlign: "center",
        color: "black",
        letterSpacing: .5,
        fontWeight: "700"
    },
    registerButton: {
        alignSelf: "center",
        backgroundColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 10,
        margin: 7,
        width: 200,
    },
    registerButtonText: {
        fontSize: 15,
        textAlign: "center",
        color: "white",
        letterSpacing: .5,
        fontWeight: "700"
        
    }
});

export default styles;