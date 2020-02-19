import React, { FC, useState } from 'react';
import { Select } from 'antd';
import { useAreaAutocomplete } from 'api/area';

interface IProps {
    value?: string;
    displayText?: string;
}

const Autocomplete: FC<IProps> = (props) => {
    const itemsFetcher = useAreaAutocomplete({ lazy: true });

    const [ autocompleteText, setAutocompleteText ] = useState(null);
    const options = autocompleteText
        ? itemsFetcher.data?.result?.map(d => <Select.Option key={d.value}>{d.displayText}</Select.Option>)
        : props.value && props.displayText
            ? [<Select.Option key={props.value}>{props.displayText}</Select.Option>] 
            : [];
    
    const handleSearch = value => {
        setAutocompleteText(value);
        if (value) {
            itemsFetcher.refetch({ queryParams: { term: value } });
        }
    };   

    return (
        <Select
            showSearch
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            notFoundContent={null}
            allowClear={true}
            loading={itemsFetcher.loading}
            {...props}
        >
            {options}
        </Select>
    );
};

export default Autocomplete;