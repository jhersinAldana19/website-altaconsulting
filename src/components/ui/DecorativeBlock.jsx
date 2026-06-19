import React from 'react'

/**
 * DecorativeBlock
 * Reusable decorative geometric block using CSS accent variables.
 * Props:
 * - className: Tailwind size/position classes (absolute positioning expected)
 * - shade: one of '18','16','14','12' to pick CSS variable --accent-XX
 */
function DecorativeBlock({ className = '', shade = '18' }) {
  const varName = `--accent-${shade}`
  const style = {
    background: `linear-gradient(135deg, var(${varName}) 0%, transparent 100%)`,
  }

  return <div aria-hidden className={`pointer-events-none absolute ${className}`} style={style} />
}

export default DecorativeBlock
