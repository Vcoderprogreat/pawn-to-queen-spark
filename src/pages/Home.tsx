import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
const Home = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto">
          {/* Left Content */}
          <div className="fade-in max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 leading-tight">
              Pawn to Queen<br />
              Chess Coaching
            </h1>
            
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 space-y-4">
              <p>
                Our mission is to provide <span className="text-maroon font-semibold">free, high-quality chess coaching</span> for players of all levels.
              </p>
              <p>Our state champion and national finalist coaches create <span className="text-maroon font-semibold">personalized lessons</span> and work closely with each student to master every part of their game.</p>
              <p>
                We aim to inspire and train the next generation of chess players—and create <span className="text-maroon font-semibold">future state champions</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" className="bg-maroon hover:bg-maroon-dark smooth-transition">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-maroon text-maroon hover:bg-maroon-light smooth-transition">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="slide-in-up">
              <div className="text-6xl md:text-7xl font-extrabold text-maroon mb-4">12</div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">Expert Coaches</div>
            </div>
            <div className="slide-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-6xl md:text-7xl font-extrabold text-maroon mb-4">80+</div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">Students Coached</div>
            </div>
            <div className="slide-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <div className="text-6xl md:text-7xl font-extrabold text-maroon mb-4">10+</div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">Partner Schools</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Home;