import { arr } from "../../misc/breadcrumb";
import BreadCrumb from "../../component/breadcrumb";
import Container from "../../component/container";
import Box from "../../component/Input";
import useHome from "./useHome";

const Home = () => {
    const { handleEvent, submit } = useHome();
    return (
        <>
            <Container>
                <BreadCrumb arr={arr} />
                <Box
                    id="radio"
                    label="Name"
                    name="name"
                    onChange={handleEvent}
                />
                <Box
                    id="radio"
                    label="Whatevr"
                    name="email"
                    onChange={handleEvent}
                />
                <Box
                    id="radio"
                    label="My radio"
                    name="password"
                    onChange={handleEvent}
                />
                <button onClick={submit}>Submit</button>
            </Container>

            <Container></Container>
        </>
    );
};

export default Home;
