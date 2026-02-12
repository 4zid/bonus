export interface Exercise {
  number: string;
  name: string;
  sets: string;
  reps: string;
  notes: string;
}

export interface MuscleGroup {
  name: string;
  exercises: Exercise[];
}

export interface WorkoutDay {
  id: string;
  title: string;
  emoji: string;
  day: string;
  emphasis: string;
  color: string;
  groups: MuscleGroup[];
}

export const workoutDays: WorkoutDay[] = [
  {
    id: "upper-a",
    title: "Upper A",
    emoji: "💪",
    day: "Lunes",
    emphasis: "Énfasis Push",
    color: "lime",
    groups: [
      {
        name: "PECHO",
        exercises: [
          { number: "1", name: "Flexiones pies elevados", sets: "4", reps: "Máx", notes: "Pies en silla o escalón" },
          { number: "2", name: "Press pecho mancuernas en piso", sets: "4", reps: "12", notes: "Mancuernas 10kg, apretar arriba" },
        ],
      },
      {
        name: "HOMBROS",
        exercises: [
          { number: "3", name: "Press militar con barra", sets: "4", reps: "12", notes: "Barra 15kg" },
          { number: "4", name: "Elevaciones laterales", sets: "3", reps: "15", notes: "Mancuernas 10kg, controlado" },
        ],
      },
      {
        name: "ESPALDA + BRAZOS",
        exercises: [
          { number: "5", name: "Dominadas supinas (chin-ups)", sets: "3", reps: "Máx", notes: "Agarre supino, bíceps activo" },
          { number: "6", name: "Curl bíceps con barra", sets: "3", reps: "12", notes: "Barra 15kg" },
          { number: "7", name: "Fondos en silla (tríceps)", sets: "3", reps: "Máx", notes: "Piernas extendidas para más dificultad" },
        ],
      },
    ],
  },
  {
    id: "lower-a",
    title: "Lower A",
    emoji: "🦵",
    day: "Martes",
    emphasis: "Énfasis Cuádriceps",
    color: "orange",
    groups: [
      {
        name: "CUÁDRICEPS",
        exercises: [
          { number: "1", name: "Sentadilla con barra", sets: "4", reps: "15", notes: "Barra 15kg en espalda" },
          { number: "2", name: "Sentadilla búlgara con mancuernas", sets: "3", reps: "12 c/p", notes: "Pie trasero en silla" },
          { number: "3", name: "Zancadas con mancuernas", sets: "3", reps: "12 c/p", notes: "Mancuernas 10kg" },
        ],
      },
      {
        name: "PANTORRILLAS",
        exercises: [
          { number: "4", name: "Elevación de talones con peso", sets: "4", reps: "20", notes: "Borde de escalón + mancuerna" },
        ],
      },
      {
        name: "CORE",
        exercises: [
          { number: "5", name: "Plancha abdominal", sets: "3", reps: "45-60 seg", notes: "Apretar glúteos y abdomen" },
          { number: "6", name: "Elevación de piernas en barra", sets: "3", reps: "Máx", notes: "Controlado, sin balanceo" },
        ],
      },
    ],
  },
  {
    id: "upper-b",
    title: "Upper B",
    emoji: "💪",
    day: "Jueves",
    emphasis: "Énfasis Pull",
    color: "lime",
    groups: [
      {
        name: "ESPALDA",
        exercises: [
          { number: "1", name: "Dominadas pronas", sets: "4", reps: "Máx", notes: "Agarre prono, ancho de hombros" },
          { number: "2", name: "Remo con mancuerna (c/brazo)", sets: "4", reps: "12", notes: "Mancuerna 10kg, apretar escápula" },
          { number: "3", name: "Remo con barra", sets: "4", reps: "12", notes: "Barra 15kg, torso a 45°" },
          { number: "4", name: "Encogimientos (trapecios)", sets: "3", reps: "15", notes: "Mancuernas 10kg, pausa arriba" },
        ],
      },
      {
        name: "PECHO + BRAZOS",
        exercises: [
          { number: "5", name: "Flexiones diamante", sets: "3", reps: "Máx", notes: "Manos juntas, tríceps" },
          { number: "6", name: "Curl martillo mancuernas", sets: "3", reps: "12", notes: "Mancuernas 10kg" },
          { number: "7", name: "Extensión tríceps tras nuca", sets: "3", reps: "12", notes: "Mancuerna 10kg, codos fijos" },
        ],
      },
    ],
  },
  {
    id: "lower-b",
    title: "Lower B",
    emoji: "🦵",
    day: "Viernes",
    emphasis: "Énfasis Posterior",
    color: "orange",
    groups: [
      {
        name: "POSTERIOR",
        exercises: [
          { number: "1", name: "Peso muerto rumano con barra", sets: "4", reps: "12", notes: "Barra 15kg, sentir isquios" },
          { number: "2", name: "Hip thrust a 1 pierna", sets: "3", reps: "12 c/p", notes: "Sin peso o con mancuerna en cadera" },
        ],
      },
      {
        name: "CUÁDRICEPS",
        exercises: [
          { number: "3", name: "Sentadilla goblet mancuerna", sets: "4", reps: "15", notes: "Mancuerna 10kg al pecho" },
          { number: "4", name: "Zancada reversa con mancuernas", sets: "3", reps: "12 c/p", notes: "Paso atrás controlado" },
        ],
      },
      {
        name: "PANTORRILLAS",
        exercises: [
          { number: "5", name: "Elevación de talones", sets: "4", reps: "20", notes: "Borde de escalón" },
        ],
      },
      {
        name: "CORE",
        exercises: [
          { number: "6", name: "Crunch bicicleta", sets: "3", reps: "20", notes: "Codo a rodilla opuesta" },
          { number: "7", name: "Plancha lateral", sets: "3", reps: "30 seg c/l", notes: "Cadera alta, no dejar caer" },
        ],
      },
    ],
  },
];

export const progression = [
  { number: "1", method: "Más repeticiones", detail: "Sumá 1-2 reps por semana hasta llegar a 20+" },
  { number: "2", method: "Tempo lento", detail: "3 seg bajar - pausa - 3 seg subir. Más tiempo bajo tensión." },
  { number: "3", method: "Menos descanso", detail: "Reducir de 90 a 60 seg entre series." },
  { number: "4", method: "Variantes difíciles", detail: "Flexiones archer, dominadas con pausa, pistol squat asistido." },
  { number: "5", method: "Más peso", detail: "Cuando 20 reps sea fácil, sumá peso a barra o mancuernas." },
];
