import { Suspense, useState, useEffect, useLayoutEffect, useRef, useReducer, forwardRef, useMemo, useCallback } from 'react'

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

import imagesLoaded from 'imagesloaded'

const { Header, Footer } = components

function General(props){
  const headerRef = useRef()
  const footerRef = useRef()
  const wrapperRef = useRef()
  const viewport = useWindowSize()
  const [state, setState] = useReducer((state, updateState)=>({...state, ...updateState}), {
    // init state
    headerHeight: 0,
    footerHeight: 0,
  })

  useEffect(()=>{
    props?.onUpdate?.(state)
  },  [state.headerHeight, state.footerHeight])

  useEffect(()=>{
    if( wrapperRef.current ){
      imagesLoaded(wrapperRef.current, ()=>{
        setState({
          headerHeight: headerRef.current?.clientHeight || 0,
          footerHeight: footerRef.current?.clientHeight || 0,
        })
      })
    }
  }, [wrapperRef.current, viewport.width])


  return (<Suspense fallback={null}>

    <div ref={wrapperRef}>

      <div className="w-fll fixed left-0 top-0">
        <Header forwardRef={headerRef}  />
      </div>

      <main
      style={{
        paddingTop: `${state.headerHeight}px`,
        minHeight:  `${viewport.height - state.footerHeight}px`,
        ...(props?.styles?.main || {})
      }}>
        { props.children }
      </main>

      <Footer
      forwardRef={footerRef}
      style={{
        ...(props?.styles?.footer || {})
      }} />
    </div>

  </Suspense>)
}

export default General