import React from 'react'
import './RightSideBar.css'
import Widget1 from './Widget1'
import WidgetTag from './WidgetTag'


const RightSideBar = () => {
  return (
    <aside className='right-side-bar'>
      <Widget1/>
      <WidgetTag/>
    </aside>
  )
}

export default RightSideBar