import Header from "components/Header"
import PromotionalGrid  from "./components/PromotionalGrid"
import OurServicesGrid from "./components/OurServicesGrid"

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <PromotionalGrid />
        <OurServicesGrid />
      </main>
    </>
  )
}

export default Homepage
