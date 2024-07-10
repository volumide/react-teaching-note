/* eslint-disable react/prop-types */
const BreadCrumb = ({ arr = [] }) => {
    const breadLenght = arr.length - 1;
    return (
        <div className="py-10">
            {arr.map((e, i) => (
                <span key={e.name}>
                    {e.name}
                    {i < breadLenght ? (
                        <span className="text-red-500"> / </span>
                    ) : (
                        ""
                    )}
                </span>
            ))}
        </div>
    );
};

export default BreadCrumb;
