import { Suspense, useState, useEffect, useMemo, useCallback } from 'react'

// routes
import { routes } from 'src/routes'

// store
import { useStore } from 'src/store'

// use
import { useWindowSize } from 'react-use'

// methods & components
import components from 'src/components'
import { isEmpty } from 'src/helpers'

// styles
// import styles from 'src/components/styles/index.module.sass'

function RatioArea(props){

  return (
    <div className="ratioArea relative w-full">
      <div className="fill pointer-events-none relative" style={{
        width: '100%',
        paddingBottom: `${props.ratio}%`
      }}></div>
      { props.children }
    </div>
  )
}


export default RatioArea