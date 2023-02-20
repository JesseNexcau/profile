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
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;

    
    .divide{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-block: 30px;
        .txt{
            color: white;
            font-size: 30px;
            padding: 20px;
            border: 2px solid;
            border-image: linear-gradient(to bottom right, rgb(0,180,40) 30%, transparent 30%, transparent 70%, rgb(0,180,40) 70%) 1;
            
        }

        
    }
    .divider{
        width: 30%;
        height: 2px;
        margin: auto;
        
        border-bottom: 1px solid rgb(0,180,40);
    }
        

            .s{
                display: flex;

                
                p{
                    margin: auto;
                    width: fit-content;
                    background-color: rgb(0,180,40);
                    padding: 16px;
                    text-align: center;
                    margin-bottom: 30px;
    
                    border-top-left-radius: 24px;
                    border-bottom-left-radius: 24px;
                    border-top-right-radius: 24px;
                    color: white;
                    font-size: 30px;
                }
            }

            

        .s-1{
            display: flex;
            flex-direction: row;

            .p-image{
            width: clamp(180px,50vw,300px);
            height: clamp(180px,50vw,300px);
            margin-right: auto;
                .img{
                    /* border: 3px solid rgb(0,180,40); */
                    border-radius: 100%;
                }
            }
            
            .info{
                padding: 10px;
                width: fit-content;
                display: flex;
                flex-direction: column;
                margin-right: auto;
                
                .indentify{
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 30px;

                    .name{
                    font-size: clamp(18px,10vw,50px);
                        
                    }
                    .categories{
                    color: #ccc;
                    font-size: clamp(16px,8vw,40px);
                    }

                }                


                
                
                .socials{
                    display: flex;
                    width: 100%;
                    margin-bottom: 30px;
                    a{
                        margin-right: 30px;
                        color: white;
                        font-size: 30px;
                    }
                }
                
                .contact{
                    color: white;
                    font-size: 18px;
                    p{
                        margin-bottom: 10px;
                    }
                }
                
            }
            
        }

        .skills{
            margin-top: 30px;
            margin-bottom: 30px;
            width: 100%;
            display: flex;
            
            .technologies{
                color: white;
                display: flex;
                flex-wrap: wrap;
                width: 50%;

                .techno{
                    width: 180px;
                    display: flex;
                    font-size: 22px;
                    font-weight: bold;
                    padding: 6px;
                    border: 2px solid white;
                    margin: 10px;
                    margin-inline: auto;

                    p{
                        padding: 4px;
                    }
                }
                
                .html{
                    background-color: rgb(0,180,40);
                }
                .css{
                    background-image: linear-gradient(to right, rgb(0,180,40) 80%, transparent 10%);
                }
                .react{
                    background-image: linear-gradient(to right, rgb(0,180,40) 70%, transparent 10%);
                }
                .node{
                    background-image: linear-gradient(to right, rgb(0,180,40) 30%, transparent 10%);
                }
                .js{
                    background-image: linear-gradient(to right, rgb(0,180,40) 70%, transparent 10%);
                }
                .tps{
                    background-image: linear-gradient(to right, rgb(0,180,40) 30%, transparent 0%);
                }
            }

            
            .about{
                width: 50%;
                color: white;
                padding: 20px;
            }
        }

        .s-3{
            width: 100%;
            margin-top: 20px;
            margin-bottom: 30px;
            
            .about-a{
                color: white;
                display: flex;
                justify-content: center;

                .opt{
                    background-color: rgb(35,35,35);
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    
                    margin-inline: 20px;
                    padding: 16px;
                    border-bottom: 2px solid rgb(0,180,40);
                }
            }

            .about{
                padding: 20px;
                color: white;
                p{
                    font-size: 18px;
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



