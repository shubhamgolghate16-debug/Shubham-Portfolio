import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 shadow-elegant">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="text-6xl">SG</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Product Manager with over 7 years of experience in Fintech and Payments. 
              My journey has taken me through building payment infrastructure at scale, leading 
              cross-functional teams, and delivering products that serve millions of users.
            </p>
            
            <p>
              At Booking.com, I've led initiatives that transformed how we handle payment processing, 
              reducing transaction costs by 30% while improving success rates. I thrive at the 
              intersection of technology, business strategy, and user experience.
            </p>
            
            <p>
              My approach combines data-driven decision making with a deep empathy for users. 
              I believe the best products are built when you truly understand the problem you're 
              solving and the people you're solving it for.
            </p>
            
            <p>
              When I'm not building products, you'll find me mentoring aspiring PMs, contributing 
              to open-source projects, or exploring new technologies that could shape the future 
              of payments and fintech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
