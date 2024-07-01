import React from 'react'
import Button from './Button'

const buttonList = [
  "All", "Music", "Mixes", "Live", "Recently Uploaded", "Watched", "New to you"
];

const ButtonList = () => {
  return (
    <div className='flex'>
      {/* we are using index as key here since we want to keep it simple,
       but in real world apps, never use indexes as keys */}
        {buttonList.map((button,i)=>(<Button name={button} key={i}/>))}
      {/* <Button/> */}
    </div>
  )
}

export default ButtonList