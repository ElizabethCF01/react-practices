import React from 'react'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const AlertResponse = ({ alertR, setAlertR }) => {

  return (
    <Alert variant={alertR.variant} >
      <p>{alertR.text}</p>
      <div className="d-flex justify-content-end">
        <Button onClick={() => setAlertR({ show: false })} variant={`outline-${alertR.variant}`}>
          Close
        </Button>
      </div>
    </Alert>
  )
}
export default AlertResponse