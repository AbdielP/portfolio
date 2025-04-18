import { ReactNode } from 'react'

interface IconBoxProps {
  children: ReactNode
  title: string
}

export const IconBox = ({ children, title }: IconBoxProps) => {
  return (
    <div className="w-[33.33%] sm:w-[25%] md:w-[16.66%] max-w-[120px] flex justify-center items-center">
      <div
        className="text-5xl md:text-6xl border border-primary rounded-md px-6 py-4 md:px-8 md:py-6 backdrop-blur-sm hover:scale-[1.05] transition-all duration-200"
        title={title}
      >
        {children}
      </div>
    </div>
  )
}
