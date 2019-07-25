import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PickDate from './components/PickDate';
import ListDates from './components/ListDates';
import calculateDates from './accessories/calculateDates';
import styles from './styles';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      birthDate: "",
      numbers: [100,1000,100000,1000000,10000000,100000000,1000000000],
      rarity: 10,
      mode: "Future",
      maxDateWindow: 150*365*24*60*60*1000,
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
    newState.displayDates = calculateDates(newState.birthDate,this.state.numbers,this.state.rarity,this.state.maxDateWindow,this.state.multiples);
    this.updateState(newState);
  }
  updateMode = (mode) => {
    newState = this.state;
    newState.mode = mode;
    this.updateState(newState);
  }
  updateScrollPosition = (e) => {
    newState = this.state;
    newState.scrollPosition[newState.mode] = Math.floor(e.nativeEvent.contentOffset.y);
    this.updateState(newState);
  }
  getButtonColor = (buttonTitle) => {
    return (this.state.mode === buttonTitle) ? "#cc00ff" : "#2196F3";
  }
  componentDidMount = async() => {
    let newState = JSON.parse(await AsyncStorage.getItem('ageCalcState')) || this.state;
    newState.displayDates = calculateDates(newState.birthDate,newState.numbers,newState.rarity,newState.maxDateWindow,newState.multiples);
    this.updateState(newState);
  }
  componentDidUpdate = () => {
    setTimeout(() => {
      this.refs._scrollView.scrollTo({x: 0, y:this.state.scrollPosition[this.state.mode], animated: false})     
    },100)   
  }
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <Text style={styles.title}>Interesting Age Calculator</Text>
        <View style={styles.pickerRow}>
          <Text style={styles.pickerRowItem}>Load</Text>
          <View style={styles.pickDate}>
            <PickDate birthDate={this.state.birthDate} updateBirthDate={this.updateBirthDate}/>
          </View>
          <Text style={styles.pickerRowItem}>Save</Text>
        </View>
        <View style={styles.buttonRow}>
          { ["Past","Present","Future"].map(e=>{return(
            <TouchableOpacity 
              key={e} 
              onPress={()=>this.updateMode(e)}
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