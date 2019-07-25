import React, { Component } from 'react'
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class PickDate extends Component {
    render() {
        return (
            <View>
                <DatePicker
                  date={this.props.birthDate}
                  mode="datetime"
                  placeholder="select date"
                  format="YYYY-MM-DD HH:mm"
                  is24Hour={true}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  onDateChange={(date)=>{this.props.updateBirthDate(date)}}
                />
            </View>
        )
    }
}