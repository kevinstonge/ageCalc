import React, { Component } from 'react';
import {View, Text, } from 'react-native';
import styles from '../styles';

export default class DisplayDate extends Component {
    generateDisplayObject = () => {
        let {birthDate, numbers, maxDateWindow, rarity, multiples} = this.props.state;
        let displayDate = this.props.displayDate;
        let displayObject = Object.keys(multiples).map((e,i)=>{
            let seconds = (new Date(displayDate).getTime() - new Date(birthDate).getTime()) / multiples[e];
            let precision = 1;
            if (e === "seconds" || e === "minutes") { precision = 0 }
            if (e === "years") { precision = 2 }
            return ({
                label: e,
                value: seconds,
                displayValue: parseFloat(seconds.toFixed(precision)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                style: (()=>{
                    let style = [styles.dateItem];
                    numbers.forEach(n => {
                        if (seconds%n === 0 && maxDateWindow/n/multiples[e] < rarity) { style.push(styles.dateItemHighlight) }
                    });
                    return style;
                })(),
            })
        });
        return displayObject;
    }
    render() {
        let displayObject = this.generateDisplayObject();
        return (
            <View style={styles.dateBox}>
                <Text style={styles.dateHeading}>On {new Date(this.props.displayDate).toString()} you {this.props.tense}:</Text>
                {displayObject.map(e=>
                    <Text key={e.label} style={e.style}>{e.displayValue} {e.label} old</Text>)
                }
            </View>
        )
    }
}