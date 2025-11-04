const Experience = () => {
  const experiences = [
    {
      company: "Tech Unicorn Inc.",
      role: "Senior Product Manager",
      period: "2022 - Present",
      achievements: [
        "Led product strategy for $50M revenue vertical",
        "Grew user base from 100K to 500K in 18 months",
        "Launched 3 major features with 90%+ satisfaction"
      ]
    },
    {
      company: "Fast-Growing Startup",
      role: "Product Manager",
      period: "2020 - 2022",
      achievements: [
        "First PM hire, established product process from scratch",
        "Shipped mobile app that reached #3 in App Store category",
        "Reduced churn by 25% through retention initiatives"
      ]
    },
    {
      company: "Enterprise SaaS Company",
      role: "Associate Product Manager",
      period: "2018 - 2020",
      achievements: [
        "Supported 3 product lines serving 10K+ businesses",
        "Conducted 100+ user interviews and research sessions",
        "Collaborated with engineering teams across 4 time zones"
      ]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Building products across different stages and scales
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-card border border-border transition-smooth hover:shadow-elegant">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                      </div>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li 
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className={`text-accent mt-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
