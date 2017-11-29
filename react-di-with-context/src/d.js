
import React from 'react'

const D = ({ msg }) => (
  <div className='green-thing'>
    D says {msg}
  </div>
)

D.defaultProps = {
  msg: 'NOTHING :( :( :('
}

export default D
