import StickyCards from '@/components/StickyCards'
import { Code, RefreshCw, Server, Users, Zap } from 'lucide-react';
import React from 'react'
const cardsData = [
  {
    id: "1",
    title: "Cloud Synchronization",
    description:
      "Your progress is saved and synced across all your devices for a seamless learning experience.",
    backgroundColor: "#111111", // Darker version of black (#000)
    textColor: "#ffffff",
    icon: <Server className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "SYNC NOW",
    shadow: "#000000", // Black for strong contrast
  },
  {
    id: "2",
    title: "Continuous Learning",
    description:
      "Access an ever-expanding library of questions that evolves with the latest programming trends.",
    backgroundColor: "#C96C2B", // Darker version of #FD9745
    textColor: "#ffffff",
    icon: <RefreshCw className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "LEARN MORE",
    shadow: "#6d2f2f", // Muted brownish red for depth
  },
  {
    id: "3",
    title: "Language-Specific Questions",
    description:
      "Get quizzes tailored to specific programming languages and frameworks of your choice.",
    backgroundColor: "#D4AF37", // Darker version of #FFDC58 (Gold-like)
    textColor: "#000000",
    icon: <Code className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "EXPLORE",
    shadow: "#7a6425", // Deeper gold/brown for contrast
  },
  {
    id: "4",
    title: "Rapid Feedback",
    description:
      "Get instant feedback on your answers with detailed explanations to improve your understanding.",
    backgroundColor: "#D44A4A", // Darker version of #ff6b6b
    textColor: "#ffffff",
    icon: <Zap className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "GET STARTED",
    shadow: "#a33636", // Darkened red for a subtle effect
  },
  {
    id: "5",
    title: "Community Challenges",
    description:
      "Compete with other learners in regular coding challenges to test your skills.",
    backgroundColor: "#6A9A24", // Darker version of #A3E636
    textColor: "#ffffff",
    icon: <Users className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "JOIN NOW",
    shadow: "#46651a", // Dark green for natural contrast
  },
];


const Page = () => {
  return (
    <div className="w-full">
      <StickyCards cards={cardsData} />
    </div>
  )
}

export default Page