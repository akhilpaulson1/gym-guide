import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import gymHero from "@/assets/gym-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gymHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fitness-dark/80 to-fitness-dark/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Start Your 
          <span className="bg-gradient-to-r from-fitness-blue to-fitness-green bg-clip-text text-transparent">
            {" "}Fitness Journey
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Your complete guide to getting started at the gym. Simple, practical advice for college students taking their first steps into fitness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-fitness-dark px-8 py-3 text-lg"
            onClick={() => document.getElementById('workouts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Workouts
          </Button>
        </div>
        
        <div className="mt-16">
          <ArrowDown 
            className="h-8 w-8 mx-auto animate-bounce cursor-pointer text-white/80 hover:text-white transition-colors"
            onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;