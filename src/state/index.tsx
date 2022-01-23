import { atom, AtomEffect, DefaultValue } from 'recoil'

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    })
  }

export const FromIndex = atom({
  key: 'FromIndex',
  default: 0
})

export const UserState = atom({
  key: 'UserState',
  default: {},
  effects_UNSTABLE: [localStorageEffect('UserState')]
})
