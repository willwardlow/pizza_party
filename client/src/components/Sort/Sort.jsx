import React from 'react'

export default function Sort(props) {

  const{handleSubmit, onChange} = props

  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <form className='pizza-sort' onSubmit={handleSubmit}>
      <label htmlFor='sort'> Sort By:</label>
      <select className='sort' onChange={handleChange}>
        <option disabled> -- Select Value -- </option>
        <option value='restaurant-ascending'> &nbsp;Restaurant Name, A-Z&nbsp;</option>
        <option value='restaurant-descending'> &nbsp;Restaurant Name, Z-A&nbsp;</option>
        <option value='neighborhood-ascending'>&nbsp;Neighborhood Name, A-Z&nbsp;</option>
        <option value='neighborhood-descending'>&nbsp;Neighborhood Name, Z-A&nbsp;</option>
      </select>
    </form>
  )
}
