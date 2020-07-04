const STORAGE_KEY = 'Bola8FazFuncionarPorFavor'

const isLogged = () => !!localStorage.getItem(STORAGE_KEY)

export { isLogged, STORAGE_KEY }