import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types";
interface Props {
    selectedPage:SelectedPage,
    setSelectedPage: (value:SelectedPage) => void;
}

export const Navbar = ({selectedPage, setSelectedPage}: Props) => {
     const flexBetween = "flex justify-between items-center"
    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 py-6 w-full`}>
            <div className={`${flexBetween} w-5/6 mx-auto `}>
                <div className={`${flexBetween} gap-16 w-full`}>
                    {/**LEFT SIDE */}
                    <img src={Logo} alt="logo" />
                    {/**RIGHT SIDE */}
                    <div className={`${flexBetween} w-full`}>
                        {/**INNER LEFT */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link 
                        page ="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />
                        <Link 
                        page ="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />
                        <Link 
                        page ="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />
                        <Link 
                        page ="Contact us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} 
                        />
                         
                    </div>
                    {/**INNER RIGHT */}
                    <div className={`${flexBetween} gap-8` }>
                        <p>Sign in</p>
                        <button>Become a member</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}
