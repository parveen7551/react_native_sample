import React, {Component} from 'react';
import {Alert,Button, Text, View, Image} from 'react-native';

export default class ButtonExample extends  Component{

    constructor (props) {
        super(props)
    }
    onButtonTap  = () => {
        Alert.alert('I am Tapped')
    }
    render () {
        return (
            <Button
               title="Tap here"
               onPress = {this.onButtonTap}
            />
        )
    }
}