import { lazy, Suspense } from 'react'
const Part_About =lazy(() => import ("../Components/about"));
const OurStory =lazy(() => import ("../Components/OurStory"));
const Stats =lazy(() => import ("../Components/Stats"));
const Team =lazy(() => import ("../Components/Team"));
const Notfound =lazy(() => import ("./Notfound"));

const About = () => {
    return (
        <section className='py-20! loading'>
            <Suspense fallback={<Notfound/>}>
                <OurStory/>
                <Stats/>
                <Team/>
                <Part_About/>
            </Suspense>
        </section>
    )
}

export default About