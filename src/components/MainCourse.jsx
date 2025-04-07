import React from 'react'
import Menu1 from './Menu1'
import Menu2 from './Menu2'
import { Biryani,BagaraSpecials,Breads,Rice,MealBox,FamilyPack } from './MenuData'
const MainCourse = () => {
    const Data=[Biryani,BagaraSpecials,Breads,Rice,MealBox,FamilyPack];
    const Titles=["Biryani","Bagara Specials","Breads","Rice","Meal Box","Family Pack Combo"]
  return (
    <>
    {Data.map((item, index) => (
      index %2=== 0 ? (
        <Menu1 key={index} menu={item} title={Titles[index]} image={item[1]?.image} />
      ) : (
        <Menu2 key={index} menu={item} title={Titles[index]}  image={item[2]?.image} />
      )
    ))}
  </>
  )
}

export default MainCourse