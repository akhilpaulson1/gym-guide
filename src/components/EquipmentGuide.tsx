import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EquipmentGuide = () => {
  const equipment = [
    {
      category: "Free Weights",
      items: [
        {
          name: "Dumbbells",
          description: "Perfect for isolation exercises and unilateral training",
          beginnerTip: "Start with 5-15 lbs and focus on form",
          exercises: ["Bicep curls", "Shoulder press", "Chest flyes"]
        },
        {
          name: "Barbells",
          description: "Great for compound movements and heavy lifting",
          beginnerTip: "Always use a spotter for heavy exercises",
          exercises: ["Squats", "Deadlifts", "Bench press"]
        }
      ]
    },
    {
      category: "Cardio Machines",
      items: [
        {
          name: "Treadmill",
          description: "Walking, jogging, or running at your own pace",
          beginnerTip: "Start with 10-15 minutes at comfortable pace",
          exercises: ["Walking", "Interval running", "Incline walking"]
        },
        {
          name: "Stationary Bike",
          description: "Low-impact cardio that's easy on joints",
          beginnerTip: "Adjust seat height so your leg is slightly bent",
          exercises: ["Steady-state cycling", "HIIT intervals", "Endurance rides"]
        }
      ]
    },
    {
      category: "Machines",
      items: [
        {
          name: "Cable Machine",
          description: "Versatile equipment for various muscle groups",
          beginnerTip: "Great for learning movement patterns safely",
          exercises: ["Lat pulldowns", "Cable rows", "Tricep pushdowns"]
        },
        {
          name: "Leg Press",
          description: "Safer alternative to squats for beginners",
          beginnerTip: "Keep your knees aligned with your toes",
          exercises: ["Leg press", "Calf raises", "Single leg press"]
        }
      ]
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Equipment Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get familiar with common gym equipment and learn how to use them effectively and safely.
          </p>
        </div>

        <div className="space-y-12">
          {equipment.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                        <p className="text-sm font-medium text-foreground mb-1">Beginner Tip:</p>
                        <p className="text-sm text-muted-foreground">{item.beginnerTip}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Common Exercises:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.exercises.map((exercise, exerciseIndex) => (
                            <Badge key={exerciseIndex} variant="secondary" className="text-xs">
                              {exercise}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentGuide;