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
const courseOptions = [
    { label: 'Business Accounting', path: '' },
    { label: '3D Aminmation and Game Design', path: '' },
    { label: 'Anthropology', path: '' },
    { label: 'Arabic', path: '' },
    { label: 'Art History', path: '' },
    { label: 'Art', path: '' },
    { label: 'Athletic Training Education', path: '' },
    { label: 'Business Finance', path: '' },
    { label: 'International Business', path: '' },
    { label: 'Biology', path: '' },
    { label: 'Business Law', path: '' },
    { label: 'Business Management Decision Systems', path: '' },
    { label: 'Business Management', path: '' },
    { label: 'Business Marketing', path: '' },
    { label: 'Business Professional Golf Management', path: '' },
    { label: 'Music', path: '/MUSI-Honors' },
];

class CourseCatalog extends Component {
    state = {
        coursesGroups: [],
        selectedOption: '',
        selectedCourse: '',
        catalogOpen: false,
        courseOpen: false
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

    handleCatalogChange = (event) => {
        const selectedPath = event.target.value || event.detail.value;
        this.setState({ selectedOption: selectedPath }, this.fetchData);
    };

    handleCourseChange = (event) => {
        const selectedCoursePath = event.target.value || event.detail.value;
        this.setState({ selectedCourse: selectedCoursePath }, this.fetchData);
    };

    fetchData = () => {
        const url = `https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word${this.state.selectedOption}${this.state.selectedCourse}&format=jsonp`;
        this.jsonp(url, 'handleData');
        console.log('Fetching from URL:', url);
    };

    handleData = (data) => {
        const coursesFolder = data.catalog?.Courses_Folder?.Courses_Folder;
        let courses = [];

        if (coursesFolder && Array.isArray(coursesFolder)) {
            coursesFolder.forEach(folderItem => {
                if (folderItem.Course && Array.isArray(folderItem.Course)) {
                    folderItem.Course.forEach(courseItem => {
                        courses.push(courseItem);
                    });
                }
            });
        }
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
                {/* catalog year selection */}
                <Dropdown
                    label="catalog"
                    onChange={this.handleCatalogChange}
                    value={this.state.selectedOption}
                    open={this.state.catalogOpen}
                    onOpen={(event) => {
                        console.log('*** onOpen handler called ***', event);
                        this.setState({ catalogOpen: true });
                    }}
                    onClose={(event) => {
                        console.log('*** onClose handler called ***', event);
                        this.setState({ catalogOpen: false });
                    }}
                >
                    <DropdownItem
                        label="Select a Catalog"
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
                {/* course major selection */}
                <Dropdown
                    label="courses"
                    onChange={this.handleCourseChange}
                    value={this.state.selectedCourse}
                    open={this.state.courseOpen}
                    onOpen={(event) => {
                        console.log('*** onOpen handler called ***', event);
                        this.setState({ courseOpen: true });
                    }}
                    onClose={(event) => {
                        console.log('*** onClose handler called ***', event);
                        this.setState({ courseOpen: false });
                    }}
                >
                    <DropdownItem
                        label="Select a Course"
                        value=""
                        disabled
                    />
                    {courseOptions.map(course => {
                        return (
                            <DropdownItem
                                key={course.label}
                                label={course.label}
                                value={course.path}
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