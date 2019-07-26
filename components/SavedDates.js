import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Moment from 'moment';
import styles from '../styles'

export default class SavedDates extends Component {
    render() {
        savedDates = this.props.state.savedDates;
        return (
            <View  style={styles.modalView}>

                <View style={styles.modalHeading}>
                    <Text style={styles.modalHeadingText}>Load a date</Text>
                    <TouchableOpacity onPress={
                        ()=>{
                            let newState = this.props.state;
                            newState.sdModalVisible = false;
                            this.props.updateState(newState);
                        }
                    }>
                    <Text style={[styles.modalHeadingText,styles.modalHeadingButton]}>X</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {
                        (savedDates.length === 0) 
                        ?
                        <View style={styles.modalItem}>
                        <Text style={styles.modalItemText}>You haven't saved any dates</Text>
                        </View>
                        :
                        savedDates.map(e=>
                            <View key={e} style={styles.modalItem}>
                            <TouchableOpacity onPress={()=>{
                                this.props.updateBirthDate(e);
                                let newState = this.props.state;
                                newState.sdModalVisible = false;
                                this.props.updateState(newState);
                            }}>
                            <Text style={styles.modalItemText}>{Moment(e).format("ddd, MMM D, YYYY HH:mm")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                let newState = this.props.state;
                                newState.savedDates = newState.savedDates.filter(d=>e!==d);
                                this.props.updateState(newState);
                            }}>
                            <Text style={[styles.modalItemText,styles.modalItemButton]}>delete</Text>
                            </TouchableOpacity>
                            </View>
                        )}
                </ScrollView>
            </View>
        )
    }
}
