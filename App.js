import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World!</Text>
//     </View>
//   );
// }

export default class Game extends Component {
  state={
    secret:0,
    input:'',
    feedback:''
  }

  //function to pick random number
  generateRandon(){
    return Math.round(Math.random()*100)
  }

  //function to initialise game
  init(){
    const secretNumber = this.generateRandon()
    this.setState({secret: secretNumber})
  }

  //lifecycle component
  componentDidMount(){
    this.init()
  }

  updateInput=(value)=>{this.setState({input:value})}

  checkGuess =()=>{
    const userGuess = parseInt(this.state.input);
    const secretNumber = this.state.secret;
    if (userGuess == secretNumber){
      this.setState({feedback:'Correct! The number is: ' + secretNumber})
      return
    }
    if (userGuess < secretNumber){
      this.setState({feedback:'The number is higher than ' + userGuess})
      return
    }
    if (userGuess > secretNumber){
      this.setState({feedback:'The number is lower than ' + userGuess})
      return
    }
  }

  render(){
    return(
      <View style={StyleSheet.container}>
        <Text>Guess my number</Text>
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={this.updateInput}></TextInput>
        <TouchableHighlight style={styles.button} underlayColor='white' onPress={this.checkGuess}>
          <Text>Submit</Text>
        </TouchableHighlight>
        <Text>{this.state.feedback}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width:200,
    padding:10,
    backgroundColor:'lightblue',
    marginTop:20,
    alignItems:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#ff33ff',
    fontSize: 32
  },
  input:{
    backgroundColor: '#ffffff'
  }
});
