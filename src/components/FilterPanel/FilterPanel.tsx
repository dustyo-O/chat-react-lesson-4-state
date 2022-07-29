import React, { FC, useState } from "react";
import { cnFilterPanel } from "./FilterPanel.classname";

type FilterPanelProps = {
    onFilter: (filter: string) => void;
}

export const FilterPanel: FC<FilterPanelProps> = ({ onFilter }) => {
    const [filter, setFilter] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onFilter(filter);
    };

    return <form className={cnFilterPanel()} onSubmit={handleSubmit}>
        <input className={cnFilterPanel('input')} value={filter} onChange={handleChange}/>
        <button>Фильтровать</button>
    </form>
};
