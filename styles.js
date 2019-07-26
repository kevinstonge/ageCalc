import { StyleSheet, Dimensions } from 'react-native';

let bgDark = "#161616";
let bgNormal = "#323232";
let fgNormal = "#ccc";
let fgLight = "#fff";
let fgDull = "#646464";
let width = Dimensions.get('window').width;
let small = width/32;
let medium = width/27;
let large = width/20;

export default styles = StyleSheet.create({
    title: {
        color: fgLight,
        fontSize: large,
        textAlign: "center",
    },
    text: {
        color: fgNormal,
        fontSize: medium,
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
        fontSize: medium,
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
        justifyContent: "flex-start",
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: 10,
    },
    pickerRowItem: {
        textAlignVertical: "center",
        textAlign: "center",
        padding: 9,
        color: fgNormal,
        paddingHorizontal: 10,
        marginHorizontal: 2,
        backgroundColor: bgNormal,
        fontSize: small,
    },
    pickerRowButton: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: fgNormal,
        borderStyle: "solid",
        backgroundColor: bgDark,
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
        fontSize: medium,
    },
    dateItem: {
        color: fgNormal,
        fontSize: medium,
    },
    dateItemHighlight: {
        fontWeight: "bold",
        color: fgLight,
    },
    modalView: {
        width: "100%",
        backgroundColor: bgDark,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: fgDull,
        marginHorizontal: "auto",
        padding: 5,
    },
    modalHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: fgDull,
        marginBottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    modalHeadingText: {
        color: fgNormal,
        fontSize: medium,
    },
    modalHeadingButton: {
        borderWidth: 1,
        borderColor: fgDull,
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    modalItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,
        backgroundColor: bgNormal,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    modalItemText: {
        color: fgNormal,
        fontSize: small,
    },
    modalItemButton: {
        
        borderWidth: 1,
        borderColor: fgDull,
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    //datepicker
    dateTouch: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 10,
        marginBottom: 10,
        height: 20,
      },
      dateTouchBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      dateIcon: {
        width: 32,
        height: 32,
        marginLeft: 5,
        marginRight: 5
      },
      dateInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center'
      },
      dateText: {
        color: '#333'
      },
      placeholderText: {
        color: '#c9c9c9'
      },
      datePickerMask: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#00000077'
      },
      datePickerCon: {
        backgroundColor: '#fff',
        height: 0,
        overflow: 'hidden'
      },
      btnText: {
        position: 'absolute',
        top: 0,
        height: 42,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      btnTextText: {
        fontSize: 16,
        color: '#46cf98'
      },
      btnTextCancel: {
        color: '#666'
      },
      btnCancel: {
        left: 0
      },
      btnConfirm: {
        right: 0
      },
      datePicker: {
        marginTop: 42,
        borderTopColor: '#ccc',
        borderTopWidth: 1
      },
      disabled: {
        backgroundColor: '#eee'
      }
  });
