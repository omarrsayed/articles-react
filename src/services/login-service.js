const TOKEN = "token";

export function saveToken(token) {
  localStorage.setItem(TOKEN, token);
}

export function isLogin() {
  if (localStorage.getItem(TOKEN) === null) return false;
  return true;
}

export function logout() {
  localStorage.removeItem(TOKEN);
}
