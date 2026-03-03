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

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            As Pawn to Queen grows, we are building partnerships with districts and chess programs to expand our impact. At its core, a partnership means we work alongside an existing or new chess program to help students reach the next level.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Our primary model is sending one of our experienced coaches to deliver in-person lessons using our standardized curriculum. Because most of our coaches are based in Wisconsin, we also offer flexible alternatives like training a program's existing instructor into a proper coach and providing them with our full curriculum to elevate their teaching.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            We work closely with every program to customize the partnership to their needs, and we are always flexible with our offerings.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            Our partnerships have been incredibly successful so far. Below is a look at our inaugural partnership, where we transformed a team that didn't exist six months ago into a top team in the region and creating several WI Grade Level Champions in the process.
          </p>

          {/* Chargers Chess Partnership */}
          <h2 className="text-3xl font-bold text-primary mb-4">Chargers Chess — Hamilton School District</h2>

          {/* Cost & Impact */}
          <h3 className="text-xl font-bold text-primary mb-4 mt-10">Cost & Impact</h3>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            We are proud to provide this partnership and instruction valued at $1,600 to Chargers Chess at no cost. This enables the team to put funds toward giving scholarships to their players, enabling a larger tournament presence.
          </p>
          <ul className="space-y-2 mb-16 list-disc list-inside text-muted-foreground text-lg">
            <li>The team sponsored 6 members to the All-Girls Tournament at USM, where they all placed in their respective sections.</li>
            <li>The saved funds allowed the Chargers Team to host their own tournament earlier this year, where they had over 70 players attend.</li>
            <li>The team competed at the 2026 WI Grade Level Championship and had 7 players place, including 1st in multiple grades.</li>
            <li>The team brings home team trophies from almost all regional tournaments and has become a top team in Southeastern WI.</li>
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
