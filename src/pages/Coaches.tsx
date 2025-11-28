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
      bio: "My name is Vedh Bagare, and I am a rising Sophomore at Brookfield East High School. I have been playing chess for most of my life and got into competitive chess a few years ago. I am the Captain of the Brookfield East Chess Team and hope to lead my team to 1st at the Wisconsin Division 1 Championship. I have helped several of my students increase their USCF rating and become better players. I am excited to teach you and hope you will benefit from my lessons.",
      achievements: [
        "Captain of Brookfield East High School Varsity 1 Team",
        "Competed at Division 1 State Championship and Placed 7th with Team",
        "Captain of the Pilgrim Park Middle School Chess Team",
        "Led Pilgrim Park Team to 2nd at State Championship",
        "1st Place in the IAC Season Opener 2024",
        "1st Place in Madison East Scholastic Championship 2024",
        "1st Place in 3rd Annual Daniel Perelman Scholastic 2024",
        "Top 5 in Multiple Tournaments",
        "1270 Regular USCF and 1284 USCF Blitz Rating",
        "Regularly Volunteer and Teach 40+ Students at a Local Chess Program"
      ]
    },
    {
      name: "Pranshu Andhari",
      title: "Lead Advanced Coach",
      bio: "I've been playing chess for as long as I can remember. What started as a fun hobby turned into a deep passion, and over the years, I've worked hard to become a national-level competitor and one of the top players in Wisconsin. I've played in over 50 tournaments, and each one has taught me something new—whether it's a tactical idea, a new opening variation, or how to play a specific endgame. I am the Highest-Rated player on my school team and regularly represent them in major tournaments throughout the state and nation. I enjoy helping others discover the game and love coaching because it's a chance to share something that's made such a big difference in my life.",
      achievements: [
        "Section Winner at the 2024 Middle School National Championships in Atlanta, Georgia",
        "Played in 50+ tournaments",
        "1st Place at 2024–2025 Wisconsin Junior Open & Veterans Tournament (K-8 Section)",
        "1st Place at 2023 Burleigh Open (K-8 Rated Section)",
        "2nd Place at 2024 Spartan Open (K-8 Rated Section)",
        "1st Place at 2024 IAC Season Opener (K-8 Rated Section)",
        "2nd Place at 2024 Wisconsin State Championship (K-8 Section)",
        "3rd Place at 2024 Wisconsin Grade Level Championship (7th Grade Section)",
        "3rd Place at 2023 Wisconsin State Championship (K-8 Section)",
        "1st Place at 2022 Wisconsin State Championship (K-8 Section)",
        "1st Place at 2022 Wisconsin Grade Level Championship (7th Grade Section)",
        "2nd Place at 2022 Wisconsin Grade Level Championship (7th Grade Section)",
        "3rd Place at 2022 Wisconsin Grade Level Championship (7th Grade Section)",
        "1st Place at 2021 Wisconsin State Championship (K-8 Section)",
        "2nd Place at 2021 Wisconsin Grade Level Championship (7th Grade Section)",
        "3rd Place at 2021 Wisconsin Grade Level Championship (7th Grade Section)",
        "5th Place at 2024 North Central Open (Reserve Section)"
      ]
    },
    {
      name: "Ojas Sahoo",
      title: "Advanced Coach",
      bio: "Hello, my name is Ojas Sahoo. I have been playing chess since I was 4 and played my first tournament at 5. Along the way from placing second at one of the most prestigious national chess tournaments for students in the USA to drawing a top Grandmaster in the world, I learned so many things about the game, and I want to share that knowledge with my students. Chess has taught me so many things about life in general, and I can't wait to impact the next generation of players. Although you will be expected to put in your best effort in every class with me, I guarantee that they will be fun and you will improve a lot.",
      achievements: [
        "Drew a 2560 Chess Grandmaster who was once ranked Top 30 internationally",
        "2nd place in the Weeramantry National Blitz Championship in 2023",
        "1st place in the 2024 Wisconsin State Championship and qualified for the National Barber of Middle School State Champions",
        "1st place in 2022 in the Wisconsin State Championship and qualified for the National Rockefeller of Elementary State Champions",
        "16th out of 630+ Players in the Chesskid Online Elementary Championship in 1st grade",
        "10th out of 400+ Players in the Age 8 and under 2021 US Junior State Congress",
        "5th in National Online Scholastic State Championships K-3 1100-1199 class",
        "Led Pilgrim Park Middle School to 1st in WI State with 5 out of 5 points",
        "Tied for 1st in Oshkosh Elementary State Championship in 2023 and 2025",
        "1st in the 2024 Oshkosh Elementary State Championship in 2024",
        "3rd place in the Oshkosh Elementary State Championship in 2022",
        "1st place in the 2024 Midwest Regionals",
        "1st place in the 2023 Grade Level for 4th grade",
        "1st place in the 2024 Grade Level for 5th grade",
        "2nd place in the 2025 Grade Level for 6th grade",
        "1st place in the IAC Spartan Open in 2023 and 2025",
        "2nd place in the IAC Spartan Open in 2024",
        "Got joint-first in Waukesha Memorial 2025 with 4 out of 4 points",
        "2nd category title with a rating of 1800+ (USCF)"
      ]
    },
    {
      name: "Anshu Shesham",
      title: "Advanced Coach",
      bio: "I started learning chess from my dad when I was four years old. In third grade, I joined a chess club and started my competitive career. I practiced constantly and increased my skills, tactics, endgames, and more. Chess has taught me a lot about patience, strategy, and problem-solving, just to name a few. I have played in 50+ tournaments and I continue to learn something new each time. Chess is an amazing game that teaches valuable lessons in life. I really enjoy playing chess and love to coach others so that they can experience the many benefits of this wonderful game that changed my life.",
      achievements: [
        "1st Place at Wisconsin State Championship 2025",
        "1st Place at Wisconsin Grade Level Championship 2025",
        "2nd Place at Spartan Open 2025",
        "1st Place at IAC Opener 2024",
        "2nd Place at Wisconsin Grade Level Championship 2024",
        "2nd Place at Burleigh Open 2023",
        "2nd Place at IAC Opener 2023",
        "2nd place at Wisconsin Grade Level Championship 2023",
        "2nd Place at Wisconsin State Championship 2022"
      ]
    },
    {
      name: "Arnav Jain",
      title: "Advanced Coach",
      bio: "I started learning chess from my dad when I was four years old. In third grade, I joined a chess club and started my competitive career. I practiced constantly and increased my skills, tactics, endgames, and more. Chess has taught me a lot about patience, strategy, and problem-solving, just to name a few. I have played in 50+ tournaments, and I continue to learn something new each time. Chess is an amazing game that teaches valuable lessons in life. I really enjoy playing chess and love to coach others so that they can experience the many benefits of this wonderful game that changed my life.",
      achievements: [
        "1st Place at Wisconsin State Championship 2025",
        "1st Place at Wisconsin Grade Level Championship 2025",
        "2nd Place at Spartan Open 2025",
        "1st Place at IAC Opener 2024",
        "2nd Place at Wisconsin Grade Level Championship 2024",
        "2nd Place at Burleigh Open 2023",
        "2nd Place at IAC Opener 2023",
        "2nd place at Wisconsin Grade Level Championship 2023",
        "2nd Place at Wisconsin State Championship 2022"
      ]
    },
    {
      name: "Aadit Senthil",
      title: "Lead Intermediate Coach",
      bio: "Chess has always been more than just a board game to me; it is a passion that has given me countless experiences and friends. I began learning the game at the age of six at my local chess club, and eventually progressed to competitive play. Over the years, I've had the opportunity to compete against top players in the state and earn several tournament wins. Now, as a teacher, I hope to pass on the knowledge and skills to my students and help them become top players.",
      achievements: [
        "1st Place at the 2025 Wisconsin K-8 State Championship",
        "1st Place in Class at 2025 Illinois State Championship",
        "4th Place at the 2025 Wisconsin Grade Level Championships",
        "2nd Place at the 2024 Midwest Regionals Championships",
        "1st Place at the 2024 BC Rapid",
        "2nd Place at the 2024 Future Urban Leaders Tournament",
        "2nd Place at the 2024 Muskego Melee",
        "1st Place Class Prize at the 2024 Wisconsin State Championships",
        "3rd Place at the 2024 Wisconsin Grade Level Championships",
        "1st Place at the 2023 IAC Bethune Battle",
        "2nd at the 2023 BC Open",
        "1st Place at the 2023 Power of Pawns",
        "1st Place at the 2021 St. Dominic's Open"
      ]
    },
    {
      name: "Rishitha Errabelli",
      title: "Intermediate Coach",
      bio: "My chess experience started as a fun game with my family. Eventually, I could win against everyone in my household, and I decided to take it further. I started playing in the local tournaments, and over time, I started competing at the state level. I improved my skills and tactics throughout the years, gradually becoming a better player than I was when I started. Chess has given me many unforgettable experiences and has helped me meet many amazing people. I hope that by teaching chess to kids, they will love it as much as I do!",
      achievements: [
        "2025 - Member of the Pilgrim Park Team that won 1st place at the WI State Championship 2025",
        "2025 - WI State Championship 6th Place 2025",
        "2024 - Member of the Pilgrim Park Team that won 2nd place at the WI State Championship 2025",
        "2024 - WI State Championship 9th place",
        "2024 - Midwest Regional Championship 4th Place",
        "2023 - Grade Level Championship 7th Place",
        "Top 5 at Multiple Regional Tournaments"
      ]
    },
    {
      name: "Arjun Khopkar",
      title: "Intermediate Coach",
      bio: "I've been playing chess since second grade, beginning in school clubs before advancing into competitive tournaments. Over the years, I became the leading contributor of tournament wins to Dixon Elementary and Pilgrim Park Middle School. Looking ahead, I hope to continue competing at a high level, defend my team's state champion title, and coach the next generation of tournament players.",
      achievements: [
        "1st Place Team at Wisconsin State Championship 2025",
        "2nd Place Team at Wisconsin State Championship 2024",
        "1st Place Team US Amateur North Scholastic 2024",
        "3rd Place Individual at US Amateur North Scholastic 2024",
        "3rd at Daniel Perelman Scholastic 2024",
        "5th at Muskego Melee 2023",
        "4th at Bethune Battle 2023",
        "6th at Medical College of Wisconsin 2022",
        "5th at Muskego Melee 2022"
      ]
    },
    {
      name: "Yekshit Valluri",
      title: "Intermediate Coach",
      bio: "I am Yekshit Valluri, a 7th grader at Pilgrim Park Middle School. My journey with chess began at the age of 5, and it has been a passion ever since. Over the years, I have participated in several championships and continue to hone my skills and deepen my understanding of the game.",
      achievements: [
        "1st Place Team at Wisconsin State Championship 2025",
        "2nd at Wisconsin State Grade Level Championships",
        "5th at Spartan Open 2025",
        "6th at 43rd Waukesha Memorial 2025",
        "2nd Place Team at Wisconsin State Championship 2024",
        "1st Place Team US Amateur North Scholastic 2024",
        "4th at IAC Season Opener 2024",
        "2nd at Sixth Medical College of Wisconsin Open 2024",
        "12th at Wisconsin Junior Open 2024",
        "13th at North Central Open 2024"
      ]
    },
    {
      name: "Pruthvi Vinith",
      title: "Lead Beginner Coach",
      bio: "My name is Pruthvi Vinith, and I am currently in 8th grade at Wisconsin Hills Middle School. I have been playing chess since I was 8 years old and have used my experience in chess to teach my younger brothers the game. Chess has improved my patience, enabling me to focus better in all aspects of life.",
      achievements: [
        "Founded the Wisconsin Hills Chess club",
        "Placed Top Ten Individually at Wisconsin State Championship 2025",
        "1st in Cudahy Championship 2025",
        "1st in the GCA Season Ender 2025",
        "2nd in Power of Pawns 2025",
        "4th at Grace Christian Open 2025",
        "1st place in the Power of Pawns tournament 2024",
        "7th at Spartan Open 2025",
        "3rd at Sixth Medical College of Wisconsin Scholastic 2025",
        "8th at IAC Season Opener 2024",
        "6th at Grace Christian Open 2024",
        "8th at Fifth Medical College of Wisconsin Scholastic 2024",
        "3rd at Shorewood Hills Championship 2024",
        "7th at Midwest Regional Championship 2024",
        "6th at Muskego Melee 2023",
        "6th at University School of Milwaukee 2023",
        "7th at Spartan Open 2023"
      ]
    },
    {
      name: "Vedanth Shetty",
      title: "Beginner Coach",
      bio: "My name is Vedanth Shetty—a rising seventh grader at ASA Clark Middle School in the Pewaukee School District. I discovered the world of chess at the age of six, and over the past few years, I've begun competitive play. My passion for coaching developed when I began helping my cousins learn how to play. Currently, I am a member of the Pewaukee Chess Team.",
      achievements: [
        "1st Place at Wisconsin Scholastic Chess Federation K-12 2023",
        "Competed at State Championships and placed top ten",
        "5th at USM Fall Annual 2022",
        "3rd at IAC Season Opener 2022",
        "5th at Fourth Medical College of Wisconsin Scholastic 2022",
        "6th at Pirate Open 2023",
        "10th at IAC Season Opener 2023",
        "8th at Spartan Open 2025"
      ]
    },
    {
      name: "Caleb Vander Sanden",
      title: "Coach-in-Training",
      bio: "My name is Caleb, and I regularly represent Whitnall Middle School at chess tournaments. I am a top player at the Power of Pawns Club in Wisconsin. I really enjoy playing attacking games and hope to get better through studying openings.",
      achievements: [
        "14th at Spartan Open 2024",
        "5th at Cudahy Chess Championship",
        "10th at Shorewood Hills 2024",
        "10th at 6th Medical College of Wisconsin 2024",
        "7th at Grace Christian Open 2024",
        "9th at 96th Wisconsin Closed Championship 2024",
        "12th at 3rd Annual Daniel Perelman Memorial 2024",
        "10th at Muskego Melee 2024"
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Coaches
          </h1>
          <p className="text-xl text-muted-foreground">
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
                <Card className="card-shadow">
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