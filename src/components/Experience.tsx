import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Product Manager - Payments",
      company: "Booking.com",
      period: "2022 - Present",
      location: "Amsterdam, Netherlands",
      achievements: [
        "Led Partner Business Portal, enabling 4M hotel partners to manage their finances anytime anywhere",
        "Launched ACH payments in US via Adyen integration, improving collection rate by X% and XX% adoption",
        "Launched PIX payments in Brazil, improving collection rate by XX% with XX% adoption in 6 months",
        "Launched alternative payment methods increasing conversion by XX%",
        "Spearheaded the launch of multiple self service use cases, saving millions annually in support overhead",
        "Enabled cross-border tax payments in Italy and New Zealand, helping reduce compliance liabilities by millions",
      ],
    },
    {
      role: "Product Manager - Fintech",
      company: "Paysafe group",
      period: "2021 - 2022",
      location: "Hyderabad, India",
      achievements: [
        "Own the E2E product development of credit risk product for high-risk merchants monitored by the risk team",
        "Launched Periodic Review Form to enhanced operational efficiency accounting for $100K per annum cost savings",
        "Increased portfolio coverage of MCRM product to 100% from 29% for monitoring the merchants",
        "Currently working on building Merchant Risk Score Card using ML to reduce credit losses for Paysafe",
      ],
    },
    {
      role: "Product Manager - Fintech",
      company: "Mahindra Comviva",
      period: "2019 - 2021",
      location: "Bangalore, India",
      achievements: [
        "Launched Multiple Products 0 to 1",
        "Owned E2E product development to enhance user experience and reduce the check-out time by 33%",
        "Owned E2E product launch and was involved in the product ideation, roadmap, solutions and validation",
        "Increasing income by 14% for business users of the wallet platform",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Professional Experience</h2>

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
                  <Badge variant="secondary" className="self-start">
                    {exp.period}
                  </Badge>
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
