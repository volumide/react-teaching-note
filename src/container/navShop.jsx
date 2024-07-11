import IconsBtn from "../component/IconBtn";

// import Btn from "../component/Button";
const NavbarShop = () => {
    return (
        <>
            <div
                className="
                md:py-[16px] md:px-[96px] p-[22px]
                flex items-center justify-between
                "
            >
                <div>LOGO</div>
                <div>
                    <input
                        className="w-[500px] p-[13px] px-[24px] bg-[#F4F4F4] rounded-[16px]"
                        placeholder="Search by name"
                    />
                </div>
                <div className="flex itmes-center">
                    <IconsBtn>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.5431 3.75031C13.5 3.75031 12 6.75031 12 6.75031C12 6.75031 10.5 3.75031 7.45687 3.75031C4.98374 3.75031 3.0253 5.81937 2.99999 8.28827C2.94843 13.4131 7.06546 17.0577 11.5781 20.1205C11.7025 20.2051 11.8495 20.2504 12 20.2504C12.1505 20.2504 12.2975 20.2051 12.4219 20.1205C16.9341 17.0577 21.0511 13.4131 21 8.28827C20.9747 5.81937 19.0162 3.75031 16.5431 3.75031V3.75031Z"
                                stroke="#220E01"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </IconsBtn>
                    <IconsBtn>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.5 8.25482V6.75482C7.5 5.56135 7.97411 4.41676 8.81802 3.57284C9.66193 2.72893 10.8065 2.25482 12 2.25482V2.25482C13.1935 2.25482 14.3381 2.72893 15.182 3.57284C16.0259 4.41676 16.5 5.56135 16.5 6.75482V8.25482M3.75 8.25482C3.55109 8.25482 3.36032 8.33384 3.21967 8.47449C3.07902 8.61514 3 8.80591 3 9.00482V19.1298C3 20.5473 4.2075 21.7548 5.625 21.7548H18.375C19.7925 21.7548 21 20.6059 21 19.1884V9.00482C21 8.80591 20.921 8.61514 20.7803 8.47449C20.6397 8.33384 20.4489 8.25482 20.25 8.25482H3.75Z"
                                stroke="#220E01"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.5 10.5031V11.2531C7.5 12.4465 7.97411 13.5911 8.81802 14.435C9.66193 15.2789 10.8065 15.7531 12 15.7531C13.1935 15.7531 14.3381 15.2789 15.182 14.435C16.0259 13.5911 16.5 12.4465 16.5 11.2531V10.5031"
                                stroke="#220E01"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </IconsBtn>
                    <IconsBtn>
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.25 16.5016H20.75M4.25 7.50165H20.75H4.25ZM4.25 12.0016H20.75H4.25Z"
                                stroke="#220E01"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                        </svg>
                    </IconsBtn>
                </div>
            </div>
        </>
    );
};

export default NavbarShop;
