import Card from './components/Cards.jsx'
import './App.css'

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP._YRByM7l5SCayIje5TRfuwHaHj?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Google",
      post: "Database Engineer",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$45/hour",
      location: "Mountain View, USA"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.AObp7QIyAof716083YAA7gHaHa?w=2048&h=2048&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Apple",
      post: "Feature Developer",
      datePosted: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$70/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://cdn.vectorstock.com/i/500p/60/05/meta-symbol-vector-41876005.jpg",
      companyName: "Meta",
      post: "UI/UX Designer",
      datePosted: "10 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: "$50/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.eqNWXUys5UuDhH959fX-ogHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Amazon",
      post: "Cloud Engineer",
      datePosted: "3 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$65/hour",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/571/non_2x/netflix-logo-on-transparent-background-free-vector.jpg",
      companyName: "Netflix",
      post: "DevOps Engineer",
      datePosted: "1 week ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$80/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg",
      companyName: "Microsoft",
      post: "Algorithm Expert",
      datePosted: "4 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$48/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://i0.wp.com/blog.thearorareport.com/wp-content/uploads/2023/02/nvidia.png?resize=960%2C960&ssl=1",
      companyName: "NVIDIA",
      post: "System Engineer",
      datePosted: "6 weeks ago",
      tag1: "Part Time",
      tag2: "Senior Level",
      payPerHour: "$75/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.Hj6PsFgL1ADjW22JCmiz3gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Tesla",
      post: "Computational Enginner",
      datePosted: "8 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$55/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://clipground.com/images/adobe-logo-png-16.png",
      companyName: "Adobe",
      post: "UI/UX Designer",
      datePosted: "9 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$72/hour",
      location: "San Jose, USA"
    },
    {
      brandLogo: "https://digitalscholar.in/wp-content/uploads/2022/12/oracle-it-software-company-in-delhi.png",
      companyName: "Oracle",
      post: "Cloud Enginner",
      datePosted: "12 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: "$52/hour",
      location: "Austin, USA"
    }
  ];

  return (
    <div className='parent'>
      {
        jobOpenings.map((elem) => {
          return (
            <Card logo={elem.brandLogo} company={elem.companyName} post={elem.post} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} payPerHour={elem.payPerHour} location={elem.location}/>
          )
        })
      }
    </div>

  )
}

export default App;
