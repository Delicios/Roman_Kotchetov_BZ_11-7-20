import React, { Fragment } from 'react'
import { Modal, GettingStarted } from 'components'

const HomePage = () => {
  return (
    <Fragment>
      <div>Hello Briza</div>
      <Modal onClose={()=>{console.log('Modal Closed')}} closeable isOpen>
        <GettingStarted />
      </Modal>
    </Fragment>
  )
}

export default HomePage
