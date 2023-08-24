import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function nFormatter(num: number, digits: number = 2) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" }, // тыс.
    { value: 1e6, symbol: "M" }, // млн.
    { value: 1e9, symbol: "B" }, // млрд.
    { value: 1e12, symbol: "T" }, // трлн.
    { value: 1e15, symbol: "квдр." },
    { value: 1e18, symbol: "квнт." }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export function usernameFirstLiterals(username: string) {
  return username.split(" ").map(v => v.slice(0, 1)).slice(0, 2).join("")
}