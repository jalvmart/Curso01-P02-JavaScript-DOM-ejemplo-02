const app = document.getElementById("app")

const newTagH1 = document.createElement("h1")
const texH1 = "Desarrollo Web Básico"
const newTexH1 = document.createTextNode(texH1)

newTagH1.appendChild(newTexH1)
app.appendChild(newTagH1)

//Create taget ul
const newTagUL = document.createElement("ul")
newTagUL.id = "list1"
app.appendChild(newTagUL)

//Create list
const arrayList = ["HTML","CSS","JavaScript"]
const listUL = document.getElementById("list1")

for (let i = 0; i < arrayList.length; i++){
    const newTagLI = document.createElement("li")
    const newTexLI = document.createTextNode(arrayList[i])
    newTagLI.appendChild(newTexLI)
    listUL.appendChild(newTagLI)     
}






