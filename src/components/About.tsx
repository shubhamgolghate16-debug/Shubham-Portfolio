import { Target, Users, TrendingUp, Lightbulb } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: Target,
      title: "User-Centric",
      description: "Every decision starts with understanding user needs and pain points"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven",
      description: "Leveraging metrics and analytics to validate assumptions and drive growth"
    },
    {
      icon: Users,
      title: "Cross-Functional",
      description: "Building bridges between engineering, design, marketing, and stakeholders"
    },
    {
      icon: Lightbulb,
      title: "Innovation-Focused",
      description: "Balancing incremental improvements with bold, transformative ideas"
    }
  ];

  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Product Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I believe great products are built at the intersection of user needs, 
              business goals, and technical feasibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card border border-border transition-smooth hover:shadow-elegant hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <principle.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
