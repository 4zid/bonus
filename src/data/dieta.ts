export interface MealOption {
  label: string;
  description: string;
  kcal: string;
  protein: string;
  carbs: string;
}

export interface MealTime {
  name: string;
  emoji: string;
  options: MealOption[];
}

export interface SauceRecipe {
  name: string;
  emoji: string;
  ingredients: string;
  preparation: string;
  use: string;
}

export const dailyTarget = {
  kcal: 2700,
  protein: 130,
  carbs: 350,
  fat: 80,
};

export const meals: MealTime[] = [
  {
    name: "DESAYUNO",
    emoji: "🌅",
    options: [
      { label: "Congee", description: "Arroz cocido papilla + 2 huevos poché + cebolla verdeo + soja + sésamo + jengibre", kcal: "~600", protein: "25", carbs: "75" },
      { label: "Tostada asiática", description: "Pan + palta + huevo frito + soja + sésamo. Vaso de leche", kcal: "~600", protein: "22", carbs: "65" },
      { label: "French toast", description: "Pan marinado en leche + canela + jengibre. Banana + manteca maní + miel", kcal: "~600", protein: "20", carbs: "80" },
      { label: "Okayu + salmón", description: "Papilla de arroz japonesa + salmón desmenuzado + nori picado + sésamo + verdeo + huevo mollet", kcal: "~600", protein: "30", carbs: "70" },
      { label: "Tamago gohan", description: "Arroz caliente + huevo crudo batido + soja + sésamo + verdeo. Acompañar con leche y banana", kcal: "~600", protein: "22", carbs: "78" },
      { label: "Jianbing criollo", description: "Crepe de huevo (2 huevos) + verdeo + sésamo + salsa hoisin casera. Con arroz y leche", kcal: "~600", protein: "24", carbs: "72" },
    ],
  },
  {
    name: "ALMUERZO",
    emoji: "🍜",
    options: [
      { label: "Arroz frito", description: "Arroz frito con pollo (200g) + soja + sésamo + huevo + arvejas + zanahoria + verdeo", kcal: "~750", protein: "45", carbs: "85" },
      { label: "Noodles con carne", description: "Fideos con carne (200g) + brocoli + morrón + salsa de ostras/soja + ajo + jengibre", kcal: "~750", protein: "42", carbs: "90" },
      { label: "Bowl teriyaki", description: "Arroz + pollo glaseado (soja+miel+ajo+jengibre) + edamames + palta + sésamo", kcal: "~750", protein: "40", carbs: "85" },
      { label: "Curry express", description: "Pechuga (200g) en crema de leche + curry + cúrcuma + arroz + espinaca", kcal: "~750", protein: "42", carbs: "80" },
      { label: "Katsu don", description: "Milanesa de pollo fina + huevo revuelto con soja + arroz + verdeo + sésamo", kcal: "~750", protein: "44", carbs: "82" },
      { label: "Pad thai casero", description: "Fideos de arroz + pollo (200g) + huevo + maní picado + soja + limón + verdeo + brotes", kcal: "~750", protein: "40", carbs: "88" },
      { label: "Gyudon", description: "Bowl de arroz + carne cortada fina cocida en soja + cebolla caramelizada + huevo + jengibre encurtido", kcal: "~750", protein: "43", carbs: "84" },
    ],
  },
  {
    name: "MERIENDA",
    emoji: "🥤",
    options: [
      { label: "Licuado bulk", description: "Leche + banana + avena + manteca de maní + cacao", kcal: "~400", protein: "15", carbs: "55" },
      { label: "Onigiri", description: "Triángulos de arroz con atún y soja (3-4 unidades) + sésamo + nori", kcal: "~400", protein: "22", carbs: "50" },
      { label: "Yogur griego", description: "Yogur griego con granola, miel y frutos secos", kcal: "~400", protein: "18", carbs: "45" },
      { label: "Smoothie matcha", description: "Leche + banana + matcha en polvo + avena + miel + sésamo", kcal: "~400", protein: "14", carbs: "58" },
      { label: "Gyozas snack", description: "6 gyozas de pollo caseras (masa wonton + pollo picado + verdeo + jengibre) a la plancha con soja", kcal: "~400", protein: "24", carbs: "42" },
      { label: "Mochi de maní", description: "Bolitas de arroz glutinoso (harina) rellenas de manteca de maní + sésamo + miel. Con leche", kcal: "~400", protein: "14", carbs: "52" },
    ],
  },
  {
    name: "CENA",
    emoji: "🌙",
    options: [
      { label: "Ramen casero", description: "Fideos + caldo de pollo con soja + huevo mollet + verdeo + pollo desmenuzado + nori", kcal: "~700", protein: "40", carbs: "80" },
      { label: "Bibimbap", description: "Arroz + carne picada con soja/ajo + huevo frito + zanahoria + espinaca + picante", kcal: "~700", protein: "38", carbs: "85" },
      { label: "Poke bowl", description: "Arroz + atún/salmón + palta + pepino + soja + sésamo + edamames", kcal: "~700", protein: "35", carbs: "75" },
      { label: "Wok de cerdo", description: "Bondiola (200g) + verduras salteadas + fideos de arroz + soja + miel + sésamo", kcal: "~700", protein: "40", carbs: "80" },
      { label: "Yakisoba", description: "Fideos salteados + pollo (200g) + repollo + zanahoria + salsa yakisoba (soja+miel+vinagre) + huevo", kcal: "~700", protein: "38", carbs: "82" },
      { label: "Mapo tofu", description: "Tofu firme salteado + carne picada (150g) + soja + jengibre + ajo + ají + arroz blanco", kcal: "~700", protein: "42", carbs: "76" },
      { label: "Donburi de pollo", description: "Arroz + pollo salteado en soja y mirin casero + cebolla + huevo batido + verdeo + sésamo", kcal: "~700", protein: "40", carbs: "82" },
    ],
  },
  {
    name: "SNACK NOCTURNO",
    emoji: "🌜",
    options: [
      { label: "Frutos secos", description: "Puñado castañas de cajú/almendras + vaso de leche", kcal: "~200", protein: "10", carbs: "15" },
      { label: "Edamames", description: "Edamames con sal y un toque de sésamo", kcal: "~200", protein: "12", carbs: "12" },
    ],
  },
  {
    name: "SPRING ROLLS (Bonus)",
    emoji: "🥟",
    options: [
      { label: "Fresh", description: "Papel de arroz + arroz + pollo + palta + zanahoria + verdeo. Salsa soja+sésamo+ajo (3-4 rolls)", kcal: "~450", protein: "25", carbs: "55" },
      { label: "Fritos", description: "Rolls fritos: papel de arroz frito en sartén + relleno carne picada/huevo/verdura", kcal: "~500", protein: "20", carbs: "50" },
    ],
  },
];

export const kitBase = [
  { ingredient: "Salsa de soja", use: "Base de todo. Salteados, marinados, dips." },
  { ingredient: "Aceite de sésamo", use: "Poco rinde mucho. Toque final en bowls y woks." },
  { ingredient: "Jengibre (fresco/polvo)", use: "Salteados, curries, marinados." },
  { ingredient: "Ajo", use: "Junto con jengibre, base aromática asiática." },
  { ingredient: "Ají molido / picante", use: "Reemplazo de sriracha. Al gusto." },
  { ingredient: "Miel", use: "Teriyaki casera: soja + miel + ajo + jengibre." },
  { ingredient: "Papel de arroz", use: "Spring rolls, wraps, rolls fritos." },
];

export const sauces: SauceRecipe[] = [
  {
    name: "Teriyaki casera",
    emoji: "🍯",
    ingredients: "4 cda soja + 2 cda miel + 2 dientes ajo + 1 cdta jengibre rallado",
    preparation: "Mezclar todo en sartén a fuego medio 3-5 min hasta que espese. Glasear pollo o carne.",
    use: "Glasear pollo, cerdo, salmón. Base de bowls teriyaki.",
  },
  {
    name: "Salsa de maní",
    emoji: "🥜",
    ingredients: "3 cda manteca de maní + 2 cda soja + 1 cda miel + 1 diente ajo + 1 cdta jengibre + 3 cda agua caliente",
    preparation: "Mezclar todo hasta que quede cremoso. Ajustar con más agua si queda espeso.",
    use: "Pad thai, spring rolls, noodles fríos, dip de gyozas.",
  },
  {
    name: "Ponzu express",
    emoji: "🍋",
    ingredients: "3 cda soja + 2 cda jugo de limón + 1 cda miel + 1 cda agua",
    preparation: "Mezclar en frío. Dejar reposar 5 min para que se integren los sabores.",
    use: "Poke bowls, salmón, ensaladas, tofu a la plancha.",
  },
  {
    name: "Salsa gyoza",
    emoji: "🥟",
    ingredients: "3 cda soja + 1 cda vinagre (o limón) + 1 cdta aceite de sésamo + ají a gusto",
    preparation: "Mezclar en frío. Opcional: agregar verdeo picado fino.",
    use: "Gyozas, dumplings, rolls, edamames como dip.",
  },
  {
    name: "Salsa agridulce",
    emoji: "🔥",
    ingredients: "2 cda soja + 1 cda vinagre + 2 cda miel + 1 cda ketchup + 1 cdta maicena",
    preparation: "Calentar en sartén revolviendo 2-3 min hasta que espese. La maicena la hace más untuosa.",
    use: "Pollo frito, spring rolls fritos, cerdo salteado.",
  },
];

export const teriyakiRecipe = {
  ingredients: [
    { name: "Salsa de soja", amount: "4 cucharadas" },
    { name: "Miel", amount: "2 cucharadas" },
    { name: "Ajo picado", amount: "2 dientes" },
    { name: "Jengibre rallado", amount: "1 cucharadita" },
  ],
  preparation: "Mezclar todo en sartén a fuego medio 3-5 min hasta que espese. Glasear pollo/carne.",
};
