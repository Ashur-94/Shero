export interface MenuItem {
  id: string;
  name: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  items: MenuItem[];
}

export const MENU_DATA: Category[] = [
  {
    id: 'espresso-bar',
    name: 'Espresso Bar',
    color: '#3E2723',
    items: [
      { id: 'eb1', name: 'Single Espresso' },
      { id: 'eb2', name: 'Double Espresso' },
      { id: 'eb3', name: 'Espresso Macchiato' },
      { id: 'eb4', name: 'Americano' },
      { id: 'eb5', name: 'Cortado' },
      { id: 'eb6', name: 'Flat White' },
      { id: 'eb7', name: 'Cappuccino' },
      { id: 'eb8', name: 'Caffe Latte' },
      { id: 'eb9', name: 'Affogato Espresso' },
    ]
  },
  {
    id: 'flavored-latte',
    name: 'Flavored Latte',
    color: '#795548',
    items: [
      { id: 'fl1', name: 'Spanish Latte' },
      { id: 'fl2', name: 'Vanilla Latte' },
      { id: 'fl3', name: 'Caramel Latte' },
      { id: 'fl4', name: 'Salted Caramel Latte' },
      { id: 'fl5', name: 'Hazelnut Latte' },
      { id: 'fl6', name: 'Coconut Latte' },
      { id: 'fl7', name: 'Toffee Nut Latte' },
      { id: 'fl8', name: 'Cinnamon Latte' },
    ]
  },
  {
    id: 'mocha',
    name: 'Mocha',
    color: '#4E342E',
    items: [
      { id: 'm1', name: 'Hot Dark Mocha' },
      { id: 'm2', name: 'Hot White Mocha' },
      { id: 'm3', name: 'Hot Caramel Mocha' },
      { id: 'id2', name: 'Iced Dark Mocha' },
      { id: 'id3', name: 'Iced White Mocha' },
      { id: 'id4', name: 'Iced Caramel Mocha' },
    ]
  },
  {
    id: 'traditional',
    name: 'Traditional',
    color: '#263238',
    items: [
      { id: 't1', name: 'Turkish Coffee' },
      { id: 't2', name: 'Kazwan Coffee' },
      { id: 't3', name: 'Karak Tea' },
    ]
  },
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    color: '#8D1F17',
    items: [
      { id: 'hd1', name: 'Hot Chocolate' },
      { id: 'hd2', name: 'Hot Chocolate Mint' },
      { id: 'hd3', name: 'Hot Chocolate Toffee Nut' },
      { id: 'hd4', name: 'Hot Chocolate Hazelnut' },
      { id: 'hd5', name: 'Hot Chocolate Cookies' },
      { id: 'hd6', name: 'Hot Milk' },
      { id: 'hd7', name: 'Hot Milk Vanilla' },
      { id: 'hd8', name: 'Hot Milk Caramel' },
      { id: 'hd9', name: 'Hot Milk Honey' },
    ]
  },
  {
    id: 'iced-drinks',
    name: 'Iced Drinks',
    color: '#1A3F5E',
    items: [
      { id: 'id1', name: 'Iced Americano' },
      { id: 'id5', name: 'Iced Caramel Macchiato' },
      { id: 'id6', name: 'Iced Cappuccino' },
      { id: 'id7', name: 'Iced Latte' },
      { id: 'id8', name: 'Iced Spanish Latte' },
      { id: 'id9', name: 'Iced Vanilla Latte' },
      { id: 'id10', name: 'Iced Caramel Latte' },
      { id: 'id11', name: 'Iced Salted Caramel Latte' },
      { id: 'id12', name: 'Iced Hazelnut Latte' },
      { id: 'id13', name: 'Iced Coconut Latte' },
      { id: 'id14', name: 'Iced Cinnamon Latte' },
      { id: 'id15', name: 'Iced Cookies Latte' },
      { id: 'id16', name: 'Iced Rose Latte' },
      { id: 'id17', name: 'Iced Pink Latte' },
      { id: 'id18', name: 'Iced Coffee Caramel' },
      { id: 'id19', name: 'Iced Coffee Toffee Nut' },
      { id: 'id20', name: 'Iced Coffee Irish' },
    ]
  },
  {
    id: 'v60-speciality',
    name: 'V60 Speciality',
    color: '#2E4C31',
    items: [
      { id: 'v1', name: 'Hot Ethiopian V60' },
      { id: 'v2', name: 'Hot Colombia V60' },
      { id: 'v3', name: 'Hot Brazil V60' },
      { id: 'v4', name: 'Iced Ethiopia V60' },
      { id: 'v5', name: 'Iced Colombia V60' },
      { id: 'v6', name: 'Iced Brazil V60' },
    ]
  },
  {
    id: 'matcha',
    name: 'Matcha',
    color: '#4B5320',
    items: [
      { id: 'ma1', name: 'Hot Matcha Latte' },
      { id: 'ma2', name: 'Hot White Chocolate Matcha Latte' },
      { id: 'ma3', name: 'Hot Vanilla Matcha Latte' },
      { id: 'ma4', name: 'Iced Matcha Latte' },
      { id: 'ma5', name: 'Iced Strawberry Matcha Latte' },
      { id: 'ma6', name: 'Iced Moon Matcha Latte' },
    ]
  },
  {
    id: 'frappe',
    name: 'Frappe',
    color: '#6D4C41',
    items: [
      { id: 'fr1', name: 'Classic Coffee' },
      { id: 'fr2', name: 'Chocolate' },
      { id: 'fr3', name: 'Caramel' },
      { id: 'fr4', name: 'Vanilla' },
      { id: 'fr5', name: 'Cinnamon' },
      { id: 'fr6', name: 'Cookies' },
      { id: 'fr7', name: 'Oreo' },
      { id: 'fr8', name: 'Black Coconut' },
    ]
  },
  {
    id: 'milkshake',
    name: 'Milkshake',
    color: '#601D41',
    items: [
      { id: 'ms1', name: 'Mocha' },
      { id: 'ms2', name: 'Caramel' },
      { id: 'ms3', name: 'Vanilla' },
      { id: 'ms4', name: 'Chocolate' },
      { id: 'ms5', name: 'Coconut' },
      { id: 'ms6', name: 'Strawberry' },
      { id: 'ms7', name: 'Mango' },
      { id: 'ms8', name: 'Nutella' },
      { id: 'ms9', name: 'Pistachio' },
      { id: 'ms10', name: 'Oreo' },
      { id: 'ms11', name: 'Lotus' },
      { id: 'ms12', name: 'Cookies' },
      { id: 'ms13', name: 'Kinder' },
      { id: 'ms14', name: 'Pink Coconut' },
    ]
  },
  {
    id: 'smoothie',
    name: 'Smoothie',
    color: '#B35123',
    items: [
      { id: 'sm1', name: 'Strawberry' },
      { id: 'sm2', name: 'Mango' },
      { id: 'sm3', name: 'Passion Fruit' },
      { id: 'sm4', name: 'Blueberry' },
      { id: 'sm5', name: 'Blue Hawaii' },
      { id: 'sm6', name: 'Pink Storm' },
      { id: 'sm7', name: 'Citrus Bloom' },
      { id: 'sm8', name: 'Green Lime' },
    ]
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    color: '#BF711C',
    items: [
      { id: 'it1', name: 'Lemon Tea' },
      { id: 'it2', name: 'Peach Tea' },
      { id: 'it3', name: 'Passion Fruit Tea' },
      { id: 'it4', name: 'Lychee Tea' },
    ]
  },
  {
    id: 'fresh-juice',
    name: 'Fresh Juice',
    color: '#D49B2F',
    items: [
      { id: 'fj1', name: 'Orange' },
      { id: 'fj2', name: 'Mango' },
      { id: 'fj3', name: 'Strawberry' },
      { id: 'fj4', name: 'Pineapple' },
      { id: 'fj5', name: 'Lemon Mint' },
      { id: 'fj6', name: 'Banana Milk' },
      { id: 'fj7', name: 'Avocado Milk' },
      { id: 'fj8', name: 'Mango Pineapple' },
    ]
  },
  {
    id: 'mojito',
    name: 'Mojito',
    color: '#1B4D3E',
    items: [
      { id: 'mo1', name: 'Classic' },
      { id: 'mo2', name: 'Strawberry' },
      { id: 'mo3', name: 'Mango' },
      { id: 'mo4', name: 'Passion Fruit' },
      { id: 'mo5', name: 'Blueberry' },
      { id: 'mo6', name: 'Blue Hawaii' },
      { id: 'mo7', name: 'Cherry' },
      { id: 'mo8', name: 'Bubblegum Watermelon' },
      { id: 'mo9', name: 'Peach Pineapple' },
      { id: 'mo10', name: 'Apple Kiwi' },
    ]
  },
  {
    id: 'energy-drinks',
    name: 'Energy Drinks',
    color: '#153A6B',
    items: [
      { id: 'ed1', name: 'Red Bull Classic' },
      { id: 'ed2', name: 'Red Bull Mojito' },
      { id: 'ed3', name: 'Red Bull Strawberry' },
      { id: 'ed4', name: 'Red Bull Green' },
      { id: 'ed5', name: 'Red Bull Mix' },
    ]
  },
  {
    id: 'chia-refreshers',
    name: 'Chia Refreshers',
    color: '#3B1E54',
    items: [
      { id: 'cr1', name: 'Chia Mango' },
      { id: 'cr2', name: 'Chia Strawberry' },
      { id: 'cr3', name: 'Chia Banana' },
      { id: 'cr4', name: 'Chia Avocado' },
      { id: 'cr5', name: 'Chia Nuts' },
      { id: 'cr6', name: 'Chia Mix' },
    ]
  },
  {
    id: 'protein-power',
    color: '#263238',
    name: 'Protein Power Shakes',
    items: [
      { id: 'pp1', name: 'Coffee' },
      { id: 'pp2', name: 'Banana' },
      { id: 'pp3', name: 'Strawberry' },
      { id: 'pp4', name: 'Avocado' },
      { id: 'pp5', name: 'Desert Beast' },
      { id: 'pp6', name: 'Chocolate Fuel Monster' },
    ]
  },
  {
    id: 'water',
    name: 'Water',
    color: '#1A4F52',
    items: [
      { id: 'w1', name: 'Water' },
      { id: 'w2', name: 'Tonic' },
    ]
  },
];
