import { Achievements } from "@/components/home/Achievements";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck } from "lucide-react";

// Mock data (usually fetched from API)
const team = [
  {
    name: "Alex Mercer",
    role: "CEO & Founder",
    bio: "Ex-Google Cloud architect with 15 years in distributed systems.",
    initials: "AM",
  },
  {
    name: "Dr. Sarah Chen",
    role: "CTO",
    bio: "PhD in Embedded Systems. Led IoT architecture for Smart City Metro.",
    initials: "SC",
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    bio: "Specialist in Kubernetes operators and high-availability clusters.",
    initials: "JW",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    bio: "Previously led product at major cybersecurity firms.",
    initials: "ER",
  },
];

const certs = ["ISO 27001", "SOC2 Type II", "GDPR Compliant", "HIPAA Ready"];

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Hero */}
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Building the <span className="gradient-text">Intelligent Edge</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            InfraTech bridges the gap between physical infrastructure and
            digital intelligence. We enable enterprises to scale securely from
            the data center to the rugged edge.
          </p>
        </div>

        {/* Stats Strip */}
        <Achievements />

        {/* Story / Mission */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading">Our Mission</h2>
              <div className="prose dark:prose-invert text-muted-foreground">
                <p>
                  Founded in 2020, InfraTech was born from a simple observation:
                  hardware and software were evolving in silos. Infrastructure
                  teams struggled to manage the complexity of modern
                  cloud-native applications running on diverse, rugged hardware.
                </p>
                <p>
                  We set out to build a unified platform—converging OT
                  (Operational Technology) and IT (Information Technology).
                  Today, we support over 200 enterprise clients in
                  manufacturing, finance, and smart cities.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {certs.map((cert) => (
                  <Badge
                    key={cert}
                    variant="outline"
                    className="px-3 py-1.5 border-primary/20 text-foreground flex gap-2"
                  >
                    <ShieldCheck className="w-3 h-3 text-primary" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-secondary/30 rounded-2xl h-[400px] border border-border relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-hero opacity-50" />
              <span className="text-muted-foreground font-medium relative z-10">
                [Office/Team Photo Placeholder]
              </span>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="bg-muted/30 py-20 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground">
                Engineers, architects, and visionaries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="border-border hover:border-primary/50 transition-colors text-center"
                >
                  <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                    <Avatar className="w-24 h-24 border-2 border-primary/20">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xl font-heading font-bold bg-primary/10 text-primary">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-primary font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
