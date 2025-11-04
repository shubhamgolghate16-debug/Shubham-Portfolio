import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Product Strategy",
      skills: ["Product Roadmapping", "Market Research", "Competitive Analysis", "Go-to-Market Strategy", "OKRs & KPIs"]
    },
    {
      category: "User Research & Design",
      skills: ["User Interviews", "Persona Development", "Journey Mapping", "Usability Testing", "Figma/Prototyping"]
    },
    {
      category: "Data & Analytics",
      skills: ["SQL", "Google Analytics", "Mixpanel/Amplitude", "A/B Testing", "Data Visualization"]
    },
    {
      category: "Technical",
      skills: ["Agile/Scrum", "JIRA", "API Basics", "Technical Documentation", "System Design"]
    },
    {
      category: "Business & Growth",
      skills: ["Pricing Strategy", "Unit Economics", "Growth Hacking", "Stakeholder Management", "P&L Analysis"]
    }
  ];

  return (
    <section className="py-24 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Competencies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit for building exceptional products
            </p>
          </div>
          
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 pl-7">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium transition-smooth hover:bg-primary hover:text-primary-foreground cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
