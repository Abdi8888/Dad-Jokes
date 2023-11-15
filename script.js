const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  }
  const res = await fetch("https://icanhazdadjoke.com", config)

  const date = await res.json()

  jokeEl.innerHTML = date.joke
}

//// USING .THEN()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   }
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((date) => {
//       jokeEl.innerHTML = date.joke
//     })
// }
