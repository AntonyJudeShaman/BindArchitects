import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea2 = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
      className={cn(
        "flex h-40 mt-2 text-md w-full rounded-md border border-zinc-600 bg-transparent px-3 py-2  ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus:border-b focus:border-blue-900 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
    
    )
  }
)
Textarea2.displayName = "Textarea"

export { Textarea2 }
