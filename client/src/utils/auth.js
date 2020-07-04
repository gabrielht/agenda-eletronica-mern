var STORAGE_KEY = 'Usuario'

const isLogged = () => !!localStorage.getItem(STORAGE_KEY)

export { isLogged, STORAGE_KEY }