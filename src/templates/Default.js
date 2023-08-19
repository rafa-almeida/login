import { GlobalStyle } from "../style/global"
import { AppRouter } from '../Routes/App'
import { BrowserRouter } from "react-router-dom"

const Default = ({ children }) => {
    return (
        <>

            <BrowserRouter />   
            <GlobalStyle />
            <header></header>
            { children }
            <AppRouter />
            <footer></footer>
       
        </>
    )
}

export default Default