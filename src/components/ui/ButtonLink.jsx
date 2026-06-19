import { Link } from 'react-router-dom'

function ButtonLink({ href, variant = 'primary', shape = 'default', className = '', children, ...props }) {
  const variants = {
    primary:
      'bg-primary text-white hover:bg-accent active:bg-accent/80 focus-visible:outline-primary',
    secondary:
      'bg-white text-primary ring-1 ring-primary/25 hover:bg-accent hover:text-white active:bg-primary active:text-white focus-visible:outline-accent',
    'outline-white':
      'bg-transparent border border-white text-white hover:bg-white/5 active:bg-white/10 focus-visible:outline-white',
    enterprise:
      'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white active:bg-accent active:text-white focus-visible:outline-primary',
  }

  const isAbsolute = href && href.startsWith('/')
  const shapes = {
    default: 'rounded-sm',
    enterprise: 'rounded-none',
  }
  const selectedShape = shapes[shape] ?? shapes.default
  const baseClassName = `inline-flex items-center justify-center ${selectedShape} px-6 py-3 text-sm font-semibold transition-colors duration-200 ease-out sm:px-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`

  if (isAbsolute) {
    return (
      <Link
        to={href}
        className={baseClassName}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={baseClassName}
      {...props}
    >
      {children}
    </a>
  )
}

export default ButtonLink
