import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
//Responsible for the title
const Header = ({title}) => {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <header className ='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick= {onClick}/>
    </header>
  )
}

Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

//CSS IN JS
// const headingStyle = { 
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header
