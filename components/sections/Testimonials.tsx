import Card from "../Card";

const testimonials = [
  {
    quote:
      "CapTap helped me get the funding I needed to expand my restaurant. The process was incredibly fast and the team was supportive every step of the way.",
    name: "Maria Rodriguez",
    title: "Owner, El Sol Mexican Grill",
    image: null,
  },
  {
    quote:
      "As a seasonal business, traditional banks wouldn't work with me. CapTap understood my needs and provided flexible funding that works with my cash flow.",
    name: "James Chen",
    title: "Owner, Lakeside Marina",
    image: null,
  },
  {
    quote:
      "I was skeptical at first, but CapTap delivered exactly what they promised. I had the funds in my account within 48 hours of applying.",
    name: "Sarah Thompson",
    title: "Founder, Bloom Floral Design",
    image: null,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
            about their experience with CapTap.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 italic mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
