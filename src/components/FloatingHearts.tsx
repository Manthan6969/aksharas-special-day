import { HeartIcon } from "./HeartIcon";
import { cn } from "@/lib/utils";

export const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <HeartIcon className="absolute top-20 left-10 w-4 h-4 opacity-30 heart-float" style={{ animationDelay: '0s' }} />
      <HeartIcon className="absolute top-40 right-20 w-6 h-6 opacity-20 heart-float" style={{ animationDelay: '1s' }} />
      <HeartIcon className="absolute bottom-32 left-20 w-5 h-5 opacity-25 heart-float" style={{ animationDelay: '2s' }} />
      <HeartIcon className="absolute bottom-20 right-10 w-4 h-4 opacity-30 heart-float" style={{ animationDelay: '1.5s' }} />
      <HeartIcon className="absolute top-60 left-1/3 w-3 h-3 opacity-20 heart-float" style={{ animationDelay: '0.5s' }} />
      <HeartIcon className="absolute bottom-40 right-1/3 w-7 h-7 opacity-15 heart-float" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};