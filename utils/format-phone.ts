/**
 * Formats a Brazilian phone number string
 * @param value The raw phone number input
 * @returns Formatted phone number: (XX) XXXXX-XXXX for mobile or (XX) XXXX-XXXX for landline
 */
export function formatPhoneNumber(value: string): string {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "")

  // Return empty if no digits
  if (!digits) return ""

  // Handle different phone number formats based on length
  if (digits.length <= 10) {
    // Landline or old mobile format: (XX) XXXX-XXXX
    return digits.replace(/(\d{2})(\d{0,4})(\d{0,4})/, (_, ddd, prefix, suffix) => {
      if (!prefix) return `(${ddd})`
      if (!suffix) return `(${ddd}) ${prefix}`
      return `(${ddd}) ${prefix}-${suffix}`
    })
  } else {
    // Mobile format with 9 digits: (XX) XXXXX-XXXX
    return digits.replace(/(\d{2})(\d{0,5})(\d{0,4})/, (_, ddd, prefix, suffix) => {
      if (!prefix) return `(${ddd})`
      if (!suffix) return `(${ddd}) ${prefix}`
      return `(${ddd}) ${prefix}-${suffix}`
    })
  }
}
