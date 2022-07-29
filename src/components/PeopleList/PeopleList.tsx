import { FC, useState } from "react";
import { FilterPanel } from "../FilterPanel/FilterPanel";

import { Person } from "../PersonView/PersonView";
import { WithDelete as PersonView } from "../PersonView/WithDelete/WithDelete";
import { cnPeopleList } from "./PeopleList.classname";

import './PeopleList.css';

export const PeopleList: FC = () => {
    const [list, setList] = useState<Person[]>([{
        id: 'sdfdfgdfdgs',
        name: 'Александр Шлейко',
    }, {
        id: 'sdfdfgdfdgs1',
        name: 'Евгения Федорова',
    }, {
        id: 'sdfdfgdfdgs1',
        name: 'Валентин Курышев',
    }, {
        id: 'sdffdsfgj43',
        name: 'Дарья Банная',
    }, {
        id: 'fglkhgfjdfgdg',
        name: 'Игорь Потемкин',
    }, {
        id: 'sdfdfgdfffggdf',
        name: 'Олеся Леонович',
    }]);

    const [filter, setFilter] = useState('');

    const handleFilter = (newFilter: string) => {
        setFilter(newFilter);
    }

    const handlePersonDelete = (id: string) => {
        setList(prev => prev.filter(person => person.id !== id));
    };

    return <div className={cnPeopleList()}>
        <FilterPanel onFilter={handleFilter}/>
        {list.filter(person => person.name.startsWith(filter)).map(person => (
            <PersonView
                className={cnPeopleList('Item')}
                key={person.id}
                onDelete={handlePersonDelete}
                {...person}
            />))}
    </div>;
}
