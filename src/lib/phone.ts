/** Format RU phone as +7 (XXX) XXX-XX-XX while typing. */
export function formatPhoneInput(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  let rest = digits;

  if (rest.startsWith("8")) {
    rest = "7" + rest.slice(1);
  }
  if (!rest.startsWith("7") && rest.length > 0) {
    rest = "7" + rest;
  }

  rest = rest.slice(0, 11);
  const local = rest.slice(1);

  if (rest.length === 0) return "";
  if (local.length === 0) return "+7";
  if (local.length <= 3) return `+7 (${local}`;
  if (local.length <= 6) return `+7 (${local.slice(0, 3)}) ${local.slice(3)}`;
  if (local.length <= 8) {
    return `+7 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
  }
  return `+7 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6, 8)}-${local.slice(8, 10)}`;
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("7");
}
