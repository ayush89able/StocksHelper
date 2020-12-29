import React from 'react'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import Heading from '@tds/core-heading'
import FlexGrid from '@tds/core-flex-grid'
import { useSelector } from 'react-redux'

const StocksData = () => {
  const { Row, Col } = FlexGrid
  const stockData = useSelector(state => state.recentStock)

  return (
    <Row>
      <Col>
        <Box between={4} vertical={2} horizontal={4}>
          <Heading level='h2'>Recently Brought Stock</Heading>
          <Paragraph>Name of Stock : {stockData.nameOfStock}</Paragraph>
          <Paragraph>Cost per Unit : {stockData.costPerUnit}</Paragraph>
          <Paragraph>Number of Units : {stockData.numberOfunits}</Paragraph>
          <Paragraph>Date : {stockData.date}</Paragraph>
          <Paragraph>Amount : {stockData.amount}</Paragraph>
          <Paragraph>Tax : {stockData.tax}</Paragraph>
          <Paragraph>Total Paid Amount : {stockData.totalAmount}</Paragraph>
        </Box>
      </Col>
    </Row>
  )
}
export default StocksData
