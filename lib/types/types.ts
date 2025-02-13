// TypeScript interface for Success Story
export interface SuccessStory {
  id: string
  title: string
  shortDescription: string
  fullStory: string
  image: string
  author?: string
  date?: string

  tags?: string[] // Added optional tags property
  category?: string // Added category property
  story?: string // Added story property
}

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string;
  callToAction: string;
  callToActionText: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  animationType: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}