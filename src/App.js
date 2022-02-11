import React from "react"
import Navbar from "./Navbar"
import data from "./data"
import Home from "./Home"
import Hero from "./Hero"
import Footer from "./Footer"

export default function App() {
    const cards = data.map(item => {
        return (
            <Home
                key={item.id}
                item={item}
            />
        )
    })        
    
            
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
            <Footer
            />
        </div>
    )
}