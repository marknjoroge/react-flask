import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1>
                Explore our exsiting events!
            </h1>
            <div className="cards__container">
                <div className="cards__container">
                    <ul className="cards__items">
                        <Carditem 
                        src="../Images/OrangeJuice.jpg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Food"
                        path='/services'
                        /> 
                         <Carditem 
                        src="../Images/nascar.jpg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Sports"
                        path='/services'
                        /> 
                        </ul>
                        <ul className="cards__items">

                         <Carditem 
                        src="../Images/surface.jpeg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Beach"
                        path='/services'
                        /> 
                         <Carditem 
                        src="../Images/yoga.jpg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Meditiation"
                        path='/services'
                        /> 
                        </ul>
                        <ul className="cards__items">
                         <Carditem 
                        src="../Images/diving.jpg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Ocean"
                        path='/services'
                        /> 
                         <Carditem 
                        src="../Images/skydiving.jpg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Sports"
                        path='/services'
                        /> 
                        </ul>
                        <ul className="cards__items">
                         <Carditem 
                        src="../Images/concert.jpeg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Entertainment"
                        path='/services'
                        /> 
                         <Carditem 
                        src="../Images/yacht.jpg"
                        text="Don't waste the change, come and eat the floridain Orange!!"
                        label="Beach"
                        path='/services'
                        /> 
                        </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
