document.querySelector("#enterBtn").addEventListener("click",()=>{
 const ptag = document.querySelector("#status");
    const htag = document.createElement("h1");
    htag.innerText = "Entered Metaverse";
    htag.id = "status";
    ptag.replaceWith(htag);
})