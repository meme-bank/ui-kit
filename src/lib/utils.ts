import { type ClassValue, clsx } from "clsx"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(
    [
      inputs[0]?.toString().split(" ").map(
        val => [
          ...val.split(":").slice(0, -1),
          (val.split(":").slice(-1)[0].startsWith("ms-") ? val.split(":").slice(-1)[0] : "ms-" + val.split(":").slice(-1)[0])
        ].join(":")
      ),
      ...inputs.splice(1)
    ]
    ));
}

export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
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

// 23:00 21.01.20
export function dateFormat(date: Date, miniYear = false) {
  // time
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const time = [hours, minutes].join(":");

  // date
  const year = miniYear ? date.getFullYear().toString().slice(2, 4).padStart(2, "0") : date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const __date = [day, month, year].join(".");

  // format
  const format = [time, __date].join(" ");

  return format;
}