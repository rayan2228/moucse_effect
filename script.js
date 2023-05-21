const move_element_parent = document.querySelector(".move_element_parent");
function moveEffect(e) {
  let move_element = document.createElement("div");
  move_element.classList.add("move_element");
  move_element_parent.appendChild(move_element);
  move_element.style.top = e.clientY + "px";
  move_element.style.left = e.clientX + "px";
  move_element.style.left = move_element.offsetLeft + "px";
  move_element.classList.add("hidden");
}
document.addEventListener("mousemove", moveEffect);
setInterval(() => { 
  let lists = Array.from(move_element_parent.children);
  for (const list of lists) {
    if (lists.length > 500) {
      if (list.classList.contains("hidden")) {
        move_element_parent.removeChild(list);
      }
    }
  }
}, 10000);
