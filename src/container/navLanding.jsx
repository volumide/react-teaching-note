import Btn from "../component/Button";
import Container from "../component/container";
const NavbarLanding = () => {
    return (
        <>
            <Container>
                <div>LOGO</div>
                <ul className="md:flex gap-[35px] hidden">
                    <li>Shop</li>
                    <li>Contact us</li>
                    <li>Help</li>
                </ul>
                <div>
                    <Btn classes="bg-transparent py-0 px-0 text-gray-900 md:hidden">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.375 19.2519H23.625M4.375 8.75189H23.625H4.375ZM4.375 14.0019H23.625H4.375Z"
                                stroke="#1E1E1E"
                                strokeWidth="1.75"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                        </svg>
                    </Btn>
                    <div className="hidden md:flex items-center">
                        <Btn classes="bg-transparent text-gray-900">Login</Btn>
                        <Btn variant="brown">Sign up</Btn>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default NavbarLanding;
