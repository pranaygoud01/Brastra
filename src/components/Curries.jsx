import React from 'react'
import { VegCurries,NonVegCurries } from './MenuData'
import Menu1 from './Menu1'
import Menu2 from './Menu2'
const Curries = () => {
    const Data=[VegCurries,NonVegCurries]
  return (
    <>
    {Data.map((item, index) => (
      index === 0 ? (
        <Menu1 key={index} menu={item} title="Veg Curries" image={item[1]?.image} />
      ) : (
        <Menu2 key={index} menu={item} title="Non Veg Curries" image={item[4]?.image} />
      )
    ))}
  </>
  )
}

export default Curries