import Item from './item';

const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};
 
const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};
 
const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};
 
const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};
 
const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};
 
const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};
 
const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};
 
const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};
 
const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};
 
const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};
 
const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};
 
const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
};

export default function ItemList() {
  return (
    <ul className='space-y-4 w-full max-w-wind'>
      <Item key={1} {...item1} />
      <Item key={2} {...item2} />
      <Item key={3} {...item3} />
      <Item key={4} {...item4} />
      <Item key={5} {...item5} />
      <Item key={6} {...item6} />
      <Item key={7} {...item7} />
      <Item key={8} {...item8} />
      <Item key={9} {...item9} />
      <Item key={10} {...item10} />
      <Item key={11} {...item11} />
      <Item key={12} {...item12} />
    </ul>
  );
}