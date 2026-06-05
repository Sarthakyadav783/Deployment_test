export default async function Home() {
  const res = await fetch("http://localhost:3002/users", { cache: "no-store" });
  const user = await res.json();

  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  );
}
