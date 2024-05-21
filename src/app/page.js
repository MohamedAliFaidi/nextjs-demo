
import Profile from "@/components/Profile";
export default function Home() {
  const data = fetch("http://localhost:3000/api/test").then(res => res.json()).then(data => console.log(data, "hereeeeee"))

  return (
    <><Profile /></>

  );
}
