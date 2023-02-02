import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {

    const links =[
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/tech-defaulters"
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:techdefaulters@gmail.com"
        }
    ]

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map((link) => (
                <li key={link.id} className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md   duration-300 bg-gray-500">
                    <a href="" className="flex justify-between items-center w-full text-white">
                        
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks;