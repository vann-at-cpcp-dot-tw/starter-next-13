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

function __Sample(props){
  return <div></div>
}

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps(){
//   const res = await fetch('foo/bar', {
//     cache: 'no-cache',
//     headers: {
//       'Content-Type': 'application/json',
//       'Cache-Control': 'no-cache',
//     }
//   })
//   const foo = await res.json()

//   return {
//     props: {
//       foo,
//     },
//     revalidate: 60, // X 秒內重新發送 request 的話，就驗證新資料
//   }
// }

export default __Sample