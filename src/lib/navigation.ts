const HOME_HASH = '#/';
const CHALLENGE_PREFIX = '#/challenge/';

export function getChallengeHash(id: string) {
  return `${CHALLENGE_PREFIX}${id}`;
}

export function getChallengeIdFromHash(hash: string) {
  if (!hash || hash === '#') {
    return null;
  }

  if (hash.startsWith(CHALLENGE_PREFIX)) {
    return hash.slice(CHALLENGE_PREFIX.length) || null;
  }

  return null;
}

export function goHome() {
  window.location.hash = HOME_HASH;
}

export function goToChallenge(id: string) {
  window.location.hash = getChallengeHash(id);
}
