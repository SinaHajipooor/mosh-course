async function UsersPage() {
    // fetch users
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    // ui
    return (
        <div>
            shut the fuck off
        </div>
    )
}

export default UsersPage
