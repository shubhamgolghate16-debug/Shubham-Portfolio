import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">About Me</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 shadow-elegant">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="text-5xl">SG</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a seasoned Product Manager with 7 years in the Fintech and Payments industry, fueled by a passion for
              innovation. Currently leading teams at Booking.com, where I oversee products responsible for over 50% of
              their revenue - that translates to billions of travel dreams realized!
            </p>

            <p>
              At Booking.com, I spearheaded critical initiatives that transformed the foundational approach to online
              payments and hotel pay-ins, significantly improving collection success rates and launching recurring
              payment methods for millions of partners globally.
            </p>

            <p>
              I am passionate about enabling business growth by creating customer-first financial experiences while
              ensuring seamless operational efficiency and strict regulatory alignment.
            </p>

            <p>
              When I'm not building products, you'll find me mentoring aspiring PMs, contributing to side projects, or
              exploring new technologies that could shape the future of payments and fintech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
