import React from "react";

//yaha par jo data le rahe jis tarah se parmater se aur jo parameter ka jo naam hai wo naam same hona chiye artibute ka
// this is from Restaurant.jss <MenuCard 1.menuData={2.menuData} /> jo 1.menuData hai wo atribute hai jo same hona chahiye ({ menuData }) .
const MenuCard = ({ menuData }) => {

  return (
    <>
      <section className="main-card--cointainer">
        {/* map method use hota hai array me aur isak pahal argument array ka current element leta hai
         aur jitan element array me hai utna ke liye map function chalta hai */}

         {/* yaha par ek baar me ek element ko return kar raha hai map method  */}
         {/* map ka jo function hai jo ham map me pass karte hai wo bhi retun kar raha hai element ko at a time it returnsingle elements */}
         {/* like this :-  {menuData.map((curElem) => {return ()} */}
         {/* map function jab bhi use karte hai to hame ek key  pass karna hota hai */}
        {menuData.map((curElem) => {
          // this is distaructuring karna hota hai
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;