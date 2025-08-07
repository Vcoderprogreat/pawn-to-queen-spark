import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

const GetStarted = () => {
  const testimonials = [
    {
      quote: "The personalized coaching helped my daughter improve her game dramatically. The coaches are patient and knowledgeable.",
      author: "Parent Testimonial 1",
      role: "Parent of Elementary Student"
    },
    {
      quote: "Free quality coaching that actually works! My son went from beginner to winning school tournaments in just one semester.",
      author: "Parent Testimonial 2", 
      role: "Parent of Middle School Student"
    },
    {
      quote: "The tournament preparation and psychological training gave my child confidence both on and off the chessboard.",
      author: "Parent Testimonial 3",
      role: "Parent of High School Student"
    },
    {
      quote: "Excellent program with dedicated coaches who truly care about each student's development and progress.",
      author: "Parent Testimonial 4",
      role: "Parent of Advanced Student"
    },
    {
      quote: "My child looks forward to chess lessons every week. The coaches make learning fun and engaging.",
      author: "Parent Testimonial 5",
      role: "Parent of Beginner Student"
    },
    {
      quote: "Outstanding coaching that helped develop not just chess skills, but critical thinking and problem-solving abilities.",
      author: "Parent Testimonial 6",
      role: "Parent of Intermediate Student"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
            Get Started with Pawn to Queen Chess Coaching
          </h1>
          <p className="text-xl text-muted-foreground fade-in" style={{ animationDelay: '0.3s' }}>
            Begin your child's chess journey with expert coaching at no cost
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 fade-in">
            What Parents Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-shadow slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="card-shadow slide-in-up">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-maroon mb-4">
                Ready to Begin? Register Your Child Today
              </CardTitle>
              <p className="text-muted-foreground leading-relaxed">
                Join our community of chess learners and give your child the opportunity to develop 
                critical thinking skills, strategic planning abilities, and confidence through chess. 
                More information about class placement and class scheduling will be sent as the summer session approaches.
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
  <div className="bg-background rounded-lg border border-muted p-6">
    <h2 className="text-2xl font-bold text-center mb-6 text-primary">
      Registration Form
    </h2>
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl">
        <iframe
          data-tally-src="https://tally.so/embed/wAX9ZW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="765"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Registration form"
        ></iframe>
      </div>
    </div>
  </div>
  <script>
    {`
      var d=document,
      w="https://tally.so/widgets/embed.js",
      v=function(){
        "undefined"!=typeof Tally?Tally.loadEmbeds():
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
          e.src=e.dataset.tallySrc;
        });
      };
      if("undefined"!=typeof Tally) v();
      else if(d.querySelector('script[src="'+w+'"]')==null){
        var s=d.createElement("script");
        s.src=w;
        s.onload=v;
        s.onerror=v;
        d.body.appendChild(s);
      }
    `}
  </script>
</CardContent>

              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                  Questions about registration? Email us at{" "}
                  <a href="mailto:Vedh.bagare@gmail.com" className="text-maroon hover:underline">
                    Vedh.bagare@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;