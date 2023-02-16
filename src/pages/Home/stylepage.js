import styled from "styled-components";


export const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    /* background-color: #282c34; */
    background-color: rgb(15,15,15);

    
`

export const Section = styled.div`
    width: 100%;
    padding: 50px;
    
    
    .p-image{
            width: 200px;
            height: 200px;
            margin-right: auto;
                .img{
                    border: 3px solid green;
                    border-radius: 100%;
                }
        }

        .s-1{
            .name{
                    font-size: clamp(0px,7vw,40px);
                        
                    }
                    .categories{
                        font-size: clamp(18px,3vw,22px);
                    }
        }

    @media screen and (max-width: 500px){
        padding: 20px;

        .p-image{
            width: 70%;
            height: auto;
            
        }
        
    }

    @media screen and (min-width: 0px) {

        max-width: 768px;
        margin: auto;
        .s-1{
            display: flex;
            flex-direction: row;
            
            .r-1{
                padding: 10px;
                width: fit-content;
                display: flex;
                flex-direction: column;
                margin-right: auto;
                
                .info{
                    color: white;
                    margin-right: auto;
                }

                .socials{
                    display: flex;
                    width: 100%;
                    margin-right: auto;
                    padding-top: 20px;
                    a{
                        margin: auto;
                        margin-left: 0;
                        color: white;
                        font-size: 30px;
                    }
                }
                
            }
            
        }

        .s-2{
            width: 100%;
            border-bottom: 2px solid white;
            .technologies{
                padding-top: 20px;
                width: 100%;
                display: flex;
                flex-direction: row;
                
                .i{
                    padding: 14px;
                    margin: auto;
                    color: white;
                    font-size: 40px;
                    
                }
            }
        }

        .s-3{
            width: 100%;
            .about{
                padding: 20px;
                color: white;
                p{
                    font-size: 18px;
                }
            }
        }
    }

`



export const Link = styled.a`
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    padding: 20px;
    /* padding-bottom: 0; */
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 1px 2px 1px black;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 4px solid rgb(10,200,40);
    color: white;

    transition: .2s;

    

    /* :hover{
        transition: .2s;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;

        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
    } */
`


// ___________// ___________

export const Text = styled.div`
    color: white;
    font-size: large;
`

export const Image = styled.div`
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    width: calc(${props => props.w});
    height: calc(${props => props.h});
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-attachment: ${props => props.at};
    background-position: center;
    background-size: ${props => props.size};
`;



