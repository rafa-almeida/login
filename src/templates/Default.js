import { GlobalStyle } from "../style/global"


const Default = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <header></header>
            { children }
            <footer></footer>
        </>
    )
}

export default Default