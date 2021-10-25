export const submit = async (url, mess, k) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      text: mess,
      key: k,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const result = await response.json();
  return result;
};

export const getCurrentCase = (cases) => {
  return cases.filter((item) => item.active)[0].value;
};
