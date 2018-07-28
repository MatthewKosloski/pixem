import * as React from "react";

export interface IHelloProps { compiler: string; framework: string; }

export const Hello: React.SFC<IHelloProps> = (props) => {
    return (
        <div>
            Hello world!
        </div>

    );
};
