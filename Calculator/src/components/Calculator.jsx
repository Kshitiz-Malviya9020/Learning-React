import React from 'react'
import Screen from './Screen'
import Buttons from './Buttons'

const Calculator = () => (
  <div className="bg-primary bg-gradient bg-opacity-75 rounded-4 shadow p-4" style={{ maxWidth: '350px', minWidth: '320px' }}>
    <Screen />
    <Buttons />
  </div>
)

export default Calculator
