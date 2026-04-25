function intoCelsius() {
    const input = parseFloat(document.getElementById('inputTemp').value)
    const fromUnit = document.getElementById('fromUnit').value

    if (fromUnit === 'fahrenheit') {
        return (input - 32) * 5/9
    } else if (fromUnit === 'kelvin') {
        return input - 273.15 
    } else {
        return input
    }
}

function fromCelsius(celsius) {
    const toUnit = document.getElementById('toUnit').value

    if (toUnit === 'fahrenheit') {
        return (celsius * 9/5) + 32
    } else if (toUnit === 'kelvin') {
        return celsius + 273.15
    } else {
        return celsius
    }
}

function convert() {
  const input = parseFloat(document.getElementById('inputTemp').value)
  const fromUnit = document.getElementById('fromUnit').value
  const toUnit = document.getElementById('toUnit').value

  if (!fromUnit || !toUnit) {
    document.getElementById('result').textContent = 'Please choose both units'
    return
  }

  if (isNaN(input)) {
    document.getElementById('result').textContent = 'Please enter a temperature'
    return
  }

  const celsius = intoCelsius()
    if (celsius < -273.15) {
      document.getElementById('result').textContent = 'Below absolute zero, not possible!'

      return}

  const result = fromCelsius(celsius)
  const toUnit = document.getElementById('toUnit').value
  const unitLabel = { celsius: '°C', fahrenheit: '°F', kelvin: 'K' }
  document.getElementById('result').textContent = `${parseFloat(result.toFixed(4))} ${unitLabel[toUnit]}`
  }