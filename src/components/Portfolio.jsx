import gym from "../images/gym.png";
import cricket from "../images/cricket.png";
import school from "../images/education.png";
import shop from "../images/store.png";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: gym,
            alt: "gym website"
        },
        {
            id: 2,
            src: cricket,
            alt: "cricket academy website"
        },
        {
            id: 3,
            src: school,
            alt: "schol website"
        },
        {
            id: 4,
            src: shop,
            alt: "shop website"
        }
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</h1>
                <p className="py-6">Check out some of our work right here.</p>
            </div>
           
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
                portfolios.map(({id, src, alt}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt={alt} className="w-1/2 mx-auto rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div>
                    </div>
                ))
            }                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;