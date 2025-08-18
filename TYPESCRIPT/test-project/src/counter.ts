export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
<<<<<<< HEAD
}
=======
}
>>>>>>> c6e842c4b535689b8f1ec454947f051026597571
