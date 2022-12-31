import styled from "styled-components";


export const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #282c34;

    .back{
        height: 20vh;
        .cover{
                
        }

    }

    /* SOMENTE COM A TELA GRANDE */
    @media only screen and (min-width: 600px){
        .sections{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        
        .mid{
            grid-area: 1 / 2 / 3 / 3;
        }
        .left{
            grid-area: 2 / 1 / 3 / 2;
        }
        .right{
            grid-area: 2 / 3 / 3 / 4;
        }
        .feed{
            grid-area: 3 / 1 / 4 / 4;
            padding: 30px;
        }
    }
    }

    /* SOMENTE TELA PEQUENA */
    @media only screen and (max-width: 600px){
        .sections{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            
            .mid{
                grid-area: 1 / 1 / 2 / 2;
            }
            .left{
                grid-area: 2 / 1 / 3 / 2;
                
            }
            .right{
                grid-area: 3 / 1 / 4 / 2;
                
            }
            .feed{
                grid-area: 4 / 1 / 5 / 2;
                padding: 30px;
            }
        }
    }   
`

export const Section = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-width: fit-content;
    width: calc(100% / 3);
    
    
    .profile{
        width: 100%;
        display: flex;
        flex-direction: row;

        .front{
            padding: 2%;
            margin-inline: auto;
                
            .img{
                width: 200px;
                height: 200px;
                border-radius: 100%;
                border: 2px solid purple;

            }

            .info{
                
                width: fit-content;
                margin-left: auto;
                margin-right: auto;
                color: white;
                text-align: center;

            .name{
                font-size: x-large;
                font-weight: 500;
                padding: 4px;
            }
            .tag{
                font-size: large;
                color: pink;
                padding: 4px;
            }
            .categories{
                font-size: medium;
                color: aqua;
                padding: 4px;
            }

            .socials{
                margin: auto;
                width: fit-content;
                a{
                    color: white;
                    margin: auto;
                    padding: 10px;
                    font-size: xx-large;
                }
                display: flex;
                flex-direction: row;
            }

        }
        
        }

        
    }

    .about{
            padding-top: 20px;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;

            .btn{
                padding: 10px;
                background-color: transparent;
                border: 2px solid white;
                border-radius: 50px;
                font-size: 18px;
                color: white;
                :hover{
                    cursor: pointer;
                }

            }
        }
`




export const Feed = styled.div`

    .list{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export const Link = styled.a`
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 1px 2px 1px black;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    background-color: rgb(255,150,0);
    color: white;

    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: .2s;
    :hover{
        transition: .2s;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;

        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`

// ___________// ___________

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



