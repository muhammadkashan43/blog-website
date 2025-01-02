'use client'
import Image from "next/image"
import { StepCard } from "@/components/step-card"
import { useState } from "react";
export default function Page() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center space-y-4 mb-12">
        <div className="text-short-para text-gray-600 uppercase tracking-wider">
          About Us
        </div>
        <h1 className="text-heading-32 text-gray-dark md:text-heading-48 font-raleway font-bold">
          Creative Blog Writing and<br />publishing site
        </h1>
        <p className="max-w-3xl mx-auto text-gray-light">
          Lorem ipsum dolor. Exercitatio sit cupiditate in soluta molestias! Quis delectus exercita. Perferendis ipsa ex illo corporis dolore! Super voluptatum sit id tempus sit facere sit ullam provident. Perferendis ipsa ex illo one of our template collection we workplace diversity and convenience.
        </p>
      </div>

      <div className="relative aspect-[16/9] mb-16 rounded-lg overflow-hidden">
        <Image
          src="/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
          alt="Team working together"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-sm text-gray-600 uppercase tracking-wider">
            How We Work
          </h2>
          <div className="flex items-center space-x-2">
            <h3 className="text-2xl font-bold">
              I will show you how
            </h3>
            <p className="text-2xl font-bold">
              our team works
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["01", "02", "03"].map((number) => (
        <StepCard
          key={number}
          number={number}
          title={number === "01" ? "Brainstorming" : number === "02" ? "Analyzing" : "Publishing"}
          description={
            number === "01"
              ? "Using a list of words and concepts to generate as many ideas as possible. This helps develop new ideas through a process of listing, writing down ideas as they occur, and then going back to review and evaluate them."
              : number === "02"
              ? "Our team will analyze your text for spelling or grammatical errors and check for plagiarism. Based on findings, feedback and suggestions about the content's structure will be provided to you before the publish live."
              : "After completing the writing and editing process, your content will be published. You can track its performance through our analytics dashboard, which shows engagement metrics and reader feedback."
          }
          isActive={activeCard === number}
          onMouseEnter={() => setActiveCard(number)}
          onMouseLeave={() => setActiveCard(null)}
        />
      ))}
          <StepCard
            number="02"
            title="Analyzing"
            description="Our team will analyze your text for spelling or grammatical errors and check for plagiarism. Based on findings, feedback and suggestions about the content's structure will be provided to you before the publish live."
          />
          <StepCard
            number="03"
            title="News Publishing"
            description="After completing the writing and editing process, your content will be published. You can track its performance through our analytics dashboard, which shows engagement metrics and reader feedback."
          />
        </div>
      </div>
    </div>
  )
}

