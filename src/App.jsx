
import './App.css'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import JobListings from './components/JobListings'
import Navbar from './components/Navbar'
import ViewAllJobs from './components/ViewAllJobs'

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App
