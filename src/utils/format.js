const numberFormatter = new Intl.NumberFormat("en-US");


export function formatNumber(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return String(value ?? "");
  }

  return numberFormatter.format(Math.round(value));
}



