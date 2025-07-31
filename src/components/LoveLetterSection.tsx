import { Card } from "@/components/ui/card";
import { HeartIcon } from "./HeartIcon";

export const LoveLetterSection = () => {
  return (
    <section className="py-20 px-6 gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <HeartIcon className="w-12 h-12 mx-auto mb-4 heart-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            A Letter From My Heart
          </h2>
          <p className="text-lg text-muted-foreground">
            Words that come straight from my soul to yours
          </p>
        </div>
        
        <Card className="glow-soft border-0 gradient-romantic p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <p className="text-2xl font-light mb-2">My Dearest Akshara,</p>
            <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              From the moment you walked into my life, everything changed. Your presence 
              brings warmth to the coldest days and light to the darkest nights. Every laugh we share, 
              every conversation we have, every moment we spend together becomes a treasured memory.
            </p>
            
            <p>
              You have this incredible way of making ordinary moments feel extraordinary. 
              Whether we're sharing a quiet dinner, taking long walks, or simply sitting together in comfortable silence, 
              every second with you feels like a gift.
            </p>
            
            <p>
              Your kindness touches everyone around you, your strength inspires me daily, 
              and your love fills my heart with a happiness I never knew was possible. 
              You're not just my girlfriend, you're my best friend, my confidante, and my greatest love.
            </p>
            
            <p>
              Thank you for being you - beautiful, intelligent, caring, and absolutely perfect in every way. 
              Thank you for choosing to share your life with me and for making me the luckiest person in the world.
            </p>
          </div>
          
          <div className="text-center mt-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HeartIcon className="w-6 h-6" />
              <span className="text-xl">Forever yours,</span>
              <HeartIcon className="w-6 h-6" />
            </div>
            <div className="text-2xl font-light">With all my love ❤️</div>
          </div>
        </Card>
      </div>
    </section>
  );
};