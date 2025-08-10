import Link from "next/link";

export default function Home() {
    return (
        <div className="font-newsCycle text-3xl">
            <Link href="/auth/signup">
                <h1 className="text-3xl font-bold underline">
                    Go to Sign Up
                </h1>
            </Link>
            <p className="text-2xl">Welcome to SmartSport!</p>
            <p className="text-xl">This is the home page of the SmartSport application.</p>
            <p className="text-lg">You can navigate to the Sign Up page to create a new account.</p>
            <p className="text-base">Enjoy your stay!</p>
        </div>
    );
}
