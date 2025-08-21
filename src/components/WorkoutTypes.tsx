import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Activity, Flame } from "lucide-react";

const WorkoutTypes = () => {
  const workouts = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Strength Training",
      description: "Build muscle and increase strength with resistance exercises.",
      benefits: ["Builds muscle mass", "Increases metabolism", "Improves bone density"],
      examples: ["Push-ups", "Squats", "Deadlifts", "Bench press"],
      difficulty: "Beginner-Friendly",
      time: "45-60 min"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Cardio",
      description: "Improve cardiovascular health and burn calories efficiently.",
      benefits: ["Burns calories", "Improves heart health", "Boosts endurance"],
      examples: ["Treadmill", "Cycling", "Rowing", "Elliptical"],
      difficulty: "Easy Start",
      time: "20-45 min"
    },
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "Functional Training",
      description: "Movement patterns that help with daily activities and sports.",
      benefits: ["Improves mobility", "Better balance", "Injury prevention"],
      examples: ["Lunges", "Planks", "Burpees", "Mountain climbers"],
      difficulty: "Moderate",
      time: "30-45 min"
    },
    {
      icon: <Flame className="h-8 w-8 text-accent" />,
      title: "HIIT",
      description: "High-intensity intervals for maximum results in minimal time.",
      benefits: ["Time efficient", "Burns fat", "Improves conditioning"],
      examples: ["Sprint intervals", "Circuit training", "Tabata", "Battle ropes"],
      difficulty: "Challenging",
      time: "15-30 min"
    }
  ];

  return (
    <section id="workouts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Types of Workouts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover different workout styles and find what works best for your goals and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workouts.map((workout, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                  {workout.icon}
                </div>
                <CardTitle className="text-xl mb-2">{workout.title}</CardTitle>
                <CardDescription className="text-sm">
                  {workout.description}
                </CardDescription>
                <div className="flex justify-center space-x-2 mt-3">
                  <Badge variant="secondary" className="text-xs">
                    {workout.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {workout.time}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2 text-foreground">Benefits:</h4>
                  <ul className="space-y-1">
                    {workout.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-muted-foreground flex items-center space-x-1">
                        <span>•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 text-foreground">Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {workout.examples.map((example, exampleIndex) => (
                      <Badge key={exampleIndex} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutTypes;