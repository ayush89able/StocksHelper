import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Button from '@tds/core-button'
import Box from '@tds/core-box'
import Spinner from '@tds/core-spinner'
import Strong from '@tds/core-strong'
import FlexGrid from '@tds/core-flex-grid'
const Stocks = props => {

  const [load, setLoad] = useState(true)
  const stocks = useSelector(state => state.stocks)

  const loadStocks = () => {
    refreshStocks()
  }

  const refreshStocks = () => {
    if (load) {
      setLoad(false)
      setTimeout(() => {
        setLoad(true)
      }, 1500)
    }
    else {
      setLoad(true)
    }
  }

  const onSell = (stockId) => {
    const soldStock = stocks.find(item => item.id === stockId)
    const soldStockIndex = stocks.indexOf(soldStock);
    stocks.splice(soldStockIndex, 1)
    refreshStocks()
  }

  const { Row, Col } = FlexGrid

  return (
    <>
      <Box between={4} vertical={2} horizontal={4}>
        <Heading level='h2'>Stocks Brought</Heading>
        <Button onClick={loadStocks}>Load Stocks</Button>
      </Box>
      {load ?
        (
          stocks.length === 0 ?
            (
              <Box vertical={2} horizontal={4}>
                <Paragraph align="center"><Strong>No stocks in Account Refresh if any new stock is brought few minutes back</Strong></Paragraph>
              </Box>
            )
            :
            (
              stocks.map(stockData => (
                <Box between={4} vertical={2} horizontal={4}>
                  <Paragraph><Strong>Name of Stock : {stockData.nameOfStock}</Strong></Paragraph>
                  <Paragraph>Cost per Unit : {stockData.costPerUnit}</Paragraph>
                  <Paragraph>Number of Units : {stockData.numberOfunits}</Paragraph>
                  <Paragraph>Date : {stockData.date}</Paragraph>
                  <Paragraph>Amount : {stockData.amount}</Paragraph>
                  <Paragraph>Tax : {stockData.tax}</Paragraph>
                  <Paragraph>Total Paid Amount : {stockData.totalAmount}</Paragraph>
                  <Row>
                    <Col>
                    </Col>
                    <Col>
                      <Button variant="secondary" onClick={() => onSell(stockData.id)}>Sell</Button>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </Box>
              ))
            )

        )
        :
        (
          <Spinner spinning label="Loading Stocks" />
        )
      }
    </>
  )
}
export default Stocks
