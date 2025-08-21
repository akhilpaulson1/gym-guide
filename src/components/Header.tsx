import { Dumbbell } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">FitStart</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#getting-started" className="text-muted-foreground hover:text-primary transition-colors">
              Getting Started
            </a>
            <a href="#workouts" className="text-muted-foreground hover:text-primary transition-colors">
              Workouts
            </a>
            <a href="#equipment" className="text-muted-foreground hover:text-primary transition-colors">
              Equipment
            </a>
            <a href="#tips" className="text-muted-foreground hover:text-primary transition-colors">
              Tips
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;