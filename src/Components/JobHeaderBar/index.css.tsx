import { css } from "@emotion/react";
import { bp } from "../../shared/css";

export default css`
    margin: 40px 24px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        height: 100%;
    }

    .job-heading{
        display: flex;
        flex-direction: column;

        > h1 {
            font-weight: 700;
            display: flex;
            margin-top: 2px;
        }

        > p {
            display: flex; 
            flex-direction: column;
            justify-content: center;
            color: #949494;
            font-weight: 400;
        }
    }

    ${bp('small')}{
        .job-heading{
            display: flex;
            flex-direction: row;

            > h1 {
                font-weight: 700;
                display: flex;
                margin-top: 2px;
            }

            > p {
                margin-left: 8px;
            }
        }
        
        button {
            height: auto;
        }
    }

    ${bp('large')}{
        max-width: 780px;
        margin: 80px auto 0;
    }
`;
