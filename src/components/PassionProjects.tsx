import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, Code } from "lucide-react";

const PassionProjects = () => {
  const projects = [
    {
      icon: Bot,
      title: "LLM Applications",
      description: "Building intelligent applications powered by Large Language Models",
      tags: ["OpenAI", "LangChain", "RAG", "AI Agents"],
      highlights: ["Conversational AI interfaces", "Document analysis systems", "Custom AI workflows"],
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Creating efficient automation solutions to streamline workflows",
      tags: ["Python", "APIs", "Scripting", "Integration"],
      highlights: ["Data pipeline automation", "API integrations", "Workflow optimization"],
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Web applications with modern technologies",
      tags: ["React", "Node.js", "TypeScript", "Supabase"],
      highlights: ["Responsive web applications", "Backend API development", "Database design and optimization"],
    },
  ];

  return (
    <section id="passion-projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Passion Projects</h2>
        <p className="text-center text-muted-foreground text-lg mb-16">Automation, LLMs and Full Stack Development</p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <project.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
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

export default PassionProjects;
