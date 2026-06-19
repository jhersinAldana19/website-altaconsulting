const WHATSAPP_NUMBER = '51941521259'
const WHATSAPP_MESSAGE = 'Hola, quiero consultar sobre sus servicios.'

function WhatsAppFloatButton() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1fba57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.21c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.66.15-.19.28-.76.92-.93 1.1-.17.2-.34.22-.62.08-.29-.14-1.2-.45-2.28-1.44-.84-.75-1.4-1.68-1.57-1.96-.16-.29-.02-.44.12-.58.13-.12.29-.31.43-.46.14-.15.19-.26.28-.44.1-.2.05-.36-.02-.5-.07-.14-.66-1.58-.9-2.17-.24-.57-.49-.49-.66-.49l-.56-.01c-.2 0-.5.07-.76.36-.26.28-1 1-.99 2.43.01 1.43 1.03 2.81 1.17 3 .14.2 2.02 3.08 4.9 4.32.69.3 1.23.48 1.64.61.68.22 1.3.19 1.79.12.54-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" />
        <path d="M27.3 4.68A15.9 15.9 0 0 0 16.03 0C7.21 0 .03 7.17.03 16c0 2.81.73 5.55 2.13 7.98L0 32l8.23-2.14A15.9 15.9 0 0 0 16.02 32h.01c8.82 0 16-7.18 16-16 0-4.27-1.67-8.29-4.73-11.32ZM16.04 29.3h-.01a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.88 1.27 1.31-4.76-.31-.49a13.2 13.2 0 0 1-2.03-7.05c0-7.29 5.93-13.21 13.23-13.21 3.52 0 6.83 1.36 9.31 3.84a13.1 13.1 0 0 1 3.87 9.32c0 7.3-5.93 13.2-13.23 13.2Z" />
      </svg>
    </a>
  )
}

export default WhatsAppFloatButton
