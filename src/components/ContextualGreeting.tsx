import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ContextualGreeting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [emoji, setEmoji] = useState("👋");

  const getContextualGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const month = now.getMonth();
    const date = now.getDate();

    // Special dates first
    if (month === 11 && date === 25) {
      return { text: "Merry Christmas! 🎄", emoji: "🎄" };
    }
    if (month === 0 && date === 1) {
      return { text: "Happy New Year! 🎊", emoji: "🎊" };
    }
    if (month === 9 && date === 31) {
      return { text: "Happy Halloween! 🎃", emoji: "🎃" };
    }
    // Add your birthday here - example: June 15th
    if (month === 5 && date === 15) {
      return { text: "It's my birthday! 🎂", emoji: "🎂" };
    }

    // Day-based greetings
    if (day === 1) { // Monday
      const greetings = [
        "Starting the week with a portfolio visit? I like your style.",
        "Monday's rough, maybe some cool projects will help.",
        "If Monday's a climb, consider this a scenic stop."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "💪" };
    }
    if (day === 5) { // Friday
      const greetings = [
        "Friday feels, thanks for ending the week here.",
        "Before the weekend kicks in, take a look around.",
        "Friday and you're browsing portfolios? That's dedication."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "🎉" };
    }
    if (day === 0 || day === 6) { // Weekend
      const greetings = [
        "Weekend mode, perfect time to wander through some creative work.",
        "Thanks for stopping by, even on your weekend.",
        "Weekend visits are my favorite, no rush, just vibes."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "😌" };
    }

    // Time-based greetings
    if (hour >= 5 && hour < 8) {
      const greetings = [
        "You're up early, checking out portfolios before the world wakes up?",
        "Morning already? Glad you stopped by my little corner of the internet.",
        "Early start, huh? Let's see if my work can keep you awake."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "🌅" };
    }

    if (hour >= 8 && hour < 12) {
      const greetings = [
        "Good morning, perfect time to browse through some projects.",
        "Morning! Coffee in one hand, portfolio in the other?",
        "Morning, thanks for swinging by before the day gets too busy."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "☀️" };
    }

    if (hour >= 12 && hour < 14) {
      const greetings = [
        "Lunch break scroll? I'll try to make it worth it.",
        "Taking a break? Let's make it a creative one.",
        "Lunch time and you're here, I'm flattered."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "🍽️" };
    }

    if (hour >= 14 && hour < 18) {
      const greetings = [
        "Hey, glad you stopped by. Let me show you what I've been working on.",
        "Afternoon visits are the best, fresh eyes, fresh ideas.",
        "Hope your day's going well. Let's make it a bit more inspiring."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "🌤️" };
    }

    if (hour >= 18 && hour < 21) {
      const greetings = [
        "Evening, perfect time to explore something new.",
        "Glad you're here, let's make your night a bit more interesting.",
        "Evening scroll? I've got some work you might like."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "🌆" };
    }

    if (hour >= 21 && hour < 24) {
      const greetings = [
        "Burning the midnight oil? Me too, check this out.",
        "Late night browsing, I respect that.",
        "You're here when most people are asleep. That's dedication."
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "🌙" };
    }

    // After midnight (0-5 AM)
    const greetings = [
      "It's past midnight and you're here, love the commitment.",
      "Guess we're both awake when we probably shouldn't be.",
      "This is prime creative hour, welcome."
    ];
    return { text: greetings[Math.floor(Math.random() * greetings.length)], emoji: "🌃" };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const { text, emoji: greetingEmoji } = getContextualGreeting();
      setGreeting(text);
      setEmoji(greetingEmoji);
      setIsVisible(true);
    }, 2500); // Show after 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const autoHideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 30000); // Auto-hide after 30 seconds

      return () => clearTimeout(autoHideTimer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-xs"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.9,
            transition: { duration: 0.2 }
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.4
          }}
        >
          {/* Chat Bubble */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 pr-7 sm:pr-8 transition-colors duration-300">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-2 sm:gap-3">
              {/* Avatar/Emoji */}
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm">
                {emoji}
              </div>

              {/* Message */}
              <div className="flex-1 pt-0.5 sm:pt-1">
                <p className="text-gray-900 dark:text-white text-xs sm:text-sm font-medium leading-relaxed">
                  {greeting}
                </p>
              </div>
            </div>

            {/* Chat Bubble Tail */}
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
              <div className="absolute -top-px left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-7 border-r-7 border-t-7 border-l-transparent border-r-transparent border-t-gray-200"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContextualGreeting;