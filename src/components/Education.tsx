import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Indian Institute of Management, Indore",
      period: "2017 - 2019",
      description: "Specialized in Product Management and Technology Strategy. CGPA: 3.8/4.0"
    },
    {
      degree: "B.Sc. Electronics Engineering",
      institution: "College of Engineering, Pune (COEP)",
      period: "2012 - 2016",
      description: "Focus on Embedded Systems and IoT. First Class with Distinction"
    }
  ];

  const certifications = [
    {
      title: "Certified Scrum Product Owner (CSPO)",
      issuer: "Scrum Alliance",
      year: "2020"
    },
    {
      title: "Product Management Certificate",
      issuer: "Product School",
      year: "2019"
    },
    {
      title: "Advanced Product Management",
      issuer: "Reforge",
      year: "2022"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Education & Certifications
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card key={index} className="bg-primary/5 border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">
                    <span className="text-primary font-semibold">{edu.institution}</span>
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <Award className="h-6 w-6 text-primary mb-3" />
                    <h4 className="font-bold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
