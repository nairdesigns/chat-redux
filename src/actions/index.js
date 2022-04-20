// TODO: add and export your own actions

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then((r) => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise, // Will be resolved by redux-promise
  };
}
