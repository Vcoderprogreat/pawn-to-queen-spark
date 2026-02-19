import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        </div>
      </section>

      {/* Cost & Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-3">
                Cost & Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are proud to provide this partnership and instruction valued at $1,600 to Chargers Chess at no cost. This enables the team to put funds toward giving scholarships to their players, enabling a larger tournament presence to low-income students who otherwise wouldn't be able to attend.
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>The team sponsored 6 members to the All-Girls Tournament at USM, where they all placed in their respective sections.</li>
                <li>The saved funds allowed the Chargers Team to host their own tournament earlier this year, where they had over 70 players attend.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;
