import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "shubhamgolghate16@gmail.com",
      href: "mailto:shubhamgolghate16@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      href: "https://github.com/shubhamgolghate16-debug?tab=repositories",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: "#",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, challenging projects, or just connecting with
            fellow product people.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="bg-card p-6 rounded-2xl shadow-card border border-border transition-smooth hover:shadow-elegant hover:-translate-y-1">
                  <link.icon className="w-8 h-8 text-primary mx-auto mb-4 transition-smooth group-hover:scale-110" />
                  <h3 className="font-semibold text-card-foreground mb-1">{link.label}</h3>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <Button size="lg" className="shadow-elegant text-lg px-8 py-6">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
