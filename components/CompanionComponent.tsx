"use client"

import { cn, getSubjectColor } from "@/lib/utils"
import { vapi } from "@/lib/vapi.sdk"
import { useEffect, useState } from "react"

enum CallStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
    CONNECTING = 'CONNECTING',
}

const CompanionComponent = ({ companionId, subject, title, topic, name, userName, userImage, voice, style }: CompanionComponentProps) => {

    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
    const [isSpeaking, setIsSpeaking] = useState(false)

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE)
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED)
        const onMessage = () => { }

        const onSpeechStart = () => setIsSpeaking(true)
        const onSpeechEnd = () => setIsSpeaking(false)


        const onError = (error: Error) => console.log(error)

        vapi.on('call-start', onCallStart)
        vapi.on('call-end', onCallEnd)
        vapi.on('message', onMessage)
        vapi.on('error', onError)

    }, [])


    return (
        <section className="flex flex-col h-[70vh]">

            <section className="flex gap-8 max-sm:flex-col">

                <div className="companion-section">

                    <div className="companion-avatar" style={{ backgroundColor: getSubjectColor(subject) }}>
                        <div className={cn('absolute transition-opacity duration-1000')}></div>
                    </div>
                </div>

            </section>


        </section>
    )
}

export default CompanionComponent
