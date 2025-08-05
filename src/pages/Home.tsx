export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-[#6B0F1A] leading-tight mb-6">
              Pawn to Queen
              <br />
              Chess Coaching
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Our mission is to provide free, high-quality chess coaching for
              players of all levels. Our state champion coaches create
              personalized lessons and work closely with each student to
              strengthen every part of their game.
            </p>
          </div>

          {/* Right Side Placeholder Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="w-72 h-72 bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">[Add Chess Image Here]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-[#6B0F1A]">12</p>
            <p className="text-gray-700 mt-2">Coaches</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#6B0F1A]">80+</p>
            <p className="text-gray-700 mt-2">Students</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#6B0F1A]">10+</p>
            <p className="text-gray-700 mt-2">Schools</p>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
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
                explain concepts clearly. I’ve seen his confidence grow both in
                chess and outside of it.”
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-[#6B0F1A] mb-3">David R.</h3>
              <p className="text-gray-700">
                “The personalized attention is incredible. Even though the
                academy is free, the quality feels top-tier. My daughter has
                already improved in her tournament play.”
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-[#6B0F1A] mb-3">Maria L.</h3>
              <p className="text-gray-700">
                “I appreciate how flexible the classes are. It makes it easy to
                keep my child engaged with chess even with a busy schedule.”
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-[#6B0F1A] mb-3">Jason K.</h3>
              <p className="text-gray-700">
                “The end-of-session tournament was a highlight! My son learned so
                much and had a great time competing with his peers.”
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-[#6B0F1A] mb-3">Anita B.</h3>
              <p className="text-gray-700">
                “This program goes above and beyond. My daughter’s understanding
                of strategy has improved tremendously.”
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="border-2 border-[#6B0F1A] rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-[#6B0F1A] mb-3">Chris T.</h3>
              <p className="text-gray-700">
                “It’s rare to find free coaching of this quality. The dedication
                of the coaches really shows in the progress the kids make.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
