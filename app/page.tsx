import React from 'react'
// import { Button } from "@/components/ui/button";
import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';

const Page = () => {
    return (
        <main className="text-2xl underline">

            <h1 className='text-2xl underline'>Popular Companions</h1>

            <section className='home-section'>
                <CompanionCard
                    id="123"
                    name="Neura the Brainy explorer"
                    topic="Neural Network"
                    subject="Science"
                    duration={45}
                    color="#ffda6e"

                />
                <CompanionCard
                    id="1213"
                    name="Neura the Brainy explorer"
                    topic="Neural Network"
                    subject="Maths"
                    duration={30}
                    color="#e5d0ff"
                />
                <CompanionCard
                    id="1123"
                    name="Neura the Brainy explorer"
                    topic="Neural Network"
                    subject="English Literature"
                    duration={45}
                    color="#ffda6e"
                />
                {/* <CompanionCard /> */}
                {/* <CompanionCard /> */}
            </section>

            <section className='home-section'>
                <CompanionsList 
         
                <CTA />
            </section>


        </main>

    )
}

export default Page