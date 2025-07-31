import { Button } from "@/components/ui/button";
import { HeartIcon } from "./HeartIcon";
import { FloatingHearts } from "./FloatingHearts";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Floating Hearts */}
      <FloatingHearts />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up">
          <HeartIcon className="w-20 h-20 mx-auto mb-6 heart-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
            Happy Girlfriend's Day
          </h1>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6">
            Beautiful Akshara
          </h2>
        </div>
        
        {/* Love Message */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            To the most amazing girlfriend in the world, Akshara. Your smile lights up my days, 
            your laughter fills my heart with joy, and your love makes every moment magical. ✨
          </p>
          <div className="flex items-center justify-center gap-2 text-lg text-primary">
            <HeartIcon className="w-6 h-6 animate" />
            <span className="font-medium">You mean everything to me</span>
            <HeartIcon className="w-6 h-6 animate" />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="romantic" size="lg" className="text-lg px-8 py-6">
            <HeartIcon className="w-5 h-5 mr-2" />
            Read My Love Letter
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Our Memories
          </Button>
        </div>
      </div>
    </section>
  );
};