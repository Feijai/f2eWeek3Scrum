
export interface ItemsProps {
    content: string;
    id: string;
    priority: string;
}

export interface CarCardProps {
    item: ItemsProps;
    index: number;
}

export interface CatCard3Props {
    item: ItemsProps[];
    title: string
    valueKey: string
}