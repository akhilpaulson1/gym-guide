import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-background text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          FitStart
        </h1>
        <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
          Simple fitness guide for anyone wanting to start working out.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            onClick={() => document.getElementById('workouts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Workouts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;