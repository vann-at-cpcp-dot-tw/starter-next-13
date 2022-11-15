import { Suspense, useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'

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


function Header({forwardRef, ...props}){
  return (<Suspense fallback={null}>
    <header ref={forwardRef}></header>
  </Suspense>)
}

export default Header