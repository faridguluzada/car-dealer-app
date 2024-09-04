export function generateYears() {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(currentYear - 2014), (v, i) => 2015 + i);
  return years;
}
