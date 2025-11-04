import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Users, Lightbulb } from "lucide-react";

const SkillsHighlights = () => {
  const highlights = [
    {
      icon: Code,
      title: "Product Craft",
      description: "Building elegant solutions to complex problems with attention to technical detail"
    },
    {
      icon: Palette,
      title: "Design Thinking & Analytical",
      description: "Combining creative problem-solving with data-driven insights"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating across functions to deliver exceptional outcomes"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning challenges into opportunities through innovative thinking"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsHighlights;
