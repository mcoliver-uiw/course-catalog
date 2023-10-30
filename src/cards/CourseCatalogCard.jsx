import React, { Component } from 'react';
import {
    Dropdown, DropdownItem,
    // Typography 
} from '@ellucian/react-design-system/core';

// const customId = 'ControlledDropdownExample';
const options = [
    { label: '2023-2024 - Undergraduate', path: '/2023-2024/Undergraduate-Catalog' },
    { label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog' },
    { label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog' },
    { label: '2020-2021 - Undergraduate', path: '/2020-2021/Undergraduate-Catalog' },
    { label: '2023-2024 - Graduate', path: '/2023-2024/Graduate-Catalog' },
    { label: '2022-2023 - Graduate', path: '/2022-2023/Graduate-Catalog' },
    { label: '2021-2022 - Graduate', path: '/2021-2022/Graduate-Catalog' },
    { label: '2020-2021 - Graduate', path: '/2020-2021/Graduate-Catalog' },
];

class CourseCatalog extends Component {
    state = {
        coursesGroups: [],
        selectedOption: options[0].path,
        open: false
    };

    jsonp(url, callbackName) {
        const script = document.createElement('script');
        script.src = `${url}&callback=${callbackName}`;
        document.body.appendChild(script);
        // Ensure the script gets removed after it's used to prevent pollution.
        script.onload = () => {
            document.body.removeChild(script);
        };
    }

    handleChange = (event) => {
        const selectedPath = event.detail.value;
        this.setState({
            selectedOption: selectedPath,
            courses: []
        }, () => {
            const url = `https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word${selectedPath}/Course-Descriptions/MUSI-Honors&format=jsonp`;
            this.jsonp(url, 'handleData');
        });
    };
    
    handleData = (data) => {
        const coursesFolder = data.catalog.Courses_Folder.Courses_Folder;
        let courses = [];
        coursesFolder.forEach(folderItem => {
            folderItem.Course.forEach(courseItem => {
                courses.push(courseItem);
            });
        });
        this.setState(prevState => ({
            coursesGroups: [...prevState.coursesGroups, courses]
        }));
    };

    componentDidMount() {

        window.handleData = this.handleData;
        options.forEach(option => {
            const url = `https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word${option.path}/Course-Descriptions/MUSI-Honors&format=jsonp`;
            this.jsonp(url, 'handleData');
            console.log(url);
        });
    }

    componentWillUnmount() {
        // Clean up to avoid any potential memory leaks.
        window.handleData = null;
    }

    render() {
        return (


            <div id="courses-container">
                <Dropdown
                    // id={`${customId}_Dropdown`}
                    label="years"
                    onChange={this.handleChange}
                    value={this.state.selectedOption}
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
                {this.state.coursesGroups.map((courses, index) => (
                    <div key={index}>
                        <h2>{options[index].label}</h2>
                        {courses.map(course => (
                            <div key={`${course.subject_name}-${course.course_number}`}>
                                <h3>{course.subject_name} {course.course_number}: {course.course_name}</h3>
                                <p>{course.course_description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default CourseCatalog;