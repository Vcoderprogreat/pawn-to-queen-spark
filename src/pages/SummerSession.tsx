import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Users, Zap } from "lucide-react";
const SummerSession = () => {
  const features = [{
    icon: CheckCircle,
    title: "No Commitment",
    description: "Weekly classes, homework, and tournaments are voluntary but recommended for maximum improvement."
  }, {
    icon: Zap,
    title: "Completely Free",
    description: "No money involved. All classes and materials are provided at no cost to students."
  }, {
    icon: Calendar,
    title: "Flexible",
    description: "Our coaches accommodate students' schedules and learning pace for optimal learning."
  }];
  const curriculum = [{
    level: "Beginner",
    description: "Learn basic piece movements, fundamental ideas, and essential opening principles.",
    topics: ["Piece Movement and Values", "Basic Endgames", "Opening Principles", "Middlegame Ideas", "Common Tactics"]
  }, {
    level: "Intermediate",
    description: "Develop strategic thinking, advanced tactics, and deeper opening understanding.",
    topics: ["Common Endgames", "System Openings", "Attacking and Defending", "Calculation Principles", "Checkmate Patterns"]
  }, {
    level: "Advanced",
    description: "Master tournament preparation, advanced theory, and competitive psychology.",
    topics: ["Advanced Endgame Theory", "Full Opening Repertoire", "Positional Play", "Complex Calculation", "Master-level Analysis"]
  }];
  return <Layout>
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Summer Session</h1>
          <p className="text-xl text-muted-foreground">
            Join our comprehensive summer chess program designed for all skill levels
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                Program Information
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">Join our 2026 Summer Session, a 9-week online chess camp from June 15 to August 15! Each student gets one weekly small-group class (2-4 students), taught by our experienced state champion and national finalist coaches. Our detailed curriculum is available below. We expect to have 20+ online classes weekly at different times, ensuring every student can find a time to learn. Consistent attendance is highly encouraged, but we post lesson review videos weekly. The summer session ends with a tournament where students compete for prizes. Classes are open to players rated up to 1400 USCF. If you are above 1400, email Vedh.Bagare@gmail.com for coaching opportunities. Registration is open all year, so register today to reserve your child's spot!</p>
              
              
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose Our Summer Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="text-center card-shadow">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-maroon mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Curriculum by Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculum.map((level, index) => <Card key={index} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-maroon text-center">{level.level}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{level.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                      Key Topics:
                    </h4>
                    <ul className="space-y-1">
                      {level.topics.map((topic, topicIndex) => <li key={topicIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-maroon flex-shrink-0" />
                          <span>{topic}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default SummerSession;