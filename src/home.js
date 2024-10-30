
export const mainParagraphContents = [
  " Wow oh wow! These are some great tacos, and for a great price fast! Not too many options to pick from, which.",
  " I can't explain how many times Me & My Wife came to eat here! Across NYC there are a few dotted around. We tried here & Chelsea Market. Both EXCELLENT. Best Mexican food we have ever eaten",
  " These are the best tacos Ive ever had, we went back 3 times over our vacation time. The fillings were perfectly seasoned and so flavoursome with all the toppings including the extra sauces you can help yourself to. I had the pork and the.",
];

export function createMainPage(num, contents,content,title_class,title_text) {
  content.innerHTML = "";
  const title_item  = document.createElement("div")
  title_item.classList.add(title_class);
  const title   = document.createElement("div")
  title.textContent= title_text
  title.classList.add("title");
  title_item.appendChild(title)
  content.appendChild(title_item)

  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    div.classList.add("item");

    const card = document.createElement("div");
    card.classList.add("card");
    const p = document.createElement("p");
    p.innerHTML = contents[i];
    card.appendChild(p);
    div.appendChild(card);

    content.appendChild(div);
  }
}
