import Navbar from '@/components/nav/Navbar'
import Ticker from '@/components/ticker/Ticker'
import Hero from '@/components/hero/Hero'
import TaleOfTheTape from '@/components/differentiator/TaleOfTheTape'
import MenuPreview from '@/components/menu/MenuPreview'
import WhyTallow from '@/components/tallow/WhyTallow'
import HomeField from '@/components/location/HomeField'
import JoinTheTeam from '@/components/roster/JoinTheTeam'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Ticker />
      <Hero />
      <TaleOfTheTape />
      <MenuPreview />
      <WhyTallow />
      <HomeField />
      <JoinTheTeam />
      <Footer />
    </main>
  )
}
