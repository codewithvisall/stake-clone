"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: React.ReactNode
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "What is Stake?",
      answer: (
        <div className="space-y-4">
          <p>
            A leader in the online gambling industry since 2017, Stake.com offers a wide range of online casino and
            sports betting options and operates in 15 languages worldwide.
          </p>
          <p>
            With a strong reputation and a stable platform, <strong>Stake Casino</strong> supports a variety of betting
            options on online slots, <strong>Stake Originals</strong>, and live casino games in local currencies and
            cryptocurrencies from around the world. <strong>Stake Sportsbook</strong> offers competitive odds on a
            variety of <strong>eSport leagues</strong> and major sporting events.
          </p>
          <p>
            Stake regularly hosts various <strong>betting bonus events and promotions</strong>, and you can experience
            exclusive <strong>VIP Club</strong> privileges through easy-to-use{" "}
            <strong>deposit deposit procedures</strong> on the licensed platform.
          </p>
        </div>
      ),
    },
    {
      question: "Is Stake licensed?",
      answer: (
        <p>
          Yes, Stake is fully licensed and regulated by the Curaçao Gaming Authority under license number 8048/JAZ. This
          ensures that the platform adheres to strict standards of fair play, security, and responsible gambling
          practices.
        </p>
      ),
    },
    {
      question: "Is betting on Stake safe?",
      answer: (
        <div className="space-y-4">
          <p>
            Stake employs industry-leading security measures to protect user data and funds. The platform uses SSL
            encryption for all transactions and has a proven track record of fair gaming.
          </p>
          <p>
            Additionally, Stake is committed to responsible gambling and provides tools for users to set deposit limits,
            take time-outs, or self-exclude if needed.
          </p>
        </div>
      ),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="text-gray-400" />
        <h2 className="text-xl font-medium">Still have questions?</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#15232D] rounded-lg overflow-hidden">
            <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => toggleFAQ(index)}>
              <h3 className="font-medium">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <div
              className={cn(
                "px-6 transition-all duration-300 overflow-hidden",
                openIndex === index ? "pb-6 max-h-96" : "max-h-0",
              )}
            >
              <div className="text-gray-300">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

