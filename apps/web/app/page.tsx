export default async function Home() {
  const res = await fetch("http://localhost:3002/users", { cache: "no-store" });
  const user = await res.json();

  return (
    <div>
      <h1>Hello world what's up i am doing a CD pipeline test</h1>
      Name:
      {user?.username}
      Password:
      {user?.password}

    </div>
  );
}
