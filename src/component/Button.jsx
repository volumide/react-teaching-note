const Btn = ({ children, classes, variant = "yellow", ...prop }) => (
    <button
        className={`
            py-[17px] px-[32px] ] rounded-[40px] text-white
            ${variant === "yellow" ? "bg-[#FF8D00]" : "bg-[#220E01]"}
            ${classes}
`}
        {...prop}
    >
        {children}
    </button>
);

export default Btn;
