import React, { useState } from 'react'
import FlexGrid from '@tds/core-flex-grid'
import Input from '@tds/core-input'
import Box from '@tds/core-box'
import Tooltip from '@tds/core-tooltip'
import Button from '@tds/core-button'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Strong from '@tds/core-strong'
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { useDispatch } from 'react-redux'
import AddStock from '../redux/actions/AddStockAction'
import ChangeRecentAddedStock from '../redux/actions/ChangeRecentAddedStockAction'

import moment from 'moment'
function Form(props) {

  const [state, setState] = useState({
    nameOfStock: undefined,
    costPerUnit: undefined,
    numberOfunits: undefined,
    date: moment(),
    amount: undefined,
    tax: undefined,
    totalAmount: undefined
  })

  const dispatch = useDispatch()

  const changeHander = (e) => {
    if (e.target.name === 'costPerUnit' || e.target.name === 'numberOfunits') {
      setState({
        ...state,
        [e.target.name]: Number(e.target.value)
      })
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  }

  const calculate = () => {
    const sum = state.numberOfunits * state.costPerUnit
    const taxAmount = ((0.3 / 100) * sum)
    const totalSumAmount = sum + taxAmount
    setState({
      ...state,
      amount: sum,
      tax: taxAmount,
      totalAmount: totalSumAmount
    })
  }

  const clearForm = () => {
    setState({
      nameOfStock: '',
      costPerUnit: '',
      numberOfunits: '',
      amount: '',
      tax: '',
      totalAmount: ''
    })
  }

  const submit = () => {
    const stock = {
      ...state,
      id: Date.now()
    }
    dispatch(AddStock(stock))
    dispatch(ChangeRecentAddedStock(stock))
    clearForm()
  }

  const today = moment();
  const disableFutureDt = date => {
    return date.isBefore(today)
  }

  const { Row, Col } = FlexGrid

  return (
    <Box between={4} vertical={2} horizontal={4}>
      <Row>
        <Col>
          <Heading level='h2'>Add Brought Stock</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label="Name of Stock" type="text" name="nameOfStock"
            value={state.nameOfStock} onChange={(e) => changeHander(e)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label="Cost per Unit" type="number" name="costPerUnit"
            value={state.costPerUnit} onChange={(e) => changeHander(e)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label="Number of Units" type="text" name="numberOfunits"
            value={state.numberOfunits} onChange={(e) => changeHander(e)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Box vertical={2}>
            <Paragraph size='medium'><Strong>Date</Strong></Paragraph>
          </Box>
          <DatePicker
            inputProps={{
              style: {
                width: "100%",
                borderColor: "#54595f",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "4px",
                minHeight: "3rem",
                maxHeight: "3rem"
              }
            }}
            value={state.date}
            dateFormat="DD-MM-YYYY"
            timeFormat="hh:mm A"
            onChange={date => setState({ ...state, date })}
            isValidDate={disableFutureDt}
            closeOnTab="true"
            closeOnSelect="true"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Box horizontal={2}>
            <Button variant='secondary'
              onClick={calculate}>Calculate</Button>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label="Amount" type="number" name="amount"
            value={state.amount}
            tooltip={
              <Tooltip copy="en">
                This is Number of units X cost of one unit
           </Tooltip>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label="Tax" type="number" name="tax"
            value={state.tax}
            tooltip={
              <Tooltip copy="en">
                Generally Tax is 0.3% of the Amount
           </Tooltip>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label="Total Paid Amount" type="number" name="totalAmount"
            value={state.totalAmount} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Box horizontal={2}>
            <Button variant='secondary' onClick={clearForm}>Clear</Button>
          </Box>
        </Col>
        <Col>
          <Box horizontal={2}>
            <Button variant='primary' onClick={submit}>Submit</Button>
          </Box>
        </Col>
      </Row>
    </Box>
  )
}
export default Form

//
