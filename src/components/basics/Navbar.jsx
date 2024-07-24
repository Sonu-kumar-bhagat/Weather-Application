import React from "react";

// yaha par ham function ko bhi pass kar sakte hai "filterItem" this is a function
const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* jab bhi aap function ko call karte ho aur usame argument pass karte ho
           to use arrow function me pass karna 
           taki wo apne aap ko bar bar call na kare*/}
           
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
          {/* (onClick) isape click karte hi jo niche jo data hai  
        <MenuCard menuData={menuData} /> 
       isame pass ho raha, wo data change ho raha hai 
        useState  ki madad se to jo updated({menuData}) data hai
         wo hame sirf dikhayi de raha hai */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
