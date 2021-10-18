
const fetchFunc= ()=>{
fetch('https://catfact.ninja/fact')
.then(res=> {
  if(!res.ok){
    console.log("error")
  }
 return res.json()
})
.then(data =>{ console.log(data)
  let container =document.querySelector(".container")
  let box =document.querySelector(".box")
  let fact = document.createElement("h1")
  fact.classList.add("random-fact")
  fact.innerText=data.fact
  box.appendChild(fact)
  console.log(fact)
})
.catch(error => console.log("error"))
}

fetchFunc()
