import Hero from "../components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import CourseSection from "@/components/home/CourseSection";
import LearningCategoriesSection from "@/components/home/LearningCategoriesSection";
import ProfessionalGrowthSection from "@/components/home/ProfessionalGrowthSection";
import CreatorCTA from "@/components/CreatorCTA/CreatorCTA";
import CommunitySection from "@/components/home/CommunitySection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <CourseSection />
      <LearningCategoriesSection />
      <ProfessionalGrowthSection />
      <CreatorCTA />
      <CommunitySection />
      <Footer />
    </>
  );
}
