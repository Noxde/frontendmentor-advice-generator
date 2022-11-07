let adviceP = document.querySelector(".advice");
let heading = document.querySelector("h1");
let btn = document.querySelector("button");

async function getAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    cache: "no-cache",
  });

  let {
    slip: { id, advice },
  } = await response.json();

  return [id, advice];
}

btn.addEventListener("click", async () => {
  let [id, advice] = await getAdvice();

  heading.innerText = `Advice #${id}`;
  adviceP.textContent = `“${advice}”`;
});
