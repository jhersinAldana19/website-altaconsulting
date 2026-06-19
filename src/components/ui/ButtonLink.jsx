import { useNavigate } from 'react-router-dom'
import AppButton from './AppButton'

const VARIANT_PROPS = {
  primary: { outlined: false },
  secondary: { outlined: true, severity: 'secondary' },
  'outline-white': { outlined: true },
  enterprise: { outlined: true },
}

function ButtonLink({ href, variant = 'primary', size, className = '', children, target, rel, ...props }) {
  const navigate = useNavigate()
  const variantConfig = VARIANT_PROPS[variant] ?? VARIANT_PROPS.primary
  const label = typeof children === 'string' ? children : undefined

  const handleClick = () => {
    if (!href) return

    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    if (target === '_blank') {
      window.open(href, '_blank', rel?.includes('noopener') ? 'noopener,noreferrer' : undefined)
      return
    }

    window.location.href = href
  }

  return (
    <AppButton
      type="button"
      variant={variant}
      size={size}
      label={label}
      {...variantConfig}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {!label ? children : undefined}
    </AppButton>
  )
}

export default ButtonLink
