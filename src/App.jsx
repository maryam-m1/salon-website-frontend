import Preloader from './components/Preloader'
import OfferBanner from './components/OfferBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import Quiz from './components/Quiz'
import BridalJourney from './components/BridalJourney'
import Packages from './components/Packages'
import BeforeAfter from './components/BeforeAfter'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Gift from './components/Gift'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'
import WhatsAppFloat from './components/WhatsAppFloat'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <>
      {/* pointed-arch (mehrab) mask, reused via .mehrab */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="mehrab" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0,0.42 C0,0.2 0.35,0.12 0.5,0 C0.65,0.12 1,0.2 1,0.42 L1,1 Z" />
          </clipPath>
        </defs>
      </svg>
      <Preloader />
      <OfferBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Quiz />
        <BridalJourney />
        <Packages />
        <BeforeAfter />
        <Gallery />
        <Team />
        <Testimonials />
        <Gift />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <WhatsAppFloat />
      <Cursor />
    </>
  )
}
