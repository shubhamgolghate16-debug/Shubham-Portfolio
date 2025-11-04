import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Users, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description: "Led complete UX overhaul increasing conversion rates and reducing cart abandonment",
      impact: [
        { label: "Conversion Rate", value: "+34%", icon: TrendingUp },
        { label: "Revenue Growth", value: "+$2.4M", icon: DollarSign },
        { label: "Active Users", value: "50K+", icon: Users }
      ],
      tags: ["UX Research", "A/B Testing", "Analytics"],
      timeline: "6 months"
    },
    {
      title: "Mobile App Launch: Food Delivery",
      description: "Took product from concept to 100K downloads in 3 months with 4.8* rating",
      impact: [
        { label: "Downloads", value: "100K+", icon: Users },
        { label: "Retention Rate", value: "72%", icon: TrendingUp },
        { label: "App Rating", value: "4.8★", icon: TrendingUp }
      ],
      tags: ["Go-to-Market", "Mobile", "Growth"],
      timeline: "3 months"
    },
    {
      title: "SaaS Feature: Team Collaboration",
      description: "Shipped collaboration tools that increased team plan conversions by 45%",
      impact: [
        { label: "Conversion Lift", value: "+45%", icon: TrendingUp },
        { label: "MRR Growth", value: "+$180K", icon: DollarSign },
        { label: "NPS Score", value: "+18pts", icon: Users }
      ],
      tags: ["B2B SaaS", "Pricing", "User Interviews"],
      timeline: "4 months"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real products. Real impact. Measurable results.
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-border overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl mb-3">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {project.timeline}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
                    {project.impact.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="flex justify-center mb-2">
                          <metric.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="ghost" className="group">
                      Read Full Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
