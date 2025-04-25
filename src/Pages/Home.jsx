import { lazy, Suspense } from "react"
const About = lazy(() => import ("../Components/about"));
const Banel = lazy(() => import ("../Components/Banel"));
const Sales = lazy(() => import ("../Components/Sales"));
const Category = lazy(() => import ("../Components/Category"));
const BestSeling = lazy(() => import ("../Components/BestSeling"));
const Enhance = lazy(() => import ("../Components/Enhance"));
const OurProducts = lazy(() => import ("../Components/OurProducts"));
const Featured = lazy(() => import ("../Components/Featured"));
const Notfound = lazy(() => import ("./Notfound"));

const Home = () => {
    return (
        <section className='pt-15! pb-20! loading'>
            <Suspense fallback={<Notfound/>}>
                <Banel />
                <Sales />
                <Category />
                <BestSeling />
                <Enhance />
                <OurProducts />
                <Featured />
                <About/>
            </Suspense>
        </section>
    )
}

export default Home