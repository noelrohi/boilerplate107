import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <main className="container flex items-center">
      <div>Dashboard</div>
      <UserButton />
    </main>
  );
}
