document.querySelector("#enterBtn").addEventListener("click",()=>{
  let ptag = document.querySelector("#status")
  let htag = document.createElement("h1")
	htag.innerHTML = "Entered Metaverse"
	htag.id = ptag.id
	ptag.parentNode.replaceChild(htag,ptag)
})