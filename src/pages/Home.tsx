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
              <p>Our <span className="text-maroon font-semibold">state champion and national finalist coaches</span> create personalized lessons and work closely with each student to master every part of their game.</p>
              <p>
                We're here to <span className="text-maroon font-semibold">train the next generation</span> of chess players and create future state champions.
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
            <div>
              <div className="text-6xl md:text-7xl font-extrabold text-maroon mb-4">12</div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">Expert Coaches</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-extrabold text-maroon mb-4">80+</div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">Students Coached</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-extrabold text-maroon mb-4">130+</div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">Classes Taught</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
  <section className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-[#6B0F1A] mb-10">
      Parent Testimonials
    </h2>

    {/* Grid of Testimonials */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
        <h3 className="font-semibold text-[#6B0F1A] mb-3">Priya S.</h3>
        <p className="text-gray-700">
          “My son looks forward to every class! The coaches are patient and
          explain concepts clearly. I’ve seen his confidence grow both in chess
          and outside of it.”
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
        <h3 className="font-semibold text-[#6B0F1A] mb-3">David R.</h3>
        <p className="text-gray-700">
          “The personalized attention is incredible. Even though the academy is
          free, the quality feels top-tier. My daughter has already improved in
          her tournament play.”
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
        <h3 className="font-semibold text-[#6B0F1A] mb-3">Maria L.</h3>
        <p className="text-gray-700">
          “I appreciate how flexible the classes are. It makes it easy to keep
          my child engaged with chess even with a busy schedule.”
        </p>
      </div>

      {/* Testimonial 4 */}
      <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
        <h3 className="font-semibold text-[#6B0F1A] mb-3">Jason K.</h3>
        <p className="text-gray-700">
          “The end-of-session tournament was a highlight! My son learned so much
          and had a great time competing with his peers.”
        </p>
      </div>

      {/* Testimonial 5 */}
      <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
        <h3 className="font-semibold text-[#6B0F1A] mb-3">Anita B.</h3>
        <p className="text-gray-700">
          “This program goes above and beyond. My daughter’s understanding of
          strategy has improved tremendously.”
        </p>
      </div>

      {/* Testimonial 6 */}
      <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
        <h3 className="font-semibold text-[#6B0F1A] mb-3">Chris T.</h3>
        <p className="text-gray-700">
          “It’s rare to find free coaching of this quality. The dedication of
          the coaches really shows in the progress the kids make.”
        </p>
      </div>
    </div>
  </div>
</section>
};
export default Home;