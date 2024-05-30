import React from 'react'
import Button from './Button'

const buttonList = [
  "All", "Music", "Mixes", "Live", "Recently Uploaded", "Watched", "New to you"
];

const ButtonList = () => {
  return (
    <div className='flex'>
        {buttonList.map(button=>(<Button name={button}/>))}
      {/* <Button/> */}
    </div>
  )
}

export default ButtonList