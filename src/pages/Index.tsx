import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GettingStarted from "@/components/GettingStarted";
import WorkoutTypes from "@/components/WorkoutTypes";
import EquipmentGuide from "@/components/EquipmentGuide";
import Tips from "@/components/Tips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <GettingStarted />
      <WorkoutTypes />
      <EquipmentGuide />
      <Tips />
      <Footer />
    </div>
  );
};

export default Index;
