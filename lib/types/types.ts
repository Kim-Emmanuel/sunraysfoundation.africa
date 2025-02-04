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