export const fromStr = (str) => str.replace('rgb(', '').replace(')', '').split(', ');
export const toStr = ([r, g, b]) => `rgb(${r}, ${g}, ${b})`;

export const light = (str, val) => toStr(fromStr(str).map((x) => x * val));