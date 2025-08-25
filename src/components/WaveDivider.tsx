interface WaveDividerProps {
  variant?: 'top' | 'bottom'
  className?: string
}

export function WaveDivider({ variant = 'bottom', className = '' }: WaveDividerProps) {
  const isTop = variant === 'top'
  
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        className={`w-full h-16 ${isTop ? 'rotate-180' : ''} animate-wave-gentle`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
          className="fill-background/50"
        />
        <path
          d="M0,80 C200,140 400,20 600,80 C800,140 1000,20 1200,80 L1200,120 L0,120 Z"
          className="fill-background/80"
        />
        <path
          d="M0,100 C300,160 500,40 600,100 C700,160 900,40 1200,100 L1200,120 L0,120 Z"
          className="fill-background"
        />
      </svg>
    </div>
  )
}