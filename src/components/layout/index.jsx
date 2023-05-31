import Header from "./Header";
import Wrapper from "./Wrapper";

const Layout = ({ children }) => {
    return <>
        <Header />
        <main>
            <Wrapper>
                {children}
            </Wrapper>
        </main>
    </>
}

export default Layout;