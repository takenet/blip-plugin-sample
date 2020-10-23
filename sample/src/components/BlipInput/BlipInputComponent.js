import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { BlipInput } from 'blip-toolkit'

export const BlipInputComponent = (props) => {
  const wrapper = useRef(undefined)
  const [instance] = useState(new BlipInput(props))

  useEffect(() => {
    if (instance) {
      const element = instance.render(props)
      wrapper.current.appendChild(element)
    }
  })

  return <div ref={wrapper} className={props.className} />
}

BlipInputComponent.propTypes = {
  className: PropTypes.string,
}
