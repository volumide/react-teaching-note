/* eslint-disable react/prop-types */
const Box = ({ type = "text", id, label, ...props }) => (
    <>
        <label htmlFor={id} className="block">
            {label}
        </label>
        <input
            id={id}
            type={type}
            className="w-full border p-5 border-2"
            {...props}
        />
    </>
);
export default Box;
