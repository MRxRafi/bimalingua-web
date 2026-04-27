/**
 * Converts a Spanish date string (e.g., "10 Abril 2024") to ISO format (YYYY-MM-DD).
 * If the format is not recognized, it returns the original string.
 */
export function formatSpanishDateToISO(spanishDate: string): string {
  const months: { [key: string]: string } = {
    enero: "01",
    febrero: "02",
    marzo: "03",
    abril: "04",
    mayo: "05",
    junio: "06",
    julio: "07",
    agosto: "08",
    septiembre: "09",
    octubre: "10",
    noviembre: "11",
    diciembre: "12",
  };

  const parts = spanishDate.trim().split(/\s+/);
  if (parts.length !== 3) {
    return spanishDate;
  }

  const day = parts[0].padStart(2, "0");
  const monthName = parts[1].toLowerCase();
  const year = parts[2];

  const month = months[monthName];
  if (!month) {
    return spanishDate;
  }

  // Ensure year is numeric and day is numeric
  if (!/^\d+$/.test(year) || !/^\d+$/.test(day)) {
    return spanishDate;
  }

  return `${year}-${month}-${day}`;
}
