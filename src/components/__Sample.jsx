import dynamic from 'next/dynamic'

import { Suspense, forwardRef, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'

// routes
import { routes } from 'src/routes'

// store
import { useStore } from 'src/store'

// use
import { useWindowSize } from 'react-use'
import { useQuery, useMutation, useQueryClient } from 'react-query'

// methods & components
import components from 'src/components'
import { isEmpty } from 'src/helpers'

// styles
import styles from 'src/components/styles/index.module.sass'

const { LayoutGeneral, Lightbox, LightboxClose } = components


function __Sample(props, ref){
  const store = useStore()
  const viewport = useWindowSize()
  const [state, setState] = useReducer((state, updateState)=>({...state, ...updateState}), {
    // init state
  })

  return (<Suspense fallback={null}>

  </Suspense>)
}

export default __Sample