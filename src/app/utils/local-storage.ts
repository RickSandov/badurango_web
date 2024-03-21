import { ObjectValues } from "@/types";

export const localStorageKey = {
  products: "products",
} as const;

export const localStorageKeys = Object.values(localStorageKey);

export type TLocalStorageKey = ObjectValues<typeof localStorageKey>;

export function saveToLocalStorage(key: TLocalStorageKey, value: any) {
  const itemExists = getFromLocalStorage(key);
  if (itemExists) {
    editLocalStorageItem(key, value);
  }
  localStorage.setItem(key, JSON.stringify(value));
}

export function deleteFromLocalStorage(key: TLocalStorageKey) {
  localStorage.removeItem(key);
}

export function getFromLocalStorage(key: TLocalStorageKey) {
  return localStorage.getItem(key);
}

export function editLocalStorageItem(key: TLocalStorageKey, newValue: any) {
  let oldValue = localStorage.getItem(key);

  if (oldValue !== null) {
    localStorage.setItem(key, JSON.stringify(newValue));
    return true;
  }
  return false;
}
