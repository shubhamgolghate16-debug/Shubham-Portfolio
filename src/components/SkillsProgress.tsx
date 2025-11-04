import { Progress } from "@/components/ui/progress";

const SkillsProgress = () => {
  const skillCategories = [
    {
      title: "Payments Infra & Operations",
      skills: [
        "Payment Gateway Integration",
        "Transaction Processing",
        "Fraud Detection & Prevention",
        "PCI DSS Compliance",
        "Payment Routing Optimization",
        "Cross-border Payments"
      ]
    },
    {
      title: "Product Strategy & Execution",
      skills: [
        "Product Roadmap Planning",
        "Stakeholder Management",
        "Data-Driven Decision Making",
        "User Research & Testing",
        "Agile & Scrum Methodology",
        "Go-to-Market Strategy"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Skills & Expertise
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{skill}</span>
                      <span className="text-sm text-muted-foreground">Expert</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;
