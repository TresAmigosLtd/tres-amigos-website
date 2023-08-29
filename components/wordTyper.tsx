import { type, type as typeLoop } from '../utils/typical.js'
import React, { useRef, useEffect, memo } from 'react'

const WordTyper = ({ sequence, className }) => {
  const typeRef = useRef(null)

  let finalClassName = ''

  if (className) {
    finalClassName += className()
  }

  useEffect(() => {
    async function loop() {
      while (true) {
        await type(typeRef.current, ...sequence)
      }
    }
    loop()
  }, [])

  return <span className={finalClassName} ref={typeRef} />
}

export default memo(WordTyper)
