import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Shield, Clock, Utensils, Moon, Droplets } from "lucide-react";

const Tips = () => {
  const tips = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Safety First",
      description: "Always prioritize proper form over heavy weights to prevent injuries.",
      details: [
        "Warm up for 5-10 minutes before lifting",
        "Learn exercises with bodyweight first",
        "Don't lift alone when trying new heavy exercises",
        "Listen to your body and rest when needed"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Consistency Beats Intensity",
      description: "Regular moderate workouts are better than occasional intense sessions.",
      details: [
        "Aim for 3-4 workouts per week",
        "Start with 30-45 minute sessions",
        "Track your workouts to stay motivated",
        "It's okay to have lighter days"
      ]
    },
    {
      icon: <Utensils className="h-6 w-6 text-primary" />,
      title: "Fuel Your Body",
      description: "Proper nutrition supports your fitness goals and recovery.",
      details: [
        "Eat protein within 30 minutes post-workout",
        "Stay hydrated throughout the day",
        "Don't skip meals, especially breakfast",
        "Focus on whole foods over supplements"
      ]
    },
    {
      icon: <Moon className="h-6 w-6 text-accent" />,
      title: "Recovery Matters",
      description: "Your body grows and adapts during rest, not just during workouts.",
      details: [
        "Aim for 7-9 hours of sleep",
        "Take at least one full rest day per week",
        "Do light stretching or walking on rest days",
        "Manage stress through relaxation techniques"
      ]
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Start Small",
      description: "Build habits gradually to create lasting change.",
      details: [
        "Set realistic short-term goals",
        "Celebrate small victories",
        "Don't compare yourself to others",
        "Focus on how you feel, not just how you look"
      ]
    },
    {
      icon: <Droplets className="h-6 w-6 text-accent" />,
      title: "Stay Hydrated",
      description: "Proper hydration improves performance and recovery.",
      details: [
        "Drink water before, during, and after workouts",
        "Aim for clear or light yellow urine",
        "Consider electrolytes for longer sessions",
        "Don't wait until you're thirsty to drink"
      ]
    }
  ];

  return (
    <section id="tips" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Essential Tips
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart strategies to help you succeed and avoid common beginner mistakes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-muted rounded-lg">
                    {tip.icon}
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {tip.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tip.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <span className="text-primary text-sm mt-1">•</span>
                      <span className="text-sm text-muted-foreground">{detail}</span>
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

export default Tips;