/** Gets a random message out of list of messages */
function getRandomMsg(msgs) {
  const index = Math.floor(Math.random() * msgs.length);
  return msgs[index];
}

export { getRandomMsg };