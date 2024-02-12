import Container from "./components/Container";
import { Providers } from "./components/Providers";
import Properties from "./components/property/Properties";

export default function Home() {
  return (
    <Providers>
      <Properties/>
    </Providers>
  )
}
