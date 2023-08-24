import { LucideProps } from "lucide-react";
import * as React from "react";

export const VKIcon: React.FC<LucideProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 28 28"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="28"
                height="28"
                style={{ maskType: "alpha" }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.96824 1.96824C0 3.93649 0 7.10432 0 13.44V14.56C0 20.8957 0 24.0635 1.96824 26.0318C3.93649 28 7.10432 28 13.44 28H14.56C20.8957 28 24.0635 28 26.0318 26.0318C28 24.0635 28 20.8957 28 14.56V13.44C28 7.10432 28 3.93649 26.0318 1.96824C24.0635 0 20.8957 0 14.56 0H13.44C7.10432 0 3.93649 0 1.96824 1.96824ZM4.65503 8.75C4.80521 16.0335 8.63806 20.4167 14.9555 20.4167H15.322V16.2498C17.6228 16.4829 19.3387 18.1999 20.0391 20.4167H23.3564C22.4565 17.1005 20.1232 15.267 18.673 14.5665C20.1221 13.7002 22.173 11.6 22.656 8.75H19.6379C19.0047 11.0676 17.1208 13.1679 15.3209 13.3674V8.75H12.2546V16.8337C10.3886 16.3675 7.95442 14.1003 7.85468 8.75H4.65503Z"
                    fill="white"
                ></path>
            </mask>
            <g mask="url(#mask0)">
                <rect width="28" height="28" rx="6.72" fill="#fff"></rect>
            </g>
        </svg>
    )
};