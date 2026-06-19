import { Button } from 'primereact/button'

export const APP_BUTTON_BASE_CLASS = 'app-btn'

export const APP_BUTTON_VARIANT_CLASS = {
  primary: 'app-btn-primary',
  secondary: 'app-btn-secondary',
  'outline-white': 'app-btn-outline-white',
  enterprise: 'app-btn-secondary',
}

export function mergeAppButtonClassName(variant = 'primary', className = '', size) {
  const variantClass = APP_BUTTON_VARIANT_CLASS[variant] ?? APP_BUTTON_VARIANT_CLASS.primary
  const sizeClass = size === 'small' ? 'app-btn-sm' : ''

  return [APP_BUTTON_BASE_CLASS, variantClass, sizeClass, className].filter(Boolean).join(' ')
}

function AppButton({ variant = 'primary', size, className = '', ...props }) {
  return (
    <Button
      {...props}
      className={mergeAppButtonClassName(variant, className, size)}
    />
  )
}

export default AppButton
