export default function LogOutButton() {
    return (
        <form action="/auth/sign-out" method="post">
            <button>Log Out</button>
        </form>
    )
}