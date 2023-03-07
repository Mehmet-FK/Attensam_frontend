function createData(a, b, c, d, e, f, g) {
  return { a, b, c, d, e, f, g };
}

export const rows = [];

for (let i = 0; i < 200; i++) {
  const cell = createData(
    i + 1,
    "Zeitstempel wird lokalisiert",
    "Zeitstempel wird gemeldet",

    "Vertrauen",
    "Gesendeter Stempel",
    "Mitarbeitername",
    "Kontrollstellenbezeichnung"
  );
  rows.push(cell);
}
