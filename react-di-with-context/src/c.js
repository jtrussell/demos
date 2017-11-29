
import React from 'react'
import { withMsg } from './msg-provider'
import D from './d'

const DWithMsg = withMsg(D)

const C = () => (
  <div className='blue-thing'>
    C
    <DWithMsg />
  </div>
)

export default C
