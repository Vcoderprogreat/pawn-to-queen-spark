import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Clock, Users, BookOpen, Target, DollarSign, Trophy } from "lucide-react";

const Partnerships = () => {
  const classBreakdown = [
    { icon: <Target className="h-5 w-5 text-maroon" />, time: "5 min", activity: "Puzzle Warmup" },
    { icon: <BookOpen className="h-5 w-5 text-maroon" />, time: "15 min", activity: "Opening Theory" },
    { icon: <Clock className="h-5 w-5 text-maroon" />, time: "15 min", activity: "Endgame Training" },
    { icon: <Users className="h-5 w-5 text-maroon" />, time: "10 min", activity: "Focus Skill (Positional Play, Calculation, Attacking, Defending & More)" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-maroon-light mb-6">
            <Handshake className="h-8 w-8 text-maroon" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Partnerships
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Pawn to Queen is working to bring structured, high-quality coaching to institutions across Southeastern Wisconsin.
          </p>
        </div>
      </section>

      {/* Chargers Chess Partnership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Chargers Chess — Hamilton School District
          </h2>
          <p className="text-sm font-medium text-maroon mb-6 uppercase tracking-wider">
            Inaugural Partnership · 8-Week Pilot Program
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            Every week, one of our coaches goes to Hamilton High School to deliver a live lesson to around 20 students. The majority of our students are intermediates, and we work to develop the skills to help them reach the advanced level.
          </p>

          {/* Class Breakdown */}
          <h3 className="text-xl font-bold text-primary mb-6">A Typical 45-Minute Class</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {classBreakdown.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-5 bg-background rounded-lg card-shadow border border-border"
              >
                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <span className="block text-sm font-semibold text-maroon">{item.time}</span>
                  <span className="text-muted-foreground">{item.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-none card-shadow overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-maroon-light">
                  <DollarSign className="h-5 w-5 text-maroon" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Cost & Impact</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We are proud to provide this partnership and instruction valued at <span className="font-bold text-maroon">$1,600</span> to Chargers Chess at no cost. This enables the team to put funds toward giving scholarships to their players, enabling a larger tournament presence to low-income students who otherwise wouldn't be able to attend.
              </p>
              <div className="flex items-start space-x-4 p-5 bg-muted rounded-lg border border-border">
                <Trophy className="h-6 w-6 text-maroon flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">
                  An example would be the team sponsoring 6 members to the All-Girls Tournament at USM, where they all placed in their respective sections. These saved funds also allowed the Chargers Team to host their own tournament earlier this year, where they had over 70 players attend.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;
