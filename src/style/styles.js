import styled  from 'styled-components'


export const Root= styled.div `
    width: 100vw;
    height: 100vh;

    @media (min-width: 320px) and (max-width: 480px) {
    /* media query utilizado para smartphones */
    
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    @media (min-width: 481px) and (max-width: 768px) {
    /* media query utilizado para smartphones e iPads */
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
    /* media query utilizado para tablets e notebooks */
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        
       
}
@media (min-width: 1024px) and (max-width: 1240px)  {
    /* media query utilizado para notebooks e computadores desktops */
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
}
`;

export const Imagem= styled.div `
    
   
    img{
        width: 52em;
        height: 42em;   
    }

    @media (min-width: 320px) and (max-width: 480px) {
    /* media query utilizado para smartphones */
    
        opacity: 0.6;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 20%;
        width: 100%;  
    }

    @media (min-width: 481px) and (max-width: 768px) {
    /* media query utilizado para smartphones e iPads */
        opacity: 0.6;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 20%;
        width: 100%; 
    }

    @media (min-width: 769px) and (max-width: 1024px) {
    /* media query utilizado para tablets e notebooks */
        opacity: 0.6;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 20%;
        width: 100%; 
    }
    @media (min-width: 1024px) and (max-width: 1240px) {
    /* media query utilizado para notebooks e computadores desktops */
        opacity: 0.6;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 20%;
        width: 100vw; 
    }
`;

export const Papers= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 320px) and (max-width: 480px) {
    /* media query utilizado para smartphones */
    position: relative;
    width: 80%;
    height: 30em;
    margin: 0 auto;
    top: 19px;
    border-radius: 3px;
    padding: 0 10px 0 10px;

    display: flex;
    
    align-items: center;
    justify-content: center;

    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 ); 
    }
        
    @media (min-width: 481px) and (max-width: 599px) {
    /* media query utilizado para smartphones e iPads */
    position: relative;
    width: 80%;
    height: 30em;
    margin: 0 auto;
     
    top: 19px;
    border-radius: 3px;
    padding: 0 10px 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px  );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    }


    @media (min-width: 600px) and (max-width: 768px) {
    /* media query utilizado para smartphones e iPads */
    position: relative;
    width: 80%;
    height: 30em;
    left: 140px;
     
    top: 19px;
    border-radius: 3px;
    padding: 0 10px 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px  );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    }



    @media (min-width: 769px) and (max-width: 1024px) {
    /* media query utilizado para tablets e notebooks */
    position: relative;
    width: 80%;
    height: 30em;
    margin: 0 auto;
    left: 100px;
    top: 19px;
    border-radius: 3px;
    padding: 0 10px 0 10px;

    display: flex;
    
    align-items: center;
    justify-content: center;

    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px  );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    @media (min-width: 1024px) and (max-width: 1240px) {
    /* media query utilizado para notebooks e computadores desktops */
    position: relative;
    width: 80%;
    height: 30em;
    margin: 0 auto;
    
    top: 19px;
    border-radius: 3px;
    padding: 0 10px 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px  );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

`;

export const AvPrincipal= styled.div `
    margin-top: 10px;
    
`;

export const Formulario= styled.div `
    
    width: '100%'; 
    
    
`;

export const Font= styled.div `
    padding-top: 10px;
    
    
`;














/*export const BgPrincipal= styled.div `
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('https://unsplash.com/pt-br/t/travel');
    img{
        
    width: 100%;
    height: 100%;
  


    }
`;

export const Container= styled.div `
   
   float: right;





    
`; */