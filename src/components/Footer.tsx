import { HeartIcon } from "./HeartIcon";

export const Footer = () => {
  return (
    <footer className="gradient-romantic py-12 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <HeartIcon className="w-8 h-8 mx-auto mb-4 heart-pulse" />
          <h3 className="text-2xl font-bold mb-2">Happy Girlfriend's Day, Akshara!</h3>
          <p className="text-white/90">
            Every day with you feels like a celebration of love
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Made with <HeartIcon className="w-4 h-4" /> for the most amazing girlfriend in the world
          </p>
        </div>
      </div>
    </footer>
  );
};