const addInfo = async ({ name, funcao, nif }) => {
  return await fetch('http://localhost:3030/generate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      funcao,
      nif,
    }),
  })
    .then((data) => data.json())
    .then((json) => {
      console.log('response=>', json.data);
      return json.data;
    });
};

export { addInfo };
