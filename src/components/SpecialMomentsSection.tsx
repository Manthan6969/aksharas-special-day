import { Card } from "@/components/ui/card";
import { HeartIcon } from "./HeartIcon";

export const SpecialMomentsSection = () => {
  const moments = [
    {
      title: "First Meeting",
      description: "The day our eyes first met and I knew you were someone special",
      emoji: "✨"
    },
    {
      title: "First Date", 
      description: "Nervous butterflies, endless conversations, and the perfect beginning",
      emoji: "🌹"
    },
    {
      title: "First Kiss",
      description: "Time stood still and the world disappeared around us",
      emoji: "💋"
    },
    {
      title: "First 'I Love You'",
      description: "Three little words that changed everything forever",
      emoji: "💕"
    },
    {
      title: "Adventures Together",
      description: "Every journey becomes an adventure when you're by my side",
      emoji: "🌍"
    },
    {
      title: "Quiet Moments",
      description: "Finding peace and happiness in each other's company",
      emoji: "🏠"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <HeartIcon className="w-12 h-12 mx-auto mb-4 heart-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Beautiful Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Every moment with you is a treasure worth celebrating
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-smooth hover:transform hover:scale-105 border border-border/50"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{moment.emoji}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {moment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};