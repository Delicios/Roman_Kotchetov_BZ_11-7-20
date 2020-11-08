import React, { Fragment } from 'react'
import { Modal, Checkout } from 'components'

const CheckoutPage = () => {
  return (
    <Fragment>
      <div>Hello Briza</div>
      <Modal onClose={()=>{console.log('Modal Closed')}} title="Umbrella Hub" closeable isOpen>
        <Checkout />
      </Modal>
    </Fragment>
  )
}

export default CheckoutPage
