import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the landing page of this website</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
