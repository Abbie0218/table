import React from 'react';
interface Column {
    id: string;
    label: string;
}
interface Styles {
    headerBgColor: string;
    headerTxtColor: string;
    hoverRowBgColor: string;
}
interface Props {
    columns: Column[];
    data: any[];
    onRowDelete: (index: number) => void;
    styles: Styles;
}
declare const CommonTable: React.FC<Props>;
export default CommonTable;
