import { useAboutPageData } from "@/hooks/use-content";
import { Achievements } from "@/components/home/Achievements";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ShieldCheck, Cpu, Search, Award } from "lucide-react";

// Icon mapping for values
const iconMap: Record<string, any> = {
  ShieldCheck,
  Cpu,
  Search,
};

const About = () => {
  const { data, isLoading } = useAboutPageData();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 container px-4 space-y-12">
        <Skeleton className="h-[40vh] w-full rounded-3xl" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* 1. Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
            {data.hero.headline}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {data.hero.subhead}
          </p>
        </section>

        {/* 2. Global Achievements (Existing Component) */}
        <Achievements />

        {/* 3. Mission & Story */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  {data.story.headline}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.story.content}
                </p>

                {/* Embedded Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                  {data.story.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values Grid */}
              <div className="grid gap-6">
                {data.values.map((val, idx) => {
                  const Icon = iconMap[val.icon] || Cpu;
                  return (
                    <Card key={idx} className="bg-background border-border">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">
                            {val.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {val.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Leadership Team */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground">
              Engineers, architects, and visionaries leading the charge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.team.map((member) => (
              <Card
                key={member.id}
                className="group border-border hover:border-primary/50 transition-colors text-center overflow-hidden"
              >
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                  <Avatar className="w-24 h-24 border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                    <AvatarImage src={`/images/team/${member.id}.jpg`} />
                    <AvatarFallback className="text-xl font-heading font-bold bg-secondary text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed px-2">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Certifications */}
        <section className="bg-slate-950 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-10">
              Certified & Compliant
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {data.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                >
                  <Award className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
