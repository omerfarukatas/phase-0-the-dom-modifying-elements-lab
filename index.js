// Write your code here!

main.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory")
// newHeader.id = "victory"

newHeader.textContent = "Omer is the champion"

document.body.append(newHeader);