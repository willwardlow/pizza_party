import React from 'react'

export default function Filter(props) {
  return (
    <form>
      <input
        className='pizza-filter'
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name='filter'
        placeholder='Search'
        type='text'
        autoFocus
        />
   </form>
  )
}
