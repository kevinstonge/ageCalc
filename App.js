import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import Moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import PickDate from './components/PickDate';
import ListDates from './components/ListDates';
import SavedDates from './components/SavedDates';
import calculateDates from './accessories/calculateDates';
import styles from './styles';

//TODO:
//make displayed date clickable (use two instances of datepicker? or get rid of "new" button)
//visually disable the 'save' button when the date is already saved
//tweak rarity or make it a user setting
//change version number


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      birthDate: "",
      numbers: [100,1000,100000,1000000,10000000,100000000,1000000000],
      rarity: 10,
      mode: "Future",
      maxDateWindow: 100*365*24*60*60*1000,
      displayDates: [],
      multiples: {
        years:    31557600000,
        weeks:    604800000,
        days:     86400000,
        hours:    3600000,
        minutes:  60000,
        seconds:  1000,
      },
      scrollPosition: {
        Past: 0,
        Present: 0,
        Future: 0,
      },
      savedDates: [],
      sdModalVisible: false,
    }
  }
  updateState = (newState) => {
    AsyncStorage.setItem('ageCalcState',JSON.stringify(newState)).then(
    this.setState(newState)
    );
  }
  updateBirthDate = (birthDate) => {
    newState = this.state;
    newState.birthDate = birthDate.replace(" ","T");
    newState.displayDates = calculateDates(newState);
    this.updateState(newState);
  }
  updateScrollPosition = (e) => {
    newState = this.state;
    newState.scrollPosition[newState.mode] = Math.floor(e.nativeEvent.contentOffset.y);
    this.updateState(newState);
  }
  saveDate = () => {
    newState = this.state;
    newState.savedDates.push(this.state.birthDate);
    this.updateState(newState);
  }
  getButtonColor = (buttonTitle) => {
    return (this.state.mode === buttonTitle) ? "#cc00ff" : "#2196F3";
  }
  componentDidMount = async() => {
    let newState = JSON.parse(await AsyncStorage.getItem('ageCalcState')) || this.state;
    newState.displayDates = calculateDates(newState);
    this.updateState(newState);
  }
  componentDidUpdate = () => {
    setTimeout(() => {
      this.refs._scrollView.scrollTo({x: 0, y:this.state.scrollPosition[this.state.mode], animated: false})     
    },100)   
  }
  render() {
    let saved = this.state.savedDates.includes(this.state.birthDate);
    if (this.state.birthDate === "") { saved = true }
    let savedStyle = styles.pickerRowItem;
    if (saved) { savedStyle }
    return (
      <SafeAreaView style={styles.body}>
        <Text style={styles.title}>Interesting Age Calculator</Text>

        <Modal isVisible={this.state.sdModalVisible} propagateSwipe onBackdropPress={()=>this.setState({sdModalVisible: false})} onBackButtonPress={()=>this.setState({sdModalVisible: false})}>
          <SavedDates state={this.state} updateState={this.updateState} updateBirthDate={this.updateBirthDate}/>
        </Modal>
  
        <View style={styles.pickerRow}>
          <Text style={[styles.pickerRowItem,{marginRight:"auto"}]}>
            {/* {this.state.birthDate.replace("T"," ")} */}
            { Moment(this.state.birthDate).format("ddd, MMM D, YYYY HH:mm") }
          </Text>
          <TouchableOpacity onPress={()=>this.setState({sdModalVisible: true})}>
            <Text style={[styles.pickerRowItem,styles.pickerRowButton]}>Load</Text>
          </TouchableOpacity>
          <PickDate birthDate={this.state.birthDate} updateBirthDate={this.updateBirthDate}/>
          <TouchableOpacity disabled={saved} onPress={this.saveDate}>
            <Text style={[styles.pickerRowItem,styles.pickerRowButton]}>
              Save
            </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonRow}>
          { ["Past","Present","Future"].map(e=>{return(
            <TouchableOpacity 
              key={e} 
              onPress={()=>this.setState({mode: e})}
              style={[
                styles.button,
                (this.state.mode === e) ? styles.activeButton : null
              ]}
            >
              <Text 
                style={[
                  styles.buttonText,
                  (this.state.mode === e) ? styles.activeButtonText : null                      
                ]}
              >
                {e}
              </Text>
            </TouchableOpacity>)})
          }
        </View>
        <ScrollView style={styles.scrollView} ref="_scrollView" onMomentumScrollEnd={this.updateScrollPosition} >
          <ListDates state={this.state} />
        </ScrollView>
      </SafeAreaView>
    );
  }
};