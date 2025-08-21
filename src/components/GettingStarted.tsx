import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Target, Users } from "lucide-react";

const GettingStarted = () => {
  const steps = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Set Your Goals",
      description: "Define what you want to achieve - building muscle, losing weight, or staying healthy.",
      tips: ["Start with 2-3 specific goals", "Make them measurable", "Set realistic timelines"]
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Plan Your Schedule",
      description: "Find 3-4 days per week that work with your class schedule for consistent workouts.",
      tips: ["Morning workouts = less crowded gym", "Block time like you would for classes", "Start with 45-60 minute sessions"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Learn Gym Etiquette",
      description: "Basic rules to feel confident and respectful in the gym environment.",
      tips: ["Wipe down equipment after use", "Re-rack your weights", "Don't hog equipment during peak hours"]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Start Simple",
      description: "Begin with basic exercises and gradually progress as you build confidence.",
      tips: ["Master bodyweight movements first", "Learn proper form over heavy weight", "Don't compare yourself to others"]
    }
  ];

  return (
    <section id="getting-started" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Getting Started
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your first steps into the gym don't have to be intimidating. Follow these simple guidelines to start your fitness journey with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  {step.icon}
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;