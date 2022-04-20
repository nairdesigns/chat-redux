// TODO: add and export your own actions
const BASE_URL = "https://wagon-chat.herokuapp.com";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const MESSAGE_POSTED = "MESSAGE_POSTED";
export const CHANNEL_SELECTED = "CHANNEL_SELECTED";

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then((r) => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise, // Will be resolved by redux-promise
  };
}
