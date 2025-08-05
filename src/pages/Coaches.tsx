import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, Trophy, User } from "lucide-react";

const Coaches = () => {
  const [openCoach, setOpenCoach] = useState<number | null>(null);

  const coaches = [
    {
      name: "Vedh Bagare",
      title: "Founder & Head Coach",
      bio: "Wisconsin High School Chess Champion and founder of Pawn to Queen Chess Coaching. Specializes in tournament preparation and advanced strategy development.",
      achievements: [
        "Wisconsin State High School Champion",
        "Multiple Regional Tournament Winner",
        "USCF Tournament Experience",
        "Youth Development Specialist"
      ]
    },
    {
      name: "Coach Name 2",
      title: "Senior Coach",
      bio: "Placeholder bio for Coach 2. Experienced tournament player with expertise in opening theory and tactical training.",
      achievements: [
        "State Tournament Finalist",
        "Regional Champion",
        "Chess Education Specialist",
        "Youth Coaching Expert"
      ]
    },
    {
      name: "Coach Name 3", 
      title: "Tactics Specialist",
      bio: "Placeholder bio for Coach 3. Focuses on tactical training and puzzle solving for intermediate players.",
      achievements: [
        "Tactical Training Expert",
        "Regional Tournament Winner",
        "Chess Puzzle Champion",
        "Student Development Focus"
      ]
    },
    {
      name: "Coach Name 4",
      title: "Endgame Expert", 
      bio: "Placeholder bio for Coach 4. Specializes in endgame theory and practical endgame training.",
      achievements: [
        "Endgame Theory Specialist",
        "Tournament Endgame Expert",
        "Chess Literature Author",
        "Advanced Student Mentor"
      ]
    },
    {
      name: "Coach Name 5",
      title: "Opening Specialist",
      bio: "Placeholder bio for Coach 5. Expert in opening theory and repertoire development.",
      achievements: [
        "Opening Theory Expert",
        "Repertoire Development",
        "Tournament Preparation",
        "Strategic Planning"
      ]
    },
    {
      name: "Coach Name 6",
      title: "Youth Coach",
      bio: "Placeholder bio for Coach 6. Specializes in teaching young beginners and elementary students.",
      achievements: [
        "Youth Development Expert", 
        "Elementary Chess Programs",
        "Beginner Specialist",
        "Fun Learning Methods"
      ]
    },
    {
      name: "Coach Name 7",
      title: "Strategy Coach",
      bio: "Placeholder bio for Coach 7. Focuses on strategic understanding and positional play.",
      achievements: [
        "Strategic Play Expert",
        "Positional Understanding",
        "Middle Game Specialist",
        "Student Analysis"
      ]
    },
    {
      name: "Coach Name 8", 
      title: "Tournament Coach",
      bio: "Placeholder bio for Coach 8. Specializes in tournament preparation and competitive psychology.",
      achievements: [
        "Tournament Psychology",
        "Competition Preparation", 
        "Mental Training",
        "Performance Optimization"
      ]
    },
    {
      name: "Coach Name 9",
      title: "Advanced Coach",
      bio: "Placeholder bio for Coach 9. Works with advanced students and future champions.",
      achievements: [
        "Advanced Player Development",
        "Master-level Training",
        "Elite Competition Prep", 
        "Championship Experience"
      ]
    },
    {
      name: "Coach Name 10",
      title: "Assistant Coach",
      bio: "Placeholder bio for Coach 10. Supports group lessons and individual student progress.",
      achievements: [
        "Group Lesson Support",
        "Individual Progress Tracking",
        "Student Mentorship",
        "Teaching Assistant"
      ]
    },
    {
      name: "Coach Name 11", 
      title: "Volunteer Coach",
      bio: "Placeholder bio for Coach 11. Passionate volunteer helping with community chess programs.",
      achievements: [
        "Community Chess Advocate",
        "Volunteer Leadership",
        "Outreach Programs",
        "Chess Promotion"
      ]
    }
  ];

  const toggleCoach = (index: number) => {
    setOpenCoach(openCoach === index ? null : index);
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
            Meet Our Coaches
          </h1>
          <p className="text-xl text-muted-foreground fade-in" style={{ animationDelay: '0.3s' }}>
            Learn from experienced chess players and dedicated educators
          </p>
        </div>
      </section>

      {/* Coaches List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {coaches.map((coach, index) => (
              <Collapsible 
                key={index} 
                open={openCoach === index}
                onOpenChange={() => toggleCoach(index)}
              >
                <Card className="card-shadow slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 smooth-transition">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <User className="h-6 w-6 text-maroon" />
                          <div className="text-left">
                            <CardTitle className="text-xl text-primary">{coach.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{coach.title}</p>
                          </div>
                        </div>
                        {openCoach === index ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Bio */}
                        <div>
                          <h4 className="font-semibold text-primary mb-2">About</h4>
                          <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
                        </div>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-maroon" />
                            Achievements
                          </h4>
                          <ul className="space-y-1">
                            {coach.achievements.map((achievement, achievementIndex) => (
                              <li 
                                key={achievementIndex}
                                className="text-sm text-muted-foreground flex items-center space-x-2"
                              >
                                <div className="w-1.5 h-1.5 bg-maroon rounded-full flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;