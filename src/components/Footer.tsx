import { Dumbbell, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dumbbell className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">FitStart</h3>
          </div>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Empowering college students to start their fitness journey with confidence and knowledge.
          </p>
          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for college students</span>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Remember: Always consult with healthcare professionals before starting any new exercise program.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;