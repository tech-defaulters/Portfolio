import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";


const SocialLinks = () => {

    const links =[
        {
            id: 1,
            child: (
                <>
                    Instagram <BsInstagram size={30} />
                </>
            ),
            href: "https://www.instagram.com/tech_defaulters/",
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
            href: "mailto:techdefaulters@gmail.com",
            style: "rounded-br-md"
        }
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map((link) => (
                <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md   duration-300 bg-gray-500 " + link.style}>
                    <a href={link.href} className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">
                        {link.child}
                    </a>
                </li>
            ))}            
        </ul>
    </div>
  )
}

export default SocialLinks;