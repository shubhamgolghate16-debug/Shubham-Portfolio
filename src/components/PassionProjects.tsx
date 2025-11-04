import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Code, ExternalLink } from "lucide-react";

const PassionProjects = () => {
  const projects = [
    {
      icon: Bot,
      title: "What's app Chatbot",
      description: "Product Management Tutor chatbot that helps you learn PM craft",
      tags: ["What's app", "gpt-4o", "AI Agent", "RAG"],
      highlights: ["Conversational AI interfaces", "Document analysis systems", "Text Based"],
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "On demand travel news voice notes ",
      tags: ["n8n", "gpt-4o", "Text-to-speech", "Slack"],
      highlights: ["Data pipeline automation", "API integrations", "Workflow optimization"],
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Newsletter web application",
      tags: ["Bolt", "Node.js", "TypeScript", "Supabase"],
      highlights: ["Responsive web applications", "Gmail integration", "Coding Copilot"],
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
              {index === 0 && (
                <CardFooter>
                  <Button asChild className="w-full">
                    <a
                      href="https://api.whatsapp.com/send/?phone=31614842438&text=Hello%2C+this+is+a+test+message&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        // Ensure it opens outside the preview iframe (WhatsApp blocks iframing)
                        e.preventDefault();
                        window.open(
                          "https://wa.me/31614842438?text=Hello%2C%20this%20is%20a%20test%20message",
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                    >
                      Try Chatbot <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionProjects;
