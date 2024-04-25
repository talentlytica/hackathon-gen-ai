'use client'

export const saveToLocalStorage = (key:string, value: any) => {
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value):value)
}

export const getFromLocalStorage = (key:string) => {
  const data = localStorage.getItem(key)

  return data ? JSON.parse(data) : null
}
