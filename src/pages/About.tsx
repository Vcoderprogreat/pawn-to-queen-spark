import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Trophy, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "12", label: "Coaches" },
    { icon: BookOpen, number: "80+", label: "Students" },
    { icon: Trophy, number: "10+", label: "Schools" },
  ];

  const achievements = [
    "Wisconsin High School Chess Champion",
    "Multiple Regional Tournament Winner", 
    "USCF Tournament Experience",
    "Youth Chess Development Specialist",
    "Certified Chess Instructor",
    "School Chess Program Developer"
  ];

  return (
    <Layout>
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 fade-in">
            About Our Academy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed slide-in-up">
            Our mission is to provide free, high-quality chess coaching for players of all levels, 
            creating the next generation of strategic thinkers and champions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center card-shadow slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 text-maroon mx-auto mb-4" />
                  <div className="text-4xl font-bold text-maroon mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="slide-in-up">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Users className="h-24 w-24 mx-auto mb-4" />
                  <p>Vedh Bagare Photo</p>
                  <p className="text-sm">(Photo placeholder)</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="slide-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Vedh Bagare — Founder & Head Coach
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  My name is Vedh Bagare, and I am a rising Sophomore at Brookfield East High School. 
                  I have been playing chess for most of my life and got into competitive chess a few years ago.
                </p>
                <p>
                  I got into chess coaching through teaching my sister and friends. I founded this academy 
                  because when I began my competitive journey, I couldn't find any free coaching.
                </p>
                <p>
                  I have many friends who love chess, but don't know how to improve, and through this academy, 
                  I hope to support them and give back to the chess community as a whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 fade-in">
            Achievements & Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-4 bg-background rounded-lg card-shadow slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Target className="h-5 w-5 text-maroon flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;