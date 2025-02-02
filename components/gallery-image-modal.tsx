'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { ImageType } from '@/lib/types/image'
import { Button } from '@/components/ui/button'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

type GalleryImageModalProps = {
  image: ImageType | null
  onClose: () => void
}

export function GalleryImageModal({ image, onClose }: GalleryImageModalProps) {
  if (!image) return null

  return (
    <Dialog open={!!image} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{image.title}</DialogTitle>
        </VisuallyHidden>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">{image.title}</h2>
            <p className="text-muted-foreground mb-4">{image.description}</p>
            <div className="flex gap-2">
              {image.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="mt-4 self-start" 
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}