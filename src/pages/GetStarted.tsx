import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";
const GetStarted = () => {
  const testimonials = [{
    quote: "Vedh and all the coaches have been great chess mentors this summer. The classes were very well organized and the curriculum was planned with detail. My son learned some great chess skills, and we definitely saw his game improve over the summer.",
    author: "Parent of Intermediate Student",
    role: ""
  }, {
    quote: "My daughter's teacher was very professional and answered all questions. We took a vacation halfway through the summer session, and Vedh made sure to provide us with the resources to make sure she didn't fall behind. I will definitely sign up my daughter again next year.",
    author: "Parent of Beginner Student",
    role: ""
  }, {
    quote: "We were thrilled to hear of this summer chess opportunity offered from an experienced high schooler. My son learned new openings, middlegame strategies, and detailed endgame skills that he can use in future tournaments.",
    author: "Parent of Advanced Student",
    role: ""
  }];
  return <Layout>
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get Started with Pawn to Queen Chess Coaching
          </h1>
          <p className="text-xl text-muted-foreground">
            Begin your child's chess journey with expert coaching at no cost
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What Parents Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="card-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-maroon mb-4" />
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-primary text-sm">{testimonial.author}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="card-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-maroon mb-4">
                Ready to Begin? Register Your Child Today
              </CardTitle>
              <p className="text-muted-foreground leading-relaxed">More information about class placement and class scheduling will be sent as the summer session approaches. If your child doesn't have a Lichess Username, please create an account for free at Lichess.org. If your child does not have a USCF Rating, please put "None" and if your child is unrated, please put "Unrated". For any questions related to registration, please contact Vedh.bagare@gmail.com</p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="bg-background rounded-lg border border-muted p-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary">
                  Registration Form
                </h2>
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-3xl">
                    <iframe src="https://tally.so/embed/wAX9ZW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="765" frameBorder="0" marginHeight={0} marginWidth={0} title="Registration form" className="rounded-lg border"></iframe>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>;
};
export default GetStarted;
