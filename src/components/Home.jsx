import React from 'react';
import Hero from './Hero.jsx';
import Card from './Card.jsx';

function Home() {
    return (
        <div className="flex flex-col items-center">
            <Hero />
            
            <div id="pricing" className="w-[95%] max-w-7xl mx-auto my-20 font-['Candara']">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-black mb-4">Choose Your Fitness Journey</h2>
                    <p className="text-gray-600">Upgrade your plan to unlock personalized coaching and advanced tracking.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-stretch">
                    
                    <Card 
                        title="Basic Plan"
                        price="₹0"
                        isPopular={false}
                        buttonText="Start Free"
                        features={[
                            { name: "Access to basic workouts", included: true },
                            { name: "Macro & calorie tracking", included: true },
                            { name: "Personalized diet plans", included: false },
                            { name: "Progress analytics", included: false },
                            { name: "1-on-1 personal coaching", included: false }
                        ]}
                    />

                    <Card 
                        title="Pro Plan"
                        price="₹999"
                        isPopular={true}
                        buttonText="Get Pro"
                        features={[
                            { name: "Access to basic workouts", included: true },
                            { name: "Macro & calorie tracking", included: true },
                            { name: "Personalized diet plans", included: true },
                            { name: "Progress analytics", included: true },
                            { name: "1-on-1 personal coaching", included: false }
                        ]}
                    />

                    <Card 
                        title="Ultimate Plan"
                        price="₹1,999"
                        isPopular={false}
                        buttonText="Go Ultimate"
                        features={[
                            { name: "Access to basic workouts", included: true },
                            { name: "Macro & calorie tracking", included: true },
                            { name: "Personalized diet plans", included: true },
                            { name: "Progress analytics", included: true },
                            { name: "1-on-1 personal coaching", included: true }
                        ]}
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;