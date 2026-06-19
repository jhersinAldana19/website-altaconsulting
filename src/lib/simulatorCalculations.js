export function parseNumericInput(value) {
  if (value === '' || value === null || value === undefined) return null
  const normalized = String(value).replace(/,/g, '.').trim()
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : null
}

export function calculateProfitLoss({
  ventaSinIgv,
  margenBrutoMode,
  margenBrutoPercent,
  costoTotalValue,
  margenOperativoMode,
  margenOperativoPercent,
  gastoTotalValue,
  impuestoPercent,
}) {
  const ingresosSinIGV = ventaSinIgv
  const margenBrutoDecimal = margenBrutoPercent / 100
  const margenOperativoDecimal = margenOperativoPercent / 100
  const impuestoDecimal = impuestoPercent / 100

  let costosOperativos
  if (margenBrutoMode === 'percentage') {
    costosOperativos = (1 - margenBrutoDecimal) * ingresosSinIGV
  } else {
    costosOperativos = costoTotalValue
  }

  const gananciaBruta = ingresosSinIGV - costosOperativos

  let gastosOperativos
  let gananciaOperativa
  if (margenOperativoMode === 'percentage') {
    gastosOperativos = (1 - margenOperativoDecimal) * ingresosSinIGV
    gananciaOperativa = margenOperativoDecimal * ingresosSinIGV
  } else {
    gastosOperativos = gastoTotalValue
    gananciaOperativa = ingresosSinIGV - gastosOperativos
  }

  const impuestos = impuestoDecimal * gananciaOperativa
  const gananciaNeta = gananciaOperativa - impuestos

  return {
    ingresosSinIGV,
    costosOperativos,
    gananciaBruta,
    gastosOperativos,
    gananciaOperativa,
    impuestos,
    gananciaNeta,
  }
}

export function formatPen(value) {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function formatPercent(value) {
  const formatted = Number.isInteger(value) ? String(value) : String(Number(value.toFixed(2)))
  return `${formatted}%`
}
