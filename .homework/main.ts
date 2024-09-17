const timer = async () => {
  const promise = await new Promise((resolve, reject) => {
    const time = 1 + Math.round(Math.random() * 7) // с рандомом подсмотрел у тебя, каюсь) А то я так как его сделать нормально)
    setTimeout(() => {resolve(time)}, time * 1000);
    setTimeout(() => {reject("Я раньше")}, 4000);
  })
  console.log(promise);
}

timer()