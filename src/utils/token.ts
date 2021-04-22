export function setToken(token: string) {
    window.localStorage.setItem("token", token)
}

export function removeToken() {
    window.localStorage.removeItem("token")
}

export function getToken(): string {
    return window.localStorage.getItem("token") || ""
}