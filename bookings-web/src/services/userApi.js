export const createUser = async (user) => {
    await fetch(`${process.env.BASE_URL}/users/create`, {
        'method': 'POST',
        'body': JSON.stringify(user)
    })
        .then(response => response.json())
        .then(res => { console.log('Success:', res) })

}