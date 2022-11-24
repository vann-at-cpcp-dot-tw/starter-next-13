// 新增物件原型 replaceAll 方法 (支援舊手機)
if (!String.prototype.replaceAll){
  String.prototype.replaceAll = function(str, newStr){

    function escapeRegExp(string){
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }

    return this.replace(new RegExp(escapeRegExp(str), 'g'), newStr)
  }
}

import { Suspense, forwardRef, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'

// routes
import { routes } from 'src/routes'
import { useRouter } from 'next/router'
import Router from 'next/router'
import Head from 'next/head'

// store
import { useStore } from 'src/store'


// styles
import 'src/styles/main.sass'
import 'src/styles/tailwind.css'


function App(props){
  const store = useStore()
  const router = useRouter()

  const { Component, globalProps } = props

  return <>
    <Head>
      <title></title>
    </Head>
    <Component {...globalProps} />
  </>
}

// App.getInitialProps = async (ctx)=>{
//   return {
//     globalProps: {

//     }
//   }
// }

export default App