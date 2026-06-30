// O'yindagi 12 til — sayt uchun qisqartirilgan metama'lumot.
export type Track = "web" | "backend" | "system";

export interface Lang {
  id: string;
  name: string;
  glyph: string;
  color: string;
  track: Track;
  tagline: string;
  lessons: number;
}

export const TRACK_LABEL: Record<Track, string> = {
  web: "Veb",
  backend: "Backend",
  system: "Tizim",
};

export const LANGUAGES: Lang[] = [
  { id: "htmlcss", name: "HTML + CSS", glyph: "</>", color: "#e44d26", track: "web", tagline: "Veb poydevori", lessons: 6 },
  { id: "javascript", name: "JavaScript", glyph: "JS", color: "#f7df1e", track: "web", tagline: "Brauzer tili", lessons: 8 },
  { id: "typescript", name: "TypeScript", glyph: "TS", color: "#3178c6", track: "web", tagline: "Tipli JavaScript", lessons: 8 },
  { id: "python", name: "Python", glyph: "Py", color: "#4b8bbe", track: "backend", tagline: "Universal til", lessons: 8 },
  { id: "sql", name: "SQL", glyph: "DB", color: "#23a0c4", track: "backend", tagline: "Ma'lumotlar bazasi", lessons: 8 },
  { id: "java", name: "Java", glyph: "Jv", color: "#e76f00", track: "backend", tagline: "Korporativ + Android", lessons: 8 },
  { id: "csharp", name: "C#", glyph: "C#", color: "#a679c9", track: "backend", tagline: ".NET va o'yinlar", lessons: 8 },
  { id: "php", name: "PHP", glyph: "ph", color: "#8a8fc4", track: "backend", tagline: "Veb backend", lessons: 8 },
  { id: "go", name: "Go", glyph: "Go", color: "#00add8", track: "backend", tagline: "Bulut + DevOps", lessons: 8 },
  { id: "c", name: "C", glyph: "C", color: "#7e8bd9", track: "system", tagline: "Past daraja, OS", lessons: 8 },
  { id: "cpp", name: "C++", glyph: "C+", color: "#3b9bd0", track: "system", tagline: "Tizim + o'yin dvigatel", lessons: 8 },
  { id: "rust", name: "Rust", glyph: "Rs", color: "#dea584", track: "system", tagline: "Xavfsiz tizim tili", lessons: 8 },
];

export const TOTAL_LESSONS = LANGUAGES.reduce((a, l) => a + l.lessons, 0); // 94
