async function muutaVarausta(id, vapaa) {
  const data = {
    id,
    vapaa,
  };
  const options = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const vastaus = await fetch('./varaus', options);
  const varaus = await vastaus.json();
  console.log(varaus);
  if (varaus.vastaus === 'valmis') {
    location.href = './varaushallinta';
  }
}

const muutosnapit = document.querySelectorAll('.muutos');
for (let muutosnappi of muutosnapit) {
  muutosnappi.addEventListener('click', function () {
    const id = muutosnappi.dataset.id;
    let vapaa = muutosnappi.dataset.vapaa;
    vapaa = 1 - vapaa;
    muutaVarausta(id, vapaa);
  });
}
