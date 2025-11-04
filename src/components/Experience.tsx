import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Product Manager - Payments Platform",
      company: "Booking.com",
      period: "2021 - Present",
      location: "Amsterdam, Netherlands",
      achievements: [
        "Led Partner Business Portal, enabling 4M hotel partners to manage their finances anytime anywhere"

        "Key Achievements:"
        "Launched ACH payments in US via Adyen integration, improving collection rate by X% & XX% adoption"
        "Launched PIX payments in Brazil, improving collection rate by XX% with XX% adoption in 6 months"
        "Led the launch of multiple bank transfer payment methods in LATAM improving collection rate by XX%"
        "Spearheaded the launch of multiple self service use cases , saving millions annually in support overhead"
        "Enabled cross-border tax payments in Italy and New Zealand, helping reduce compliance liabilities by millions"
      ]
    },
    {
      role: "Product Manager - Fintech",
      company: "Paytm",
      period: "2018 - 2021",
      location: "Bangalore, India",
      achievements: [
        "Built merchant payment gateway handling $2B+ annual transaction volume",
        "Launched QR code payment solution adopted by 500K+ merchants",
        "Led cross-functional team of 15 engineers and designers",
        "Reduced integration time for new merchants from 2 weeks to 3 days"
      ]
    },
    {
      role: "Associate Product Manager",
      company: "PhonePe",
      period: "2017 - 2018",
      location: "Bangalore, India",
      achievements: [
        "Shipped payment features used by 50M+ active users",
        "Implemented fraud detection system reducing chargebacks by 40%",
        "Collaborated with NPCI on UPI infrastructure improvements",
        "Optimized transaction flow reducing drop-off rates by 25%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Professional Experience
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl">{exp.role}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      <span className="text-primary font-semibold">{exp.company}</span> · {exp.location}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="self-start">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
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

export default Experience;
