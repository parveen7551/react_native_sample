import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, View, Image} from 'react-native';
import ButtonExample from './Components/Button'


class TextExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputText : ''
        }
    }
    setInputText = (text) => {
        this.setState({text:text})
    }

    render() {
        return (
            <View style={{padding:40}}>
                <TextInput
                    style={{height:90}}
                    placeholder = 'Enter text here...'
                    onChangeText={this.setInputText}
                />
                <Text style={{padding:10,fontSize:40}}>
                    {
                        this.state.text
                    }
                </Text>
            </View>
        )
    }
}


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
    setInterval(() => {
      this.setState(previousState => {
        return {
          isVisible : !previousState.isVisible
        };
      });
    },1000);
  }

  render() {
    let display = this.state.isVisible ? this.props.name : ''
    return (
      <Text style={styles.bigRed}> {display} </Text>
    )
  }
}

export default class BlinkApp extends Component {
    render() {
      return (
        <View style={{alignItems: 'center', marginTop:100}}>

            <TextExample />
            <ButtonExample />
            <Blink name="parveen" />
        </View>
      )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigRed: {
        color: 'red',
        fontSize: 30
    }
});
