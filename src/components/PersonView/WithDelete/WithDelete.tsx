import { FC } from "react";
import { PersonView, PersonViewProps } from "../PersonView";
import { cnPersonView } from "../PersonView.classname";

type WithDeleteProps = PersonViewProps & {
    onDelete: (id: string) => void;
};

export const WithDelete: FC<WithDeleteProps> = ({ id, onDelete, children, ...props }) => {
    const handleClick = () => {
        onDelete(id);
    }

    return <PersonView id={id} {...props}>
        {children}
        <div className={cnPersonView('Delete')} onClick={handleClick}>❌</div>
    </PersonView>
};
