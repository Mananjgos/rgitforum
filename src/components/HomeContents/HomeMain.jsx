import styled from "styled-components";
import { CreateSpace } from "./CreateSpace";
import { QandA } from "./QandA";
// import { useEffect, useState } from "react";

import { SpacesTofollow } from "./SpacesTofollow";

export const HomeMain = () => {
    // console.log(user);
    return (
        <Home>
            <StyledHome>
                <CreateSpace className="space" />
                
                <div className="QandA">
                    <QandA />
                    
                </div>
                {/* <SpacesTofollow className="follow" /> */}
            </StyledHome>
           
            <iframe
                allow="microphone;"
                width="300"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/3fe9ad9f-3db7-403e-a280-36496c0888d2">
            </iframe>
        </Home>
    );
};

const StyledHome = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    width: 80%;
    margin: auto;
    background-color: var(--primary-body-background-color);
    .space {
        position: fixed;
        top: 20px;
        height: fit-content;
    }
    .QandA {
        margin-top: 1rem;
    }

    .follow {
        height: fit-content;
    }
`;

const Home = styled.div`
    background-color: var(--primary-body-background-color);
`;
