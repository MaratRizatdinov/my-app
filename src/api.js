// Запрос на получение треков

export async function getAllTracks() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/'
    )

    if (!response.ok) {
        throw new Error('Ошибка сервера')
    }
    const data = await response.json()
    return data
}

// Запрос на регистрацию

export async function getRegisterInSite(email, password, userName) {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/signup/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                username: userName,
            }),
            headers: {
                'content-type': 'application/json',
            },
        }
    )

    if (response.status == 500) {
        throw new Error('Сервер сломан')
    }
    const status = response.status
    const data = await response.json()
    const obj = { status, data }
    return obj
}

// Запрос на авторизацию

export async function getLoginInSite(email, password) {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/login/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'content-type': 'application/json',
            },
        }
    )
    if (response.status == 500) {
        throw new Error('Сервер сломан')
    }
    const status = response.status
    const data = await response.json()
    const obj = { status: status, data: data }
    return obj
}

// Запрос на получение Access и Refresh токена

export async function getAllTokens(email, password) {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/token/',
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'content-type': 'application/json',
            },
        }
    )
    const data = await response.json()
    return data
}

// Запрос на обновление Access токена

export async function getNewAccessToken(refreshToken) {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/user/token/refresh/',
        {
            method: 'POST',
            body: JSON.stringify({
                refresh: refreshToken,
            }),
            headers: {
                'content-type': 'application/json',
            },
        }
    )
    if (response.status == "400" || response.status == "401") {
        throw new Error('Ошибка получения токена')
    }
    const data = await response.json()
    return data
}
