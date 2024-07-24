import React, { useState } from "react";
import "./Restaurant.css";
import AllMenuData from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar.jsx";
// css ko kaise use karna hai react
// normal jaise html me karte the uxi tarah se yaha par bhi kar sakte hai
// css ko as a object bhi use kar sakte hai
// css ko aise import karna hai
// import "./Restaurant.css"
// inline me do crally braket lagta hai style={{}} like this

// yaha par ham sabhi data ko API ke madad se lagenge
// data ko json file se lana API hi kahlata/hota hai
// data json file se get karane se pahale hame hooks ko padhana hai
//hooks state kiya hai
//usestate ka kam hai kisi bhi data ke store kar ke rkahna
// useState array ko return karta hai, jisame do elements hai.
// data ko manage karna ek liye useState hai
// yaha par jo bhi data hoga wo current data hoga ,
// use state ko use karnae ke liye use import karna jarurii hai
// rule ke according hooks means useState ko sabse top par likhan hi padta hai
// ham data ko  reapeat na kare lisake liye ham props ko use karte hai
//props ka use data pass karane ke liye karte hai from parent to child
// props se ham data ko pass karte hai jaise ki ham ksis function me argument ko pass karte hai
//  atrributes ka naam aur parameter ka naam same hona chihiye

// <MenuCard 1.menuData={2.menuData} /> jo 1.menuData hai wo atribute hai aur 2.menuData satate ka data hai current data.
// fir ham map function use kar ke ham sara data ko get kar lenge ham
//menuApi ek aaray(AllMenuData) return kar rah ahia jo ko object ka array hai.
// isaliye ham

//ek function bana rahe jo ki sare category ko get kar raha hai "new Set()" isase category repeat nahi ho raha hai
//... and [] isase sabhi data array me raha hai
// yaha array ke andar ek aur element add ho raha hai aur wo "All" hai
const uniqueList = [
  ...new Set(
    AllMenuData.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Restaurant = () => {
  const [menuData, setMenuData] = useState(AllMenuData);
  // const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(AllMenuData);
      return;
    }
    const updatedList = AllMenuData.filter((curElem) => {
      return curElem.category === category;
    });
    //yaha par setMenuData updated function hai
    setMenuData(updatedList); //isase current status ka data change kar dega
    //menuData isake andar abb updatedList wala data aa jayega.

    /*  (onClick) par click karte hi ye function call ho raha hai jise  
        useState  ki madad se to jo updated({menuData}) data hai
        wo sirf pass ho raha hai */
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList} />
      {/*<MenuCard 1.filterItem={2.filterItem} /> jo 1.filterItem hai wo atribute hai aur 2.filterItem satate ka function. */}
      <MenuCard menuData={menuData} />
      {/*<MenuCard 1.menuData={2.menuData} /> jo 1.menuData hai wo atribute hai aur 2.menuData satate ka data hai current data. */}
    </>
  );
};

export default Restaurant;
