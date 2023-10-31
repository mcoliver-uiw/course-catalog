import React, { Component } from 'react';
import {
    Dropdown, DropdownItem,
    // Typography 
} from '@ellucian/react-design-system/core';

// const customId = 'ControlledDropdownExample';
const options = [
    { label: '2023-2024 - Undergraduate', path: '/2023-2024/Undergraduate-Catalog/Course-Descriptions' },
    { label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog/Course-Descriptions' },
    { label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog/Course-Descriptions' },
    { label: '2020-2021 - Undergraduate', path: '/2020-2021/Catalog/X-Main-Campus-Courses' },
];

class CourseCatalog extends Component {
    state = {
        coursesGroups: [],
        selectedOption: '',
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
        console.log('handleChange triggered', event);
        const selectedPath = event.target.value || event.detail.value;
        console.log('selectedPath', selectedPath);
        this.setState({
            selectedOption: selectedPath,
            coursesGroups: []  // Clear previous data
        }, () => {
            const url = `https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word${selectedPath}/MUSI-Honors&format=jsonp`;
            this.jsonp(url, 'handleData');
            console.log('Fetching from URL:', url);
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
            coursesGroups: [...prevState.coursesGroups, courses, { courses, label: this.state.selectedOption }]
        }));
    };

    componentDidMount() {
        window.handleData = this.handleData;
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
                        label="Select an Option"
                        value=""
                        disabled
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
                {this.state.coursesGroups.map((group, courses, index) => (
                    <div key={index}>
                        <h2>{group.label}</h2>
                        {Array.isArray(group.courses) ? group.courses.map(course => (
                            <div key={`${course.subject_name}-${course.course_number}`}>
                                <h3>{course.subject_name} {course.course_number}: {course.course_name}</h3>
                                <p>{course.course_description}</p>
                            </div>
                        )) : null}
                    </div>
                ))}
            </div>
        );
    }
}

export default CourseCatalog;