import React from 'react'
import Hero from './Hero.jsx'
import Card from './Card.jsx'

function Home() {
    return (
        <>
            <Hero />
            <div className="w-[95%] max-w-7xl mx-auto my-12 grid grid-cols-1 md:grid-cols-3 gap-8 font-['Candara']">
                <Card
                    title="Basic Plan"
                    description="Perfect for getting started with your fitness journey."
                    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    buttonText="Start a Free Trial"
                />
                <Card
                    title="Pro Plan"
                    description="Includes personalized diet tracking and workouts."
                    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    buttonText="Go Pro!"
                />
                <Card
                    title="Ultimate Plan"
                    description="1-on-1 coaching and custom meal generation."
                    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    buttonText="Go Ultimate!"
                />
            </div>
        </>
    )
}

export default Home;