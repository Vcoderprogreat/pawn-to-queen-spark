import Layout from "@/components/Layout";


const Partnerships = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Partnerships
          </h1>
        </div>
      </section>

      {/* Chargers Chess Partnership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Chargers Chess — Hamilton School District
          </h2>
          <p className="text-sm font-medium text-maroon mb-6 uppercase tracking-wider">
            Inaugural Partnership · 8-Week Pilot Program
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            Every week, one of our coaches goes to Hamilton High School to deliver a live lesson to around 20 students. The majority of our students are intermediates, and we work to develop the skills to help them reach the advanced level.
          </p>

          {/* Class Breakdown */}
          <h3 className="text-xl font-bold text-primary mb-4">A Typical 1-Hour Class</h3>
          <ul className="space-y-2 mb-16 list-disc list-inside text-muted-foreground text-lg">
            <li>5-minute puzzle warmup</li>
            <li>15 minutes teaching openings</li>
            <li>15 minutes teaching endgames</li>
            <li>10 minutes on a focus skill (positional play, calculation, attacking, defending & more)</li>
            <li>15 minutes of guided playing time</li>
          </ul>

          {/* Cost & Impact */}
          <h3 className="text-xl font-bold text-primary mb-4">Cost & Impact</h3>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            We are proud to provide this partnership and instruction valued at $1,600 to Chargers Chess at no cost. This enables the team to put funds toward giving scholarships to their players, enabling a larger tournament presence.
          </p>
          <ul className="space-y-2 mb-16 list-disc list-inside text-muted-foreground text-lg">
            <li>The team sponsored 6 members to the All-Girls Tournament at USM, where they all placed in their respective sections.</li>
            <li>The saved funds allowed the Chargers Team to host their own tournament earlier this year, where they had over 70 players attend.</li>
          </ul>

          {/* Testimonial */}
          <h3 className="text-xl font-bold text-primary mb-4">What Our Partners Say</h3>
          <p className="text-muted-foreground leading-relaxed text-lg italic mb-4">
            "Before Pawn to Queen, Chargers Chess functioned more like a casual club where players came to just play, but during our partnership, it became more like a proper team. Students now spend the meetings learning from the standardized curriculum, and I have seen firsthand the impact it has had on the students. The majority of our students went on to compete and win at regional WSCF tournaments, including students who previously only played casually. Our main coach Vedh has gone above and beyond in all the classes and kept all the kids engaged through asking questions to the class and giving everyone a chance to participate. The parents and I have been incredibly impressed with the quality and results of the partnership, especially because it was provided at no cost to the team. The partnership itself was pretty straightforward to set up, and the organization was very flexible even as we dealt with a location change. I would definitely recommend Pawn to Queen to any districts and teams looking to grow their program and improve tournament performance."
          </p>
          <p className="text-lg font-semibold text-primary">— Balaji Narayanan</p>
          <p className="text-sm text-muted-foreground">Program Director</p>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;
