const IconsBtn = ({ children, ...prop }) => (
    <button className="p-[12px] text-gray-900" {...prop}>
        {children}
    </button>
);
export default IconsBtn;
