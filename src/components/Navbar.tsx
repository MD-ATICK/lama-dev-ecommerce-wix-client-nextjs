import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
    return (
        <div className="w-full h-20">
            <NavbarMobile />
            <NavbarDesktop />
        </div>
    )
}
