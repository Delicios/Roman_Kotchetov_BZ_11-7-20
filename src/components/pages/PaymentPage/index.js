import React, { Fragment } from 'react'
import { Modal, Payment } from 'components'

const PaymentPage = () => {
  return (
    <Fragment>
      <Modal onClose={()=>{console.log('Modal Closed')}} closeable isOpen>
        <Payment />
      </Modal>
    </Fragment>
  )
}

export default PaymentPage
