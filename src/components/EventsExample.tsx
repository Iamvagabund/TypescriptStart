import React from 'react'
import { FC } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = React.useState<string>('')
  const [isDrag, setIsDrag] = React.useState<boolean>(false)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value)
  }

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('drag')
  }

  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDrag(false)
  }

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Button click</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: 200, height: 200, background: 'red'
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: 'red', marginTop: 20 }}
      >
      </div>
    </div>
  )
}

export default EventsExample