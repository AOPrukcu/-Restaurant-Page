import  tacoimage from "./imgs/pexels-amar-27938734.jpg"
import  img2 from "./imgs/pexels-anil-fatih-tiryaki-1925446021-28889272.jpg"
import  img3 from "./imgs/pexels-melaudelo-27600008.jpg"
import  img4 from "./imgs/pexels-nano-erdozain-120534369-27643028.jpg"
import  img5 from "./imgs/pexels-pixabay-461198.jpg"
import  img6 from "./imgs//pexels-rachel-claire-5531160.jpg"
import  img7 from "./imgs/pexels-raduz-10564-58722.jpg"
import  img8 from "./imgs/pexels-rdne-6004182.jpg"
import  img9 from "./imgs/pexels-shameel-mukkath-3421394-10296274.jpg"
import  img10 from "./imgs/pexels-silvia-trigo-545701-1292984.jpg"
import  img11 from "./imgs//pexels-thishanabee-3642718.jpg"
import  img12 from "./imgs/pexels-vidalbalielojrfotografia-10949543.jpg"
export const mexicanDishes = [
  {
    name: "Taco",
    description:
      "A traditional Mexican dish consisting of a corn tortilla filled with meat, vegetables, and salsa.",
    price: "$2.99",
    imageUrl: tacoimage,
  },
  {
    name: "Burrito",
    description:
      "A flour tortilla filled with beans, meat, and rice, wrapped into a cylinder.",
    price: "$5.49",
    imageUrl: img2,
  },
  {
    name: "Nachos",
    description:
      "Tortilla chips topped with cheese and jalapeños, often served with salsa.",
    price: "$4.99",
    imageUrl: img3,
  },
  {
    name: "Quesadilla",
    description:
      "A tortilla filled with cheese and folded in half, then grilled until melted.",
    price: "$6.29",
    imageUrl: img4,
  },
  {
    name: "Enchiladas",
    description:
      "Corn tortillas rolled around a filling, covered with chili sauce and cheese.",
    price: "$7.99",
    imageUrl: img5,
  },
  {
    name: "Chalupa",
    description:
      "A fried tortilla filled with meat, lettuce, tomatoes, and cheese.",
    price: "$3.49",
    imageUrl: img6,
  },
  {
    name: "Fajitas",
    description:
      "Grilled meat and vegetables served with tortillas, allowing you to make your own wraps.",
    price: "$9.99",
    imageUrl: img7,
  },
  {
    name: "Tamales",
    description:
      "Masa dough filled with meat or vegetables, wrapped in corn husks and steamed.",
    price: "$4.99",
    imageUrl: img8,
  },
  {
    name: "Chiles Rellenos",
    description:
      "Stuffed and fried poblano peppers, often filled with cheese or meat.",
    price: "$8.49",
    imageUrl: img9,
  },
  {
    name: "Sopes",
    description:
      "Thick corn tortillas topped with beans, meat, and various toppings.",
    price: "$3.99",
    imageUrl: img10,
  },
  {
    name: "Ceviche",
    description:
      "Fresh fish and seafood marinated in lime juice, often served as a refreshing dish.",
    price: "$12.99",
    imageUrl: img11,
  },
  {
    name: "Mole Poblano",
    description:
      "A rich sauce made with chocolate and spices, often served with meat.",
    price: "$10.99",
    imageUrl: img12,
  },
];

export function createMenuPage(menuItems, content) {
  content.innerHTML = "";
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Menu";
  content.appendChild(title)

  function createMenuItem(item) {
    const page_item = document.createElement("div");
    page_item.classList.add("item");
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
        <div class="menu-header">${item.name}</div>
        <div class="menu-description">${item.description}</div>
        <div class="menu-footer">
            <div class="menu-price">${item.price}</div>
            <img src="${item.imageUrl}" alt="${item.name}" class="menu-image">
        </div>
    `;
    page_item.appendChild(menuItem);

    return page_item;
  }

  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item);
    content.appendChild(menuItem);
  });
}
