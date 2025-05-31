import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "joshi.tanm@northeastern.edu";

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: `Failed to copy ${type}`,
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tanmay-joshi",
      icon: "fab fa-linkedin",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/Tanmayjoshi-3601",
      icon: "fab fa-github",
      color: "hover:text-gray-400"
    },
    {
      name: "Email",
      url: `mailto:${email}`,
      icon: "fas fa-envelope",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to collaborate on innovative AI solutions? Let's build something amazing together.
            </p>
          </div>

          <div className="glassmorphism p-8 rounded-2xl">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--neon))] rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-background"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground text-sm">Email</p>
                    <p className="text-lg font-medium">{email}</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(email, "email")}
                    className={`magnetic-btn text-sm ${
                      emailCopied 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {emailCopied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>



                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--neon))] rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-background"></i>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-lg font-medium">Boston, MA</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Social Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glassmorphism p-4 rounded-lg flex items-center gap-3 hover-tilt transition-all group ${social.color}`}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="glassmorphism p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-3 text-[hsl(var(--neon))]">Quick Stats</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-[hsl(var(--neon))]">Response Time</div>
                      <div className="text-muted-foreground">Within 24 hours</div>
                    </div>
                    <div>
                      <div className="font-bold text-[hsl(var(--neon))]">Availability</div>
                      <div className="text-muted-foreground">Open to opportunities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open(`mailto:${email}`, '_blank')}
                className="magnetic-btn bg-[hsl(var(--neon))] text-background px-8 py-3 rounded-full font-semibold hover:bg-white transition-all"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </Button>
              <Button
                onClick={() => window.open('https://calendly.com/tanmay-joshi', '_blank')}
                variant="outline"
                className="magnetic-btn glassmorphism border-[hsl(var(--neon))] text-[hsl(var(--neon))] px-8 py-3 rounded-full font-semibold hover:bg-[hsl(var(--neon))] hover:text-background transition-all"
              >
                <i className="fas fa-calendar mr-2"></i>
                Schedule Call
              </Button>
            </div>

            {/* Additional Contact Note */}
            <div className="text-center mt-8 pt-6 border-t border-border/20">
              <p className="text-muted-foreground text-sm">
                💡 <strong>Pro tip:</strong> Mention "AI Portfolio" in your message for priority response!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
