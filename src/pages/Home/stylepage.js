import styled from "styled-components";


export const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: #282c34;
`

export const Section = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;

    .img{
        width: 200px;
        height: 200px;
        border-radius: 100%;
        border: 2px solid purple;
    }
    
    .profile{
        width: 100%;

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
    background-attachment: local;
    background-position: center;
    background-size: ${props => props.size};
`;



