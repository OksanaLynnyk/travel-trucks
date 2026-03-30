export const filterItems = [
  { name: "AC", fixedValue: true, label: "AC", icon: "icon-ac" },
  {
    name: "refrigerator",
    fixedValue: true,
    label: "Refrigerator",
    icon: "icon-fridge",
  },
  {
    name: "kitchen",
    fixedValue: true,
    label: "Kitchen",
    icon: "icon-cup-kitchen",
  },
  { name: "TV", fixedValue: true, label: "TV", icon: "icon-tv" },
  {
    name: "bathroom",
    fixedValue: true,
    label: "Bathroom",
    icon: "icon-shower",
  },
];

export const filterItemsRadio = [
  { value: "", label: "All", icon: "icon-all" },
  { value: "panelTruck", label: "Van", icon: "icon-type-van" },
  {
    value: "fullyIntegrated",
    label: "Fully Integrated",
    icon: "icon-type-fully-int",
  },
  { value: "alcove", label: "Alcove", icon: "icon-type-alcove" },
];

export const getCamperTypeConfig = (form) =>
  filterItemsRadio.find((item) => item.value === form);

export const features = [
  { key: "transmission", icon: "icon-transmission", label: "Transmission" },
  { key: "engine", icon: "icon-engine", label: "Engine" },
  { key: "kitchen", icon: "icon-cup-kitchen", label: "Kitchen" },
  { key: "AC", icon: "icon-ac", label: "AC" },
  { key: "TV", icon: "icon-tv", label: "TV" },
  { key: "bathroom", icon: "icon-shower", label: "Bathroom" },
  { key: "refrigerator", icon: "icon-fridge", label: "Refrigerator" },
  { key: "radio", icon: "icon-radio", label: "Radio" },
  { key: "microwave", icon: "icon-microwave", label: "Microwave" },
  { key: "gas", icon: "icon-gas-stove", label: "Gas" },
  { key: "water", icon: "icon-water", label: "Water" },
];

export const MENU_ITEMS = [
  { key: "/", label: "Home" },
  { key: "/catalog", label: "Catalog" },
  { key: "/favorites", label: "Favorites" },
];
