import React from 'react'
import { Dessert,Drinks } from './MenuData'
import Menu1 from './Menu1';
import Menu2 from './Menu2';
const Desserts = () => {
    const Data=[Dessert,Drinks];
  return (
    <>
      {Data.map((item, index) => (
        index === 0 ? (
          <Menu1 key={index} menu={item} title="Desserts" image={item[1]?.image} />
        ) : (
          <Menu2 key={index} menu={item} title="Drinks" image={item[2]?.image} />
        )
      ))}
    </>
  )
}

export default Desserts