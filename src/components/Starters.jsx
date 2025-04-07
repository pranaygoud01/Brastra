import React from 'react';
import { VegStaters, NonVegStarters } from './MenuData';
import Menu1 from "./Menu1"; // Assuming Menu1.jsx is now Menu1.js or Menu1
import Menu2 from './Menu2';

const Starters = () => {
  const Data = [VegStaters, NonVegStarters];
  return (
    <>
      {Data.map((item, index) => (
        index === 0 ? (
          <Menu1 key={index} menu={item} title="Veg Starters" image={item[1]?.image} />
        ) : (
          <Menu2 key={index} menu={item} title="Non Veg Starters" image={item[4]?.image} />
        )
      ))}
    </>
  );
};

export default Starters;