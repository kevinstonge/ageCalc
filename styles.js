import { StyleSheet, Dimensions } from 'react-native';

let bgDark = "#161616";
let bgNormal = "#323232";
let fgNormal = "#ccc";
let fgLight = "#fff";
let fgDull = "#646464";
let width = Dimensions.get('window').width;

export default styles = StyleSheet.create({
    title: {
        color: fgLight,
        fontSize: width/20,
        textAlign: "center",
    },
    text: {
        color: fgNormal,
        fontSize: width/27,
    },
    button: {
        backgroundColor: bgNormal,
        padding: 5,
        width: "20%",
    },
    buttonText: {
        color: fgNormal,
        width: "100%",
        textAlign: "center",
        fontSize: width/27,
    },
    activeButton: {
        backgroundColor: fgDull,
    },
    activeButtonText: {
        color: fgLight,
    },
    scrollView: {
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    body: {
        backgroundColor: bgDark,
        height: '100%',
        flexDirection: "column",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: fgDull,
    },
    pickerRow: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    pickerRowItem: {
        borderWidth: 1,
        borderColor: fgNormal,
        textAlignVertical: "center",
        textAlign: "center",
        padding: 5,
        margin: 10,  
        color: fgNormal,
        paddingHorizontal: 10,
    },
    pickDate: {
        width: "60%",
    },
    dateContainer: {
        flexDirection: "column",
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5, 
    },
    dateBox: {
        marginTop: 5,
        backgroundColor: bgNormal,
        padding: 5,
        borderRadius: 3,
    },
    dateHeading: {
        color: fgNormal,
        borderBottomWidth: 1,
        borderBottomColor: fgDull,
        fontSize: width/27,
    },
    dateItem: {
        color: fgNormal,
        fontSize: width/27,
    },
    dateItemHighlight: {
        fontWeight: "bold",
        color: fgLight,
    },
  });
