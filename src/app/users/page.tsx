// define the type of each user 
interface User {
    id: number;
    name: string;
}

async function UsersPage() {
    // fetch users
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 10 }
    });
    const users: User[] = await response.json()

    // ui
    return (
        <>
            <h1>Users</h1>
            <br />
            <ul>
                {
                    users.map((user: User) => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </>
    )
}

export default UsersPage


