import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, BookOpen, Trophy, Target } from "lucide-react";
const About = () => {
  const achievements = ["Captain of Brookfield East High School Varsity 1 Team", "Competed at Division 1 State Championship and Placed 7th with Team", "Former Captain of the Pilgrim Park Middle School Chess Team", "Led Pilgrim Park Team to 2nd at State Championship", "1st Place in the IAC Season Opener 2024", "1st Place in Madison East Scholastic Championship 2024", "1st Place in 3rd Annual Daniel Perelman Scholastic 2024", "Regularly Volunteer and Teach 40+ Students at a Local Chess Program"];
  const faqData = [{
    question: "Are all classes really free?",
    answer: "Yes! Pawn to Queen Chess Coaching is 100% free. Our mission is to make quality chess coaching accessible to every student, regardless of their financial situation."
  }, {
    question: "How big are the classes?",
    answer: "Classes typically have 2–4 students. This keeps groups small enough for personal attention, while still allowing kids to learn and practice with their peers."
  }, {
    question: "What level of players can join?",
    answer: "We welcome students from complete beginners to around 1400 USCF. If your child is above that level, please reach out to discuss advanced coaching opportunities."
  }, {
    question: "Where do classes take place?",
    answer: "Classes are held online through Google Meet and Lichess."
  }, {
    question: "What if my child misses a class?",
    answer: "No problem! Since our program is flexible, students can miss a class occasionally. We encourage regular attendance for best results, but we post lesson reviews weekly."
  }, {
    question: "Do students get homework?",
    answer: "Yes, we provide optional practice exercises and puzzles each week. While not required, completing homework helps reinforce what's learned in class."
  }, {
    question: "Will my child get a chance to play in tournaments?",
    answer: "Yes! At the end of each summer session, we host a tournament where students can compete against others at their level. We also encourage participation in USCF-rated events."
  }, {
    question: "How do I know what class to sign up for?",
    answer: "Beginner: Students who casually play against family or friends (No USCF Rating). Intermediate: Students who are in a school club or play online regularly (USCF Rating under 800). Advanced: Players who compete in OTB tournaments or are on a school team (USCF Rating over 800). If you are unsure, feel free to contact Vedh.bagare@gmail.com."
  }];
  return <Layout>
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            About Our Academy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">In 2025, we launched Pawn to Queen Chess Coaching with a simple mission to provide free, structured chess coaching for every student who wants to improve. Since then, we’ve grown to a community of over 110 families across the US, with some students even joining from Canada. Beyond our online summer sessions, we coach the Chargers Chess team in-person and run a selective 1-on-1 mentorship program for our top students, training them to compete and win at the regional and state level. In 2026, we plan to expand to 250+ students, continuing to prove that with the right guidance, every pawn has the potential to become a queen.</p>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-12">Our Impact</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="text-center md:text-left flex-shrink-0">
              <p className="text-5xl md:text-6xl font-bold text-maroon">$17,000+</p>
              <p className="text-muted-foreground mt-2 text-lg">Total Community Impact</p>
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                Our current $17,170 impact is a conservative estimate based on the fair market value of our classes, mentorship, partnership, and tournaments. This figure only covers teaching time and excludes the countless hours our team spends developing our curriculum, finding talented coaches, and doing administrative work.
              </p>
              <Accordion type="single" collapsible className="mt-6">
                <AccordionItem value="impact-table" className="bg-background rounded-lg card-shadow border-none">
                  <AccordionTrigger className="px-6 py-4 font-bold text-left hover:no-underline hover:bg-muted/50 rounded-lg transition-colors">
                    View Complete Impact Calculations
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Metric</TableHead>
                          <TableHead>Fair Market Rate</TableHead>
                          <TableHead className="text-right">Total Value</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Summer Session</TableCell>
                          <TableCell>87 Students (Avg 8 classes per student)</TableCell>
                          <TableCell>$20 / Class</TableCell>
                          <TableCell className="text-right">$13,920</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Charger Chess Partnership</TableCell>
                          <TableCell>20 Student Partnership (8-week program)</TableCell>
                          <TableCell>$10 / Class</TableCell>
                          <TableCell className="text-right">$1,600</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Elite Mentorship</TableCell>
                          <TableCell>8 Top-Tier Students (5 weeks to date)</TableCell>
                          <TableCell>$25 / Session</TableCell>
                          <TableCell className="text-right">$1,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Summer Tournament</TableCell>
                          <TableCell>26 Competitive Entries</TableCell>
                          <TableCell>$25 / Entry</TableCell>
                          <TableCell className="text-right">$650</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={3} className="font-bold">Grand Total</TableCell>
                          <TableCell className="text-right font-bold">$17,170</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>


      {/* Founder Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Vedh Bagare — Founder & Head Coach
            </h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4 mx-auto">
              <p>My name is Vedh Bagare, and I am a Sophomore at Brookfield East High School. I have been playing chess for most of my life and got into competitive chess a few years ago. I got into chess coaching through teaching my sister and friends. I founded this academy because when I began my competitive journey, I couldn't find any free, good coaching. I have many friends who love chess, but don't know how to improve, and through this academy, I hope to support them and give back to the chess community as a whole.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Achievements & Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg card-shadow">
                <Target className="h-5 w-5 text-maroon flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-maroon text-center mb-8">
            FAQ
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg card-shadow border-none">
                <AccordionTrigger className="px-6 py-4 font-bold text-left hover:no-underline hover:bg-muted/50 rounded-lg transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>
    </Layout>;
};
export default About;