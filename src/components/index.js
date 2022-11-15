import dynamic from 'next/dynamic'
import { toCamelCase } from 'src/helpers'

const paths = [
  'Layout/General',
  'Footer',
  'Header',
  'Lightbox',
  'LightboxClose',
  'Portal',
  'RatioArea',
  'Template/Community'
]

const components = paths.reduce((acc, path, index)=>{
  const name = toCamelCase(path.replaceAll('.jsx', ''), '/', true)
  return {
    ...acc,
    [name]:  dynamic(()=>import(`src/components/${path}.jsx`), { ssr: false })
  }
}, {})

export default components
