import CTASection from '@/components/CTASection';
import SingleFeatureMarquee from '@/components/SingleFeatureMarquee';
import StickyCards from '@/components/StickyCards';
import { Waves } from '@/components/waves-background';
import {
  BarChart3,
  Cloud,
  Code,
  Cpu,
  Crosshair,
  GitMerge,
  Repeat,
  Timer,
  Users,
  Zap
} from 'lucide-react';

// Top 7 features to display in the marquee with improved icons
const topFeatures = [
  {
    icon: <Crosshair className="h-8 w-8 text-primary" />,
    title: "Skill Gap Analysis",
    description:
      "Identify specific areas where you need to focus more attention based on your performance.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "AI-Powered Generation",
    description:
      "Each quiz is uniquely created by advanced AI based on your preferences and skill level.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Performance Analytics",
    description:
      "Track your progress over time with detailed analytics on your strengths and areas for improvement.",
  },
  {
    icon: <Timer className="h-8 w-8 text-primary" />,
    title: "Time-Based Challenges",
    description:
      "Practice under timed conditions to improve your speed and accuracy for technical interviews.",
  },
  {
    icon: <GitMerge className="h-8 w-8 text-primary" />,
    title: "Difficulty Progression",
    description:
      "Start with basics and gradually advance to more complex concepts as you improve.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Cloud Synchronization",
    description:
      "Your progress is saved and synced across all your devices for seamless learning experience.",
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: "Continuous Learning",
    description:
      "Access an ever-expanding library of questions that evolves with the latest programming trends.",
  },
];

const cardsData = [
  {
    id: "1",
    title: "Cloud Synchronization",
    description:
      "Your progress is saved and synced across all your devices for a seamless learning experience.",
    backgroundColor: "#111111", // Darker version of black (#000)
    textColor: "#ffffff",
    icon: <Cloud className="mx-auto mb-6" size={40} />,
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
    icon: <Repeat className="mx-auto mb-6" size={40} />,
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
    <>
      <div className="w-full">
        <StickyCards cards={cardsData} />
      </div>
      
      <div className="w-full relative">
        <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0">
            <Waves
              lineColor={"rgba(255, 255, 255, 0.3"}
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>
        </div>
        <div className="container mx-auto px-4  md:py-24 py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-8">Our Top Features</h1>
          <p className="text-base md:text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            Discover what makes our AI-powered quiz platform the best choice for your learning journey
          </p>
          
          {/* Feature Marquee */}
          <div className="w-full overflow-hidden">
            <SingleFeatureMarquee features={topFeatures} speed={10} />
          </div>
        </div>
     
        <CTASection />
     
      </div>
      
    </>
  )
}

export default Page;