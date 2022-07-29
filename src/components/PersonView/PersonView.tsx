import { FC, ReactNode } from "react";

import { cnPersonView } from "./PersonView.classname";

import './PersonView.css';

export type Person = {
    id: string;
    name: string;
    children?: ReactNode;
}

export type PersonViewProps = Person & {
    className?: string;
};

export const PersonView: FC<PersonViewProps> = ({ name, className, children }) => {
    return <div className={cnPersonView(null, [className])}>
        {name}
        {children}
    </div>;
}
