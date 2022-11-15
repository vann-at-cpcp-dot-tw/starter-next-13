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
import styles from 'src/components/styles/index.module.sass'

const { Lightbox } = components

function Footer({forwardRef, ...props}){
  return (<Suspense fallback={null}>
    <footer ref={forwardRef}></footer>
  </Suspense>)
}

export default Footer