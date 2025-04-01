import styled from "styled-components";

export const Container_extract_baster = styled.div`
    width: 100%;
    height: 100%;
    
    .extract-header {
        width: 100%;
        padding: 10px;
        background-color: rgb(29, 48, 54);

        h1 {
            text-align: center;
            color: #fff;
            text-transform: uppercase;
            font-size: 1.5rem;
        }
    }

    .extract-main {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        min-height: calc(100svh - 50px);
        padding: 20px 10px;
        gap: 20px;

        .form-area {
            display: flex;
            height: auto; ;
            justify-content: center;
            padding: 10px;
            border-radius: 5px;
            background-color: rgb(213, 213, 213);
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

            .box {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 10px;
                border-radius: 5px;
                height: 100%;

                label {
                    font-size: 1.2rem;
                    font-weight: 900;
                    text-align: center;
                    color: rgb(29, 48, 54);
                    padding: 5px;
                    border-radius: 5px;
                }

                textarea {
                    min-width: 250px;
                    height: 100%;
                    min-height: 250px;
                    padding: 10px;
                    border: solid 1px #ccc;
                    border-radius: 5px;
                    resize: none;
                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

                    &::-webkit-scrollbar {
                        width: 5px;
                        cursor: pointer;
                    }

                    &::-webkit-scrollbar-track {
                        background: #f1f1f1;
                    }

                    &::-webkit-scrollbar-thumb {
                        background: #1D3036;
                        border-radius: 4px;
                    }

                    *::-webkit-scrollbar-thumb:hover {
                        background: #555;
                    }
                }

                input {
                    min-width: 250px;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
                    transition: all .3s ease-in-out;
                    background-color: rgb(29, 48, 54);
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 900;
                    text-transform: uppercase;
                }

                input:hover {
                    cursor: pointer;
                    background-color: rgb(60, 98, 110);
                    color: #fff;
                }
            }
        }

        .extract-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-width: 300px;
            height: 100%;
            padding: 10px 10px 20px;
            background-color: insert rgb(235, 235, 235);
            border: solid 2px #ccc;
            border-radius: 5px;
            gap: 10px;

            .extract-area-header {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                border-radius: 5px;
                padding: 5px;

                h2 {
                    color: rgb(29, 48, 54);
                    text-transform: uppercase;
                    font-size: 1.2rem;
                    padding: 4px;
                }
            }

            .extract-area-content {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                
                .extract-area-list {
                    width: 100%;
                    background-color: rgb(60, 98, 110);
                    margin-bottom: 10px;
                    border-radius: 5px;
                    box-shadow: 1px 1.5px 8px rgba(0, 0, 0, 0.64);
                    
                    ul {
                        display: flex;
                        padding: 20px 5px 20px 0;
                        
                        li {
                            display: flex;
                            width: 200px;
                            justify-content: center;
                            align-items: center;
                            color: #fff;
                            font-size: 1rem;
                            font-weight: 900;
                        }

                        li:nth-child(1) {
                            width: 30px;
                            border-right: solid 2px #ccc;
                        }

                        li:nth-child(2) {
                            width: 80px;
                            border-right: solid 2px #ccc;
                        }

                        li:nth-child(3) {
                            width: 180px;
                            border-right: solid 2px #ccc;

                            @media screen and (max-width: 440px) {
                                width: 100px;
                                text-align: center;
                            }
                        }

                        li:nth-child(4) {
                            flex: 1;
                            justify-content: flex-end;
                            padding-right: 30px;

                            @media (min-width: 376px) and (max-width: 440px) {
                                padding-right: 30px;
                                padding-left: 10px;
                            }

                            @media (max-width: 360px) {
                                padding-right: 10px;
                                padding-left: 10px;
                            }
                        }
                    }
                }

                .extract-area-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    height: 45vh;
                    overflow: auto;


                    &::-webkit-scrollbar {
                        width: 5px;
                        cursor: pointer;
                    }

                    &::-webkit-scrollbar-track {
                        background: #f1f1f1;
                    }

                    &::-webkit-scrollbar-thumb {
                        background: #1D3036;
                        border-radius: 4px;
                    }

                    *::-webkit-scrollbar-thumb:hover {
                        background: #555;
                    }

                    p {
                        color: rgb(29, 48, 54);
                        font-size: 1.2rem;
                        font-weight: 900;
                        text-align: center;
                        padding: 20px 20px;
                        border-radius: 5px;
                        box-shadow: 1px 1.5px 8px rgba(0, 0, 0, 0.64);
                        margin:auto;
                    }
                    
                    ul {
                        display: flex;
                        padding: 10px 0;
                        background-color: rgb(146, 157, 160);
                        width: 100%;
                        
                        &:nth-child(even) {
                            background-color: rgb(53, 72, 77);
                        }
                        
                        li {
                            display: flex;
                            width: 200px;
                            justify-content: center;
                            align-items: center;
                            color: #fff;
                            font-size: 1rem;
                            font-weight: 900;
                            gap: 10px;

                            @media screen and (max-width: 440px) {
                                gap: 5px;
                            }

                            span {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                background-color: rgb(255, 255, 255);
                                color: rgb(29, 48, 54);
                                box-shadow: 1px 1.5px 8px rgba(0, 0, 0, 0.71);

                                @media screen and (max-width: 440px) {
                                    width: 25px;
                                    height: 25px;
                                }
                            }
                        }
                        
                        li:nth-child(1) {
                            width: 30px;
                            border-right: solid 2px #ccc;
                        } 
                        
                        li:nth-child(2) {
                            width: 80px;
                            border-right: solid 2px #ccc;
                        }
                        
                        li:nth-child(3) {
                            width: 180px;
                            border-right: solid 2px #ccc;

                            @media screen and (max-width: 440px) {
                                width: 100px;
                                text-align: center;
                            }
                        }
                        
                        li:nth-child(4) {
                            flex: 1;
                            justify-content: flex-end;
                            padding-right: 10px;
                        }
                    }

                    .copy-button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 5px;
                        gap: 5px;
                        border-radius: 4px;
                        border: none;
                        background-color: rgb(255, 255, 255);
                        color: rgb(29, 48, 54);
                        font-size: 1rem;
                        font-weight: 900;
                        text-transform: uppercase;
                        cursor: pointer;
                        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.64);
                        transition: all .3s ease-in-out;

                        @media screen and (max-width: 370px) {
                            font-size: .8rem;
                            b {
                                display: none;
                            }
                        }

                        &:hover {
                            background-color: rgb(60, 98, 110);
                            color: #fff;
                        }
                    }
                }
            }

            .extract-area-footer {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                padding: 20px 0;

                .all-dezenas-button {
                    display: flex;
                    width: 250px;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    border: none;
                    background-color: rgb(53, 72, 77);
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    cursor: pointer;
                    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.64);
                    transition: all .3s ease-in-out;

                    &:hover {
                        background-color: rgb(60, 98, 110);
                        color: #fff;
                    }
                }
            
            }

        }
    }

    .extract-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;

        .extract-modal-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 320px;
            background-color: #fff;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.64);
            transition: all .3s ease-in-out;
            animation: animate 1s ease forwards;

            @keyframes animate {
                0%, 20% {
                    opacity: 0;
                    margin-top: -20px;
                }

                75% {
                    opacity: 1;
                    margin: 0;
                }

                100% {
                    opacity: 1;
                    margin: 0;
                }
            }

            .extract-modal-header {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                border-radius: 5px;
                padding: 8px;
                background-color: rgb(53, 72, 77);
                color: #fff;
                font-size: 1.2rem;
                font-weight: 900;
                position: relative;

                .close-modal {
                    position: absolute;
                    top: 8px;
                    right: 10px;
                    cursor: pointer;
                    color: #fff;
                    font-size: 1.6rem;
                    transition: all .3s ease-in-out;

                    &:hover {
                        color: #ccc;
                    }
                }
            }

            .extract-modal-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100%;
                min-height: 200px;
                padding: 10px 20px;
                background-color: #fff;
                color: rgb(53, 72, 77);
                gap: 15px;

                .dezenas {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color: rgb(255, 255, 255);
                    color: rgb(29, 48, 54);
                    box-shadow: 1px 1.5px 8px rgba(0, 0, 0, 0.71);

                    @media screen and (max-width: 440px) {
                        width: 25px;
                        height: 25px;
                    }
                }
            }

            .extract-modal-footer {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                border-radius: 5px;
                padding: 10px;

                .copy-full-button {
                    display: flex;
                    width: 150px;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    border: none;
                    background-color: rgb(53, 72, 77);
                    color: #fff;
                    font-size: 1rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    cursor: pointer;
                    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.64);
                    transition: all .3s ease-in-out;
                    gap: 10px;

                    &:hover {
                        background-color: rgb(60, 98, 110);
                        color: #fff;
                    }
                }
            }
        }
    }

    .copied {
        padding: 5px 10px;
        width: 100px;
        text-align: center;
        background-color: rgb(60, 98, 110);
        color: #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.64);
        position: fixed;
        top: 85px;
        right: -200px;
        z-index: 9999;
    }

    .active {
        animation:animacopy  0.5s ease forwards;
        
        @keyframes animacopy {
            0%, 20% {
                right: -200px;
            }
            
            100% {
                right: 30px;
            }
        }
    }
`;