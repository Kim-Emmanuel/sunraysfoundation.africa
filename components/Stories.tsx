"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Tag, Folder } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { SuccessStory } from "@/lib/types/types";
import { useWindowSize } from "@/hooks/useWindowSize";

interface StoriesProps {
  stories: SuccessStory[];
}

export default function Stories({ stories }: StoriesProps) {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();

  // Improved responsive breakpoints
  const getVisibleStories = useCallback(() => {
    if (!width) return 1;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 3; // Show 3 stories on larger devices
  }, [width]);

  const visibleStories = getVisibleStories();

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (
      (prevIndex + 1) % Math.max(1, stories.length - visibleStories + 1)
    ));
  }, [stories.length, visibleStories]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (
      prevIndex === 0 
        ? Math.max(0, stories.length - visibleStories) 
        : prevIndex - 1
    ));
  }, [stories.length, visibleStories]);

  const getVisibleStoriesArray = useCallback(() => {
    return stories.slice(currentIndex, currentIndex + visibleStories);
  }, [currentIndex, visibleStories, stories]);

  return (
    <section className="relative max-w-[1440px] bg-[#e5ead3] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray">
        Success Stories
      </h1>

      <div className="relative flex items-center">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={currentIndex === 0}
          aria-label="Previous stories"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        {/* Stories Grid */}
        <div className="w-full overflow-hidden px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {getVisibleStoriesArray().map((story, index) => (
                <StoryCard 
                  key={`${story.id}-${index}`}
                  story={story}
                  onSelect={() => setSelectedStory(story)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={currentIndex >= stories.length - visibleStories}
          aria-label="Next stories"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>

      {/* Story Detail Modal */}
      <StoryDetailModal 
        story={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />
    </section>
  );
}

// Extracted StoryCard component for better organization
const StoryCard = ({ story, onSelect }: { story: SuccessStory; onSelect: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="w-full"
    onClick={onSelect}
  >
    <Card className="cursor-pointer group hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <CardContent className="p-4 relative aspect-[3/4]">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover rounded-md md:w-[340px] md:h-[480px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-md" />
        <div className="absolute bottom-0 p-4 z-10 w-full">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {story.title}
          </h3>
          <p className="text-sm text-white/90 line-clamp-2 mb-3">
            {story.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {story.tags?.map((tag, index) => (
              <span key={index} className="text-sm text-white/80 flex items-center">
                <Tag className="w-4 h-4 mr-1" /> {tag}
              </span>
            )) ?? []}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Extracted StoryDetailModal component
const StoryDetailModal = ({ 
  story, 
  onClose 
}: { 
  story: SuccessStory | null; 
  onClose: () => void;
}) => (
  <Dialog open={!!story} onOpenChange={onClose}>
    <DialogContent className="max-w-6xl">
      {story && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              {story.title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="relative h-96">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="relative">
              <Quote
                className="absolute -top-8 -left-8 text-primary/20 w-24 h-24"
                strokeWidth={1}
              />
              <p className="text-lg leading-relaxed relative z-10">
                {story.fullStory}
              </p>
              {story.author && (
                <div className="mt-4 text-sm text-muted-foreground">
                  — {story.author}
                </div>
              )}
              {story.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-primary flex items-center"
                    >
                      <Tag className="w-4 h-4 mr-1" /> {tag}
                    </span>
                  ))}
                </div>
              )}
              {story.category && (
                <div className="mt-4 text-sm text-muted-foreground flex items-center">
                  <Folder className="w-4 h-4 mr-1" />{" "}
                  {story.category}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </DialogContent>
  </Dialog>
);
