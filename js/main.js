let array = [1, 2, [1, 2, 3, [1, 2, 3, 4]], 5];

const generateList = (array, prefix = "") => {
  const ul = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const li = document.createElement("li");
    if (Array.isArray(item)) {
      li.appendChild(generateList(item, i + 1));
    } else {
      console.log(item);
      li.textContent = prefix ? prefix + "." + item : item;
    }
    ul.appendChild(li);
  }
  return ul;
};

document.body.prepend(generateList(array));
