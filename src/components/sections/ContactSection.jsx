import { useState } from 'react'
import { Phone } from 'lucide-react'
import AppButton from '../ui/AppButton'
import contactFormImage from '../../assets/contact/imagen_formulario.webp'
import contactSuccessImage from '../../assets/contact/información_enviada.webp'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_WEB_APP_URL ?? ''

const INITIAL_FORM = {
  nombres: '',
  apellidos: '',
  correo: '',
  telefono: '',
  empresa: '',
  ruc: '',
  mensaje: '',
  politicasAceptadas: false,
}

const FIELD_CLASSNAME =
  'mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm transition focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15'
const TEXTAREA_CLASSNAME = `${FIELD_CLASSNAME} min-h-24 resize-y`

function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus({ type: '', message: '' })

    if (!formData.politicasAceptadas) {
      setSubmitStatus({
        type: 'error',
        message: 'Debes aceptar las politicas de privacidad para continuar.',
      })
      return
    }

    if (!GOOGLE_SCRIPT_URL) {
      setSubmitStatus({
        type: 'error',
        message: 'Configura VITE_GOOGLE_SCRIPT_WEB_APP_URL para activar el envio.',
      })
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          nombres: formData.nombres.trim(),
          apellidos: formData.apellidos.trim(),
          correo: formData.correo.trim(),
          telefono: formData.telefono.trim(),
          empresa: formData.empresa.trim(),
          ruc: formData.ruc.trim(),
          mensaje: formData.mensaje.trim(),
          politicasAceptadas: formData.politicasAceptadas ? 'Si' : 'No',
        }),
      })
      void response

      setFormData(INITIAL_FORM)
      setSubmitStatus({
        type: 'success',
        message: 'Gracias. Tu consulta fue enviada correctamente.',
      })
      setIsSuccessModalOpen(true)
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un problema al enviar. Intentalo nuevamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewRequest = () => {
    setIsSuccessModalOpen(false)
    setSubmitStatus({ type: '', message: '' })
  }

  return (
    <section id="contacto" className="bg-slate-50/80 py-14 lg:py-16">
      <Container>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100/70 lg:grid lg:grid-cols-2">
          <Reveal className="p-6 lg:p-8">
            <h2 className="type-section-title">Envíanos un mensaje</h2>
            <p className="mt-3 mb-5 text-sm leading-relaxed text-slate-600">
              Tienes alguna consulta? Completa el formulario y te responderemos a la brevedad.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Nombres
                  <input
                    className={FIELD_CLASSNAME}
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Apellidos
                  <input
                    className={FIELD_CLASSNAME}
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Correo corporativo
                  <input
                    className={FIELD_CLASSNAME}
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Telefono
                  <input
                    className={FIELD_CLASSNAME}
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Empresa
                  <input
                    className={FIELD_CLASSNAME}
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  RUC
                  <input
                    className={FIELD_CLASSNAME}
                    type="text"
                    name="ruc"
                    value={formData.ruc}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Mensaje
                <textarea
                  className={TEXTAREA_CLASSNAME}
                  placeholder="Describe brevemente tu necesidad..."
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-slate-300 text-primary focus:ring-primary"
                  name="politicasAceptadas"
                  checked={formData.politicasAceptadas}
                  onChange={handleChange}
                  required
                />
                <span>Acepto las politicas de privacidad</span>
              </label>

              {submitStatus.type === 'error' ? (
                <p className="text-sm text-red-600">{submitStatus.message}</p>
              ) : null}

              <div className="pt-1">
                <AppButton
                  type="submit"
                  variant="primary"
                  label={isSubmitting ? 'Enviando...' : 'Programar una consulta'}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </Reveal>

          <Reveal className="relative hidden lg:block" delayMs={70}>
            <img
              src={contactFormImage}
              alt="Equipo de ALTA CONSULTING"
              className="h-full min-h-[620px] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-white px-5 py-4 text-primary">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
                <Phone size={18} />
              </span>
              <p className="text-sm font-medium leading-tight">
                Llamanos ahora y agenda una asesoria con nuestro equipo.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {isSuccessModalOpen ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-900/60 px-4 py-6 backdrop-blur-[2px]"
          onClick={handleNewRequest}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >
          <div
            className="relative w-full max-w-md rounded-xl bg-white p-6 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="status"
            aria-live="polite"
          >
            <Button
              type="button"
              icon="pi pi-times"
              rounded
              text
              severity="secondary"
              onClick={handleNewRequest}
              className="!absolute right-3 top-3"
              aria-label="Cerrar confirmacion"
            />

            <img
              src={contactSuccessImage}
              alt="Confirmacion de envio exitoso"
              className="mx-auto w-full max-w-[280px]"
            />
            <h3 id="contact-success-title" className="mt-3 text-xl font-semibold text-heading">
              Informacion enviada con exito
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Recibimos tu solicitud correctamente. Nuestro equipo se pondrá en contacto contigo
              pronto.
            </p>
            <AppButton
              type="button"
              variant="primary"
              label="Entendido"
              onClick={handleNewRequest}
              className="mt-5"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ContactSection
