import React from 'react'
import { Text, View, StyleSheet, BackHandler, Pressable, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const PrimeiraPagina = function () {
  const [number1, setNumber1] = React.useState('');
  const [operacao, setOperacao] = React.useState('');
  const [displayNumber, setDisplayNumber] = React.useState('');
  const [calculado, setCalculado] = React.useState(false)

  //Operações
  const somar = function () {
    if (number1 != '')
      setDisplayNumber(parseFloat(number1) + parseFloat(displayNumber))

  }
  const subtrair = function () {
    if (number1 != '')
      setDisplayNumber(number1 - displayNumber)

  }
  const dividir = function () {
    if (parseFloat(displayNumber) === 0)
      setDisplayNumber('ERROR - DIV 0')
    else if (number1 != '')
      setDisplayNumber(number1 / displayNumber)

  }
  const multiplicar = function () {
    if (number1 != '')
      setDisplayNumber(number1 * displayNumber)

  }

  const calcular = function () {
    if (!calculado) {
      switch (operacao) {
        case 'soma':
          somar()
          break
        case 'subtracao':
          subtrair()
          break
        case 'multiplicacao':
          multiplicar()
          break
        case 'divisao':
          dividir()
          break
      }
    }
    setCalculado(true)
  }

  const concatenarDigito = function (digito) {
    if(calculado){
      setCalculado(false)
    }
    if (digito != '.') {
      setDisplayNumber(displayNumber + digito)
    } else if (!displayNumber.includes('.')) {
      setDisplayNumber(displayNumber + digito)
    }

  }

  const limpar = function () {
    setDisplayNumber('')
    setNumber1('')
    setCalculado(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.display}>
        <Text style={styles.text}>{displayNumber}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button} onPress={() => concatenarDigito('9')}>
            <Text style={styles.buttonText} >9</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('8')}>
            <Text style={styles.buttonText}>8</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('7')}>
            <Text style={styles.buttonText}>7</Text>
        </Pressable>
        <Pressable style={styles.symbolButton} onPress={() => { setOperacao('soma'), setNumber1(displayNumber), setDisplayNumber('') }}>
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('6')}>
            <Text style={styles.buttonText}>6</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('5')}>
            <Text style={styles.buttonText}>5</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('4')}>
            <Text style={styles.buttonText}>4</Text>
        </Pressable>
        <Pressable style={styles.symbolButton} onPress={() => { setOperacao('subtracao'), setNumber1(displayNumber), setDisplayNumber('') }}>
            <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('3')}>
            <Text style={styles.buttonText}>3</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('2')}>
            <Text style={styles.buttonText}>2</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('1')}>
            <Text style={styles.buttonText}>1</Text>
        </Pressable>
        <Pressable style={styles.symbolButton} onPress={() => { setOperacao('multiplicacao'), setNumber1(displayNumber), setDisplayNumber('') }}>
            <Text style={styles.buttonText}>x</Text>
        </Pressable>
        <Pressable style={styles.buttonCE} onPress={() => limpar()}>
            <Text style={styles.buttonTextCE}>C</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('0')}>
            <Text style={styles.buttonText}>0</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => concatenarDigito('.')}>
            <Text style={styles.buttonText}>.</Text>
        </Pressable>
        <Pressable style={styles.symbolButton} onPress={() => { setOperacao('divisao'), setNumber1(displayNumber), setDisplayNumber('') }}>
            <Text style={styles.buttonText}>÷</Text>
        </Pressable>
        <Pressable style={styles.enterButton} onPress={() => calcular()}>
            <Text style={styles.buttonText}>=</Text>
        </Pressable>
        <Pressable style={styles.buttonCE} onPress={() => setDisplayNumber('')}>
            <Text style={styles.buttonTextCE}>CE</Text>
        </Pressable>

      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 20,
  },
  display: {
    backgroundColor: '#F1F0F4',
    margin: 10,
    height: 70,
    textAlign: 'center',
    borderRadius: 10,
    width: '82%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 55,
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    flexWrap: 'wrap',
    rowGap: 15,
  },

  input: {
    backgroundColor: '#F1F0F4',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    width: '30%',
  },

  button: {
    width: 70,
    height: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F0F4',
  },

  buttonCE: {
    width: 70,
    height: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEE1E1',
  },

  enterButton: {
    width: 240,
    height: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCBEF3',
  },

  text: {
    fontSize: 50,
  },

  buttonText: {
    fontSize: 30,
  },

  buttonTextCE: {
    fontSize: 30,
    color: '#C90F0F',
  },

  symbolButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCBEF3',
  },

});

export default PrimeiraPagina;