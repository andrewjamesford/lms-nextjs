import Link from 'next/link'
import Messages from './messages'

export default function Login() {
  return (
    <div className="">
      <Link
        href="/"
        className=""
      >
        
        Back
      </Link>

      <form
        className=""
        action="/auth/sign-in"
        method="post"
      >
        <label className="" htmlFor="email">
          Email
        </label>
        <input
          className=""
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className=""
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className=""
        >
          Sign Up
        </button>
        <Messages />
      </form>
    </div>
  )
}
