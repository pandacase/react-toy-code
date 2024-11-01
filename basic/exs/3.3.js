
const db = (fn, time) => {
  let timer = null;
  return (...arg) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...arg), time);
  }
}