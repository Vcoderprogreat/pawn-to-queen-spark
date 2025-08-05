import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImage from "@/assets/chess-hero-bg.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Pawn to Queen Chess Coaching
          </h1>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            <p className="mb-4">
              Our mission is to provide <span className="text-maroon font-semibold">free, high-quality chess coaching</span> for players of all levels.
            </p>
            <p className="mb-4">
              Our state champion coaches create personalized lessons and work closely with each student to strengthen every part of their game.
            </p>
            <p>
              We aim to inspire and train the next generation of chess players—and create <span className="text-maroon font-semibold">future state champions</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="slide-in-up">
              <div className="text-4xl font-bold text-maroon mb-2">12</div>
              <div className="text-muted-foreground">Expert Coaches</div>
            </div>
            <div className="slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-maroon mb-2">80+</div>
              <div className="text-muted-foreground">Students Coached</div>
            </div>
            <div className="slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-maroon mb-2">10+</div>
              <div className="text-muted-foreground">Partner Schools</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;