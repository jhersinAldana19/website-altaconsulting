import { useMemo, useState } from 'react'
import AppButton from '../ui/AppButton'
import ButtonLink from '../ui/ButtonLink'
import {
  calculateProfitLoss,
  formatPen,
  parseNumericInput,
} from '../../lib/simulatorCalculations'
import { SIMULATOR_CONCEPTS } from '../../data/simulatorConcepts'

const INITIAL_FORM = {
  ventaSinIgv: '',
  margenBrutoMode: 'percentage',
  margenBrutoPercent: '50',
  costoTotalValue: '',
  margenOperativoMode: 'percentage',
  margenOperativoPercent: '70',
  gastoTotalValue: '',
  impuestoPercent: '29.5',
}

const STEP_LABELS = ['Introducción', 'Datos', 'Resultado', 'Conceptos']

function ModeToggle({ value, onChange, name }) {
  return (
    <div className="inline-flex rounded-sm border border-slate-200 bg-white p-0.5" role="group" aria-label={name}>
      <button
        type="button"
        onClick={() => onChange('percentage')}
        className={`rounded-sm px-3 py-1.5 text-xs font-semibold transition ${
          value === 'percentage'
            ? 'bg-primary text-white'
            : 'text-slate-600 hover:text-primary'
        }`}
      >
        Porcentaje
      </button>
      <button
        type="button"
        onClick={() => onChange('value')}
        className={`rounded-sm px-3 py-1.5 text-xs font-semibold transition ${
          value === 'value' ? 'bg-primary text-white' : 'text-slate-600 hover:text-primary'
        }`}
      >
        Valor
      </button>
    </div>
  )
}

function FieldLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-heading">
      {children}
    </label>
  )
}

function HelpText({ children }) {
  return <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{children}</p>
}

function MoneyField({ id, label, value, onChange, placeholder }) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative mt-2">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
          S/
        </span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-sm border border-slate-200 bg-white py-3 pl-10 pr-4 text-base text-heading outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
        />
      </div>
    </div>
  )
}

function PercentField({ id, label, value, onChange, placeholder }) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative mt-2">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-sm border border-slate-200 bg-white py-3 pl-4 pr-10 text-base text-heading outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
          %
        </span>
      </div>
    </div>
  )
}

function StepIndicator({ currentStep }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {STEP_LABELS.map((label, index) => {
        const stepNumber = index + 1
        const isActive = currentStep === stepNumber
        const isCompleted = currentStep > stepNumber

        return (
          <div key={label} className="flex items-center gap-2">
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                isActive || isCompleted
                  ? 'bg-primary text-white'
                  : 'border border-slate-200 bg-white text-slate-400'
              }`}
            >
              {stepNumber}
            </span>
            <span
              className={`hidden text-xs font-medium sm:inline ${
                isActive ? 'text-primary' : 'text-slate-500'
              }`}
            >
              {label}
            </span>
            {index < STEP_LABELS.length - 1 ? (
              <span className="hidden h-px w-6 bg-slate-200 sm:block" aria-hidden />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

function ProfitLossSimulator() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(INITIAL_FORM)
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState([])

  const updateForm = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  const previewSummary = useMemo(() => {
    const venta = parseNumericInput(form.ventaSinIgv)
    const brutoLabel =
      form.margenBrutoMode === 'percentage'
        ? `Margen bruto: ${form.margenBrutoPercent || '—'}%`
        : `Costo total: ${form.costoTotalValue ? `S/ ${form.costoTotalValue}` : '—'}`
    const operativoLabel =
      form.margenOperativoMode === 'percentage'
        ? `Margen operativo: ${form.margenOperativoPercent || '—'}%`
        : `Gasto operativo: ${form.gastoTotalValue ? `S/ ${form.gastoTotalValue}` : '—'}`

    return {
      venta: venta !== null ? formatPen(venta) : '—',
      brutoLabel,
      operativoLabel,
      impuesto: form.impuestoPercent ? `${form.impuestoPercent}%` : '—',
    }
  }, [form])

  const validateForm = () => {
    const nextErrors = []
    const venta = parseNumericInput(form.ventaSinIgv)
    const impuesto = parseNumericInput(form.impuestoPercent)

    if (venta === null || venta <= 0) {
      nextErrors.push('Ingresa una venta sin IGV mayor a cero.')
    }

    if (form.margenBrutoMode === 'percentage') {
      const margenBruto = parseNumericInput(form.margenBrutoPercent)
      if (margenBruto === null || margenBruto < 0 || margenBruto > 100) {
        nextErrors.push('El margen bruto debe estar entre 0% y 100%.')
      }
    } else {
      const costo = parseNumericInput(form.costoTotalValue)
      if (costo === null || costo < 0) {
        nextErrors.push('Ingresa un costo total estimado válido.')
      }
      if (venta !== null && costo !== null && costo > venta) {
        nextErrors.push('El costo total no puede ser mayor que la venta sin IGV.')
      }
    }

    if (form.margenOperativoMode === 'percentage') {
      const margenOperativo = parseNumericInput(form.margenOperativoPercent)
      if (margenOperativo === null || margenOperativo < 0 || margenOperativo > 100) {
        nextErrors.push('El margen operativo debe estar entre 0% y 100%.')
      }
    } else {
      const gasto = parseNumericInput(form.gastoTotalValue)
      if (gasto === null || gasto < 0) {
        nextErrors.push('Ingresa un gasto operativo estimado válido.')
      }
      if (venta !== null && gasto !== null && gasto > venta) {
        nextErrors.push('El gasto operativo no puede ser mayor que la venta sin IGV.')
      }
    }

    if (impuesto === null || impuesto < 0 || impuesto > 100) {
      nextErrors.push('El impuesto estimado debe estar entre 0% y 100%.')
    }

    return nextErrors
  }

  const handleCalculate = () => {
    const nextErrors = validateForm()
    setErrors(nextErrors)
    if (nextErrors.length > 0) return

    const venta = parseNumericInput(form.ventaSinIgv)
    const impuesto = parseNumericInput(form.impuestoPercent)
    const margenBrutoPercent = parseNumericInput(form.margenBrutoPercent)
    const costoTotalValue = parseNumericInput(form.costoTotalValue) ?? 0
    const margenOperativoPercent = parseNumericInput(form.margenOperativoPercent)
    const gastoTotalValue = parseNumericInput(form.gastoTotalValue) ?? 0

    const calculated = calculateProfitLoss({
      ventaSinIgv: venta,
      margenBrutoMode: form.margenBrutoMode,
      margenBrutoPercent,
      costoTotalValue,
      margenOperativoMode: form.margenOperativoMode,
      margenOperativoPercent,
      gastoTotalValue,
      impuestoPercent: impuesto,
    })

    setResult(calculated)
    setStep(3)
  }

  const handleReset = () => {
    setForm(INITIAL_FORM)
    setErrors([])
    setResult(null)
  }

  const handleNewSimulation = () => {
    handleReset()
    setStep(1)
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <StepIndicator currentStep={step} />

      <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
        {step === 1 ? (
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Alta Consulting</p>
            <h1 className="mt-3 font-heading text-3xl text-heading sm:text-4xl">
              Simulador de Ganancias y Pérdidas
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Calcula de forma referencial tu resultado estimado a partir de tus ventas, márgenes e impuestos.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Esta herramienta te permite obtener una estimación simple de tus costos, gastos, impuestos y ganancia neta.
            </p>
            <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-slate-600">
              <li>• Ingresa tu venta sin IGV.</li>
              <li>• Define tus márgenes o valores estimados.</li>
              <li>• Obtén tu ganancia neta referencial.</li>
              <li>• Revisa qué representa cada concepto.</li>
            </ul>
            <div className="mt-8 flex justify-center">
              <AppButton type="button" variant="primary" label="Comenzar simulación" onClick={() => setStep(2)} />
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Resultado referencial. No reemplaza una evaluación contable profesional.
            </p>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h2 className="font-heading text-2xl text-heading sm:text-3xl">Ingresar datos de la simulación</h2>
            <p className="mt-2 text-sm text-slate-600">
              Completa los campos para estimar tu estado de resultados referencial.
            </p>

            <div className="mt-8 space-y-8">
              <MoneyField
                id="venta-sin-igv"
                label="Venta sin IGV"
                value={form.ventaSinIgv}
                onChange={(value) => updateForm('ventaSinIgv', value)}
                placeholder="Ej. 1,000"
              />

              <div className="space-y-4 rounded-sm border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-heading">Margen bruto o costo total</p>
                  <ModeToggle
                    name="Modo margen bruto"
                    value={form.margenBrutoMode}
                    onChange={(value) => updateForm('margenBrutoMode', value)}
                  />
                </div>
                {form.margenBrutoMode === 'percentage' ? (
                  <>
                    <PercentField
                      id="margen-bruto"
                      label="Margen bruto estimado"
                      value={form.margenBrutoPercent}
                      onChange={(value) => updateForm('margenBrutoPercent', value)}
                      placeholder="50"
                    />
                    <HelpText>
                      Si ingresas 50%, el sistema calculará los costos operativos como el 50% restante de la venta.
                    </HelpText>
                  </>
                ) : (
                  <>
                    <MoneyField
                      id="costo-total"
                      label="Costo total estimado"
                      value={form.costoTotalValue}
                      onChange={(value) => updateForm('costoTotalValue', value)}
                      placeholder="Ej. 300"
                    />
                    <HelpText>
                      Si ingresas un valor, el sistema usará ese monto directamente como costo operativo.
                    </HelpText>
                  </>
                )}
              </div>

              <div className="space-y-4 rounded-sm border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-heading">Margen operativo o gasto total</p>
                  <ModeToggle
                    name="Modo margen operativo"
                    value={form.margenOperativoMode}
                    onChange={(value) => updateForm('margenOperativoMode', value)}
                  />
                </div>
                {form.margenOperativoMode === 'percentage' ? (
                  <>
                    <PercentField
                      id="margen-operativo"
                      label="Margen operativo estimado"
                      value={form.margenOperativoPercent}
                      onChange={(value) => updateForm('margenOperativoPercent', value)}
                      placeholder="70"
                    />
                    <HelpText>
                      Si ingresas 70%, el sistema calculará la ganancia operativa como el 70% de la venta.
                    </HelpText>
                  </>
                ) : (
                  <>
                    <MoneyField
                      id="gasto-operativo"
                      label="Gasto operativo estimado"
                      value={form.gastoTotalValue}
                      onChange={(value) => updateForm('gastoTotalValue', value)}
                      placeholder="Ej. 300"
                    />
                    <HelpText>
                      Si ingresas un valor, el sistema usará ese monto directamente como gasto operativo.
                    </HelpText>
                  </>
                )}
              </div>

              <div>
                <PercentField
                  id="impuesto"
                  label="Impuesto estimado"
                  value={form.impuestoPercent}
                  onChange={(value) => updateForm('impuestoPercent', value)}
                  placeholder="29.5"
                />
                <HelpText>Este porcentaje se aplica sobre la ganancia operativa.</HelpText>
              </div>

              <div className="rounded-sm border border-slate-200 bg-white p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-heading">Vista previa de datos ingresados</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="text-slate-500">Venta sin IGV</dt>
                    <dd className="font-medium text-heading">{previewSummary.venta}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="text-slate-500">Margen bruto o costo total</dt>
                    <dd className="text-right font-medium text-heading">{previewSummary.brutoLabel}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="text-slate-500">Margen operativo o gasto total</dt>
                    <dd className="text-right font-medium text-heading">{previewSummary.operativoLabel}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Impuesto estimado</dt>
                    <dd className="font-medium text-heading">{previewSummary.impuesto}</dd>
                  </div>
                </dl>
              </div>

              {errors.length > 0 ? (
                <div className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <ul className="space-y-1">
                    {errors.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <AppButton type="button" variant="secondary" label="Limpiar" onClick={handleReset} />
                <AppButton type="button" variant="primary" label="Calcular resultado" onClick={handleCalculate} />
              </div>
            </div>
          </div>
        ) : null}

        {step === 3 && result ? (
          <div>
            <h2 className="font-heading text-2xl text-heading sm:text-3xl">Resultado estimado</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
              <div className="overflow-hidden rounded-sm border border-slate-200">
                {[
                  ['Ingresos sin IGV', result.ingresosSinIGV],
                  ['Costos operativos', result.costosOperativos],
                  ['Ganancia bruta', result.gananciaBruta],
                  ['Gastos operativos', result.gastosOperativos],
                  ['Ganancia operativa', result.gananciaOperativa],
                  ['Impuestos', result.impuestos],
                ].map(([label, amount]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3.5 text-sm sm:px-5"
                  >
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-heading">{formatPen(amount)}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 bg-primary px-4 py-4 text-sm sm:px-5">
                  <span className="font-semibold text-white">Ganancia neta</span>
                  <span className="text-lg font-semibold text-white">{formatPen(result.gananciaNeta)}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                Según los datos ingresados, tu ganancia neta estimada es{' '}
                <strong className="text-heading">{formatPen(result.gananciaNeta)}</strong>. Este cálculo es
                referencial y puede variar según la estructura real de tu negocio.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppButton type="button" variant="secondary" label="Volver a editar" onClick={() => setStep(2)} />
              <AppButton type="button" variant="primary" label="Ver descripción de conceptos" onClick={() => setStep(4)} />
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div>
            <h2 className="font-heading text-2xl text-heading sm:text-3xl">Descripción de conceptos</h2>
            <div className="mt-8 space-y-4">
              {SIMULATOR_CONCEPTS.map((concept) => (
                <article
                  key={concept.title}
                  className="rounded-sm border border-slate-200 bg-slate-50/50 px-4 py-4 sm:px-5"
                >
                  <h3 className="text-base font-semibold text-heading">{concept.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{concept.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-sm border border-primary/15 bg-primary/5 p-5">
              <p className="text-sm leading-relaxed text-slate-700">
                Este simulador ofrece una estimación referencial. Para una evaluación contable, tributaria y
                financiera más precisa, agenda una asesoría con Alta Consulting.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppButton type="button" variant="secondary" label="Nueva simulación" onClick={handleNewSimulation} />
              <ButtonLink href="/contacto" variant="primary">
                Agendar asesoría
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProfitLossSimulator
