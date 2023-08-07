import { useRef } from "react"
import { useState } from "react"

export default function IconButton({ children, text, color, link, ...props }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex p-3 gap-1 mx-3 items-center rounded-lg
        text-white ${color || "bg-gray-600"}
      `}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
    </a>
  )
}