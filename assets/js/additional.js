let seeMore = document.getElementById("see-more");
seeMore.style.display = "none";

const seeMoreOnClick = () => {
    let btnMore = document.getElementById("button-see-more");
    
    if (seeMore.style.display === "none") {
        btnMore.innerHTML = "See Less"; 
        seeMore.style.display = "inline";
    } else {
        btnMore.innerHTML = "See More"; 
        seeMore.style.display = "none";
      }
}