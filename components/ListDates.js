import React, { Component, Fragment } from 'react';
import {View, Text } from 'react-native';
import DisplayDate from '../components/DisplayDate';
import styles from '../styles';

export default class ListDates extends Component {
    timer = null;
    render() {
        let { birthDate, mode, displayDates } = this.props.state;
        let currentDate = new Date().getTime();
        let tense;
        if (mode === "Present") { 
            displayDates = (birthDate === "") ? [] : [currentDate]; 
            tense = "are";
            this.timer = setTimeout(()=>{this.forceUpdate()},100);
        };
        if (mode === "Past") { displayDates = displayDates.filter(d=>d<currentDate); tense = "were"; }
        if (mode === "Future") { displayDates = displayDates.filter(d=>d>currentDate); tense = "will be"; }
        return (
            <Fragment>
                {(displayDates.length < 1) 
                    ? 
                    <View style={styles.dateBox}>
                        <Text style={styles.text}>Nothing to display here</Text>
                    </View>
                    :
                    null
                }
                {displayDates.map(d=><DisplayDate key={d} state={this.props.state} displayDate={d} tense={tense} />)}
            </Fragment>
        )
    }
    componentWillUnmount = () => {
        this.timer = null;
    }
}