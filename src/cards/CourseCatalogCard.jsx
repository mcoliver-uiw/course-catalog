import React, { Component } from 'react';
import {
    Dropdown, DropdownItem,
    // Typography 
} from '@ellucian/react-design-system/core';

class CourseCatalog extends Component {
    state = {
        years: '',
        initialValue: '',
        open: false,
    };

    handleChange = event => {
        const selectedPath = event.target.value;
        if (selectedPath === 'None') {
            this.setState({
                years: this.state.initialValue,
            });
        } else {
            this.setState({
                years: selectedPath, // Set years to the selected path (or you might want to rename 'years' to a more descriptive name like 'selectedPath')
            }, () => {
                this.solutions(this.state.years);
            });
        }
    };

    componentDidMount() {
        this.state.years;
    }

    solutions(selectedPath) {
        if (!selectedPath || selectedPath === 'None') return;
        const apiUrl = 'https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word';
        const queryParams = selectedPath;
        const format = '&format=jsonp';
        fetch (apiUrl + queryParams + format, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            this.setState({ results: data });
        })
        .catch((error) => {
            console.error(error);
        });

        console.log(queryParams);
    }



    render() {
        const customId = 'ControlledDropdownExample';
        const options = [
            {label: '2023-2024 - Undergraduate', path: '/2023-2024/Undergraduate-Catalog' },
            {label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog' },
            {label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog' },
            {label: '2020-2021 - Undergraduate', path: '/2020-2021/Undergraduate-Catalog' },
            {label: '2023-2024 - Graduate', path: '/2023-2024/Graduate-Catalog' },
            {label: '2022-2023 - Graduate', path: '/2022-2023/Graduate-Catalog' },
            {label: '2021-2022 - Graduate', path: '/2021-2022/Graduate-Catalog' },
            {label: '2020-2021 - Graduate', path: '/2020-2021/Graduate-Catalog' },
        ];

        return (
            <div>
                <Dropdown
                    id={`${customId}_Dropdown`}
                    label="years"
                    onChange={this.handleChange}
                    value={this.state.years}
                    open={this.state.open}
                    onOpen={(event) => {
                        console.log('*** onOpen handler called ***', event);
                        this.setState({ open: true });
                    }}
                    onClose={(event) => {
                        console.log('*** onClose handler called ***', event);
                        this.setState({ open: false });
                    }}
                >
                    <DropdownItem
                        label="None"
                        value="None"
                    />
                    {options.map(option => {
                        return (
                            <DropdownItem
                                key={option.label}
                                label={option.label}
                                value={option.path}
                            />
                        );
                    })}
                </Dropdown>
            </div>
        );
    }
}

export default CourseCatalog;