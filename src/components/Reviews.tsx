import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Halden Ford",
      rating: 5,
      date: "9 months ago",
      text: "Jeremy and his crew are amazing. I live out of state and needed a service that I could trust to take care of my uncle's property. Jeremy took care of an overgrown nightmare (the kind you see on YouTube) and handled issues that were outside of the landscaping world. He sent progress photos and the neighbors are thrilled. Highly recommend!",
      avatar: "HF"
    },
    {
      id: 2,
      name: "Sam Levine",
      rating: 5,
      date: "a year ago",
      text: "Absolutely a fabulous job. Jeremy took our vision and made it a reality! The service was absolutely the best. We totally trusted Jeremy to the point that we didn't even get a quote for the additional work that we asked him to do. His guys stayed on the job until it was complete, even working late on the day before Christmas eve. Everything from the beautiful trees to the hardscaping came out perfect.",
      avatar: "SL"
    },
    {
      id: 3,
      name: "John Brown",
      rating: 5,
      date: "3 years ago",
      text: "Melbourne Lawn and Landscape did our new driveway and sidewalk pavers, and several landscaping projects. They have always been professional, honest (hard as hell to find in Florida!), on time, and competitive on price. I would (and do) recommend Jeremy all day long!",
      avatar: "JB"
    },
    {
      id: 4,
      name: "Jeremy Seale",
      rating: 5,
      date: "4 years ago",
      text: "The crew from Melbourne Lawn and landscaping did an excellent job installing my sod. Jeremy is a true professional, keeping his customers informed and making helpful suggestions. I highly recommend hiring Melbourne lawn and landscaping for your landscaping needs.",
      avatar: "JS"
    }
  ];

  const averageRating = 4.8;
  const totalReviews = 84;

  return (
    <section className="py-20 bg-secondary/30" id="reviews">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">{averageRating}</span>
          </div>
          <p className="text-muted-foreground">
            Based on {totalReviews} Google reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-soft hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                {/* Reviewer Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {review.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=melbourne+lawn+and+landscape&rlz=1C1UEAD_enUS1170US1170&oq=melbourne+lawn+and+landscape&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg90gEIMzMxMWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x88de1158ad369b35:0x823fc7b7a744bc8d,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
