import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Nursing Student",
    content: "Tasha helped me pass my HESI exam on the first attempt! Her personalized approach and deep knowledge of the exam content made all the difference. I went from being stressed and unprepared to confident and successful.",
    rating: 5,
    exam: "HESI",
  },
  {
    name: "Marcus Williams",
    role: "Healthcare Professional",
    content: "I was struggling with the TEAS exam after two failed attempts. Tasha's strategies and one-on-one sessions completely transformed my understanding. I scored in the 90th percentile on my third try!",
    rating: 5,
    exam: "TEAS",
  },
  {
    name: "Jennifer Chen",
    role: "Working Professional",
    content: "As an adult learner, I needed flexible support for my GED. Tasha's online classes fit perfectly into my busy schedule, and her patient teaching style helped me earn my diploma in just 3 months.",
    rating: 5,
    exam: "GED",
  },
  {
    name: "David Thompson",
    role: "Pre-Med Student",
    content: "The level of expertise and dedication Tasha brings is incredible. She doesn't just help you pass—she helps you truly understand the material. My HESI score exceeded my expectations!",
    rating: 5,
    exam: "HESI",
  },
  {
    name: "Ashley Rivera",
    role: "Nursing School Applicant",
    content: "I was terrified of the math section on TEAS. Tasha broke down complex concepts into easy-to-understand lessons. Her encouragement kept me motivated throughout my preparation journey.",
    rating: 5,
    exam: "TEAS",
  },
  {
    name: "Michael Brown",
    role: "Career Changer",
    content: "At 35, I thought it was too late to get my GED. Tasha proved me wrong. Her supportive approach and customized study plan helped me achieve something I never thought possible.",
    rating: 5,
    exam: "GED",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Students Who Achieved{" "}
            <span className="text-gradient-success">Their Dreams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful students who transformed their academic journey with TashaTheWriter.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Exam Badge */}
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {testimonial.exam} Success
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-background font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};