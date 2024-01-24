import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CalculatorPage extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
    };
  }

  addToDisplay = (value) => {
    this.setState((prevState) => ({
      display: prevState.display + value,
    }));
  };

  clearDisplay = () => {
    this.setState({
      display: '',
    });
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.display);
      this.setState({
        display: String(result),
      });
    } catch (error) {
      this.setState({
        display: 'Error',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <View style={styles.buttons}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('1')}
            >
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('2')}
            >
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('3')}
            >
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('+')}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('4')}
            >
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('5')}
            >
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('6')}
            >
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('-')}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('7')}
            >
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('8')}
            >
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('9')}
            >
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('*')}
            >
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('0')}
            >
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('.')}
            >
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.calculateResult}
            >
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addToDisplay('/')}
            >
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={this.clearDisplay}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
    borderRadius: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
  clearButton: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculateButton: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
    borderRadius: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalculatorPage;
