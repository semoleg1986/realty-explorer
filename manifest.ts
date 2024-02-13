import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Realty Explorer",
    short_name: "Realty",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  }
}