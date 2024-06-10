import React from 'react'
import Aside from './component/Aside'
import Contents from './component/Contents'
import { DataProvider } from './context/DataProvider'


const App = () => {
  return (
    <div id='App'>
      <DataProvider>
        <Aside />
        <Contents />
      </DataProvider>
    </div>
  )
}

export default App