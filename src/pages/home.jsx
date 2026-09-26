import FAQ from "../components/faq"
import Footer from "../components/footer"
import Hero from "../components/hero"
import HowItWorks from "../components/howitsWork"
import Navbar from "../components/navbar"
import Packages from "../components/Packages"
import Reviews from "../components/riview"

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Packages/>
            <Reviews/>
            <HowItWorks/>
            <FAQ/>
            <Footer/>
        </>
    )
}
export default HomePage