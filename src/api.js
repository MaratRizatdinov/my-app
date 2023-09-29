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
