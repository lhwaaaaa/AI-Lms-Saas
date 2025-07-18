import React from 'react'
import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';

import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

const Page = async () => {

    const { userId } = await auth();
    const companions = await getAllCompanions({ limit: 3 })
    const recentSessionsCompanions = await getRecentSessions(10)

    return (
        <main className="text-2xl underline">

            <h1 className='text-2xl underline'>Popular Companions</h1>

            <section className='home-section'>
                {companions.map((companion) => (

                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>

            <section className='home-section'>
                {userId ? <> <CompanionsList
                    title="Recently completed sessions"
                    classNames="w-2/3 max-lg:w-full"
                    companions={recentSessionsCompanions}
                />
                </> : <>
                    <div className="rounded-2xl bg-white shadow-md p-6 text-center space-y-2 max-w-xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-800">Sign In Required</h2>
                        <p className="text-gray-600 text-sm">
                            Please{" "}
                            <Link href="/sign-in">
                                <span className="text-blue-600 font-medium hover:underline transition">sign in</span>
                            </Link>{" "}
                            or{" "}
                            <Link href="/sign-in">
                                <span className="text-blue-600 font-medium hover:underline transition">sign up</span>
                            </Link>{" "}
                            to view your recent sessions.
                        </p>
                    </div>

                </>
                }
                <CTA />
            </section>


        </main>

    )
}

export default Page