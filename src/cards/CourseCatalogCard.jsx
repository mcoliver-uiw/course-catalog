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
    { label: 'Business Accounting', path: '/ACCT-Business-Accounting' },
    { label: '3D Aminmation and Game Design', path: '/ANGD-3D-Animation-And-Game-Design' },
    { label: 'Anthropology', path: '/ANTH-Anthropology' },
    { label: 'Arabic', path: '/ARAB-Arabic' },
    { label: 'Art History', path: '/ARTH-Art-History' },
    { label: 'Art', path: '/ARTS-Art' },
    { label: 'Athletic Training Education', path: '/ATHP-Athletic-Training-Education' },
    { label: 'Business Finance', path: '/BFIN-Business-Finance' },
    { label: 'International Business', path: '/BINT-Business-International-Business' },
    { label: 'Biology', path: '/BIOL-Biology' },
    { label: 'Business Law', path: '/BLAW-Business-Law' },
    { label: 'Business Management Decision Systems', path: '/BMDS-Bus-Mgmt-Dec-Systems' },
    { label: 'Business Management', path: '/BMGT-Business-Management' },
    { label: 'Business Marketing', path: '/BMKT-Business-Marketing' },
    { label: 'Business Professional Golf Management', path: '/BPGM-Professional-Golf-Management' },
    { label: 'Community Health Education', path: '/CHED-Community-Health-Education' },
    { label: 'Chemistry', path: '/CHEM-Chemistry' },
    { label: 'Chinese', path: '/CHIN-Chinese' },
    { label: 'Computer Information Systms', path: '/CIS-Computer-Information-Systems' },
    { label: 'Clinical Research', path: '/CLRS-Clinical-Research' },
    { label: 'Cultural Studies', path: '/CLST-Cultural-Studies' },
    { label: 'Communication Arts', path: '/COMM-Communication-Arts'},
    { label: 'Criminal Justice', path: '/CRJU-Criminal-Justice'},
    { label: 'Cyber Security Systems', path: '/CSEC-Cyber-Security-Systems'},
    { label: 'Dance', path: '/DANC-Dance'},
    { label: 'Data Science', path: '/DATA-Data-Science'},
    { label: 'Design Media and Technology Studies', path: '/DMTS-Design-Media-and-Technology-Studies'},
    { label: 'Dimensions of Wellness', path: '/DWHP-Dimensions-Of-Wellness'},
    { label: 'Business Economics', path: '/ECON-Business-Economics'},
    { label: 'Literacy Education', path: '/EDRD-Literacy-Education'},
    { label: 'Education Science Instruction', path: '/EDSI-Education-Science-Instruction'},
    { label: 'Education', path: '/EDUC-Education'},
    { label: 'English', path: '/ENGL-English'},
    { label: 'Engineering', path: '/ENGR-Engineering'},
    { label: 'Environmental Science', path: '/ENSC-Environmental-Science'},
    { label: 'Fashion Design', path: '/FADS-Fashion-Design'},
    { label: 'Fashion Management', path: '/'},
    { label: 'Fashion Management', path: '/FMGT-Fashion-Management'},
    { label: 'French', path: '/FREN-French'},
    { label: 'First-Year Experience', path: '/FYES-First-Year-Experience'},
    { label: 'General Business', path: '/GBUS-General-Business'},
    { label: 'Graphic Design', path: '/GDSN-Graphic-Design'},
    { label: 'Geography', path: '/GEOG-Geography'},
    { label: 'Geology', path: '/GEOL-Geology'},
    { label: 'German', path: '/GERM-German'},
    { label: 'Political Science', path: '/GOVT-Political-Science'},
    { label: 'Healthcare Sciences', path: '/HCSC-Healthcare-Sciences'},
    { label: 'Hebrew', path: '/HEBR-Hebrew'},
    { label: 'Hindi', path: '/HIND-Hindi'},
    { label: 'History', path: '/HIST-History'},
    { label: 'Honors', path: '/HONP-Honors'},
    { label: 'International Studies', path: '/INST-International-Studies'},
    { label: 'Interior Design', path: '/INTD-Interior-Design'},
    { label: 'Italian', path: '/IT-Italian'},
    { label: 'Japanese', path: '/JAPN-Japanese'},
    { label: 'Justice and Peace', path: '/JUSP-Justice-and-Peace'},
    { label: 'Kinesiology', path: '/KEHP-Kinesiology'},
    { label: 'Korean', path: '/KORE-Korean'},
    { label: 'Latin', path: '/LATN-Latin'},
    { label: 'Leadership', path: '/LEAD-Leadership'},
    { label: 'Mathematics', path: '/MATH-Mathematics'},
    { label: 'Medical Humanities', path: '/MDHM-Medical-Humanities'},
    { label: 'Meteorology', path: '/METR-Meteorology'},
    { label: 'Business Management Information', path: '/MIS-Business-Management-Information'},
    { label: 'Modern Languages', path: '/Modern-Modern-Languages'},
    { label: 'Military Science', path: '/MS-Military-Science'},
    { label: 'Applied Music Private Instruction', path: '/MUAP-Applied-Music-Private-Instruction'},
    { label: 'Music Ensemble', path: '/MUEN-Music-Ensemble'},
    { label: 'Music', path: '/MUSI-Honors' },
    { label: 'Music Industry Studies', path: '/MUST-Music-Industry-Studies'},
    { label: 'Music Therapy', path: '/MUTH-Music-Therapy'},
    { label: 'Narrative Courses', path: '/Narrative-Courses'},
    { label: 'Nuclear Medicine Science', path: '/NM-Nuclear-Medicine-Science'},
    { label: 'Nuclear Medicine Science', path: '/NMED-Nuclear-Medicine-Science'},
    { label: 'Nursing', path: '/NURS-Nursing'},
    { label: 'Nutrition', path: '/NUTR-Nutrition'},
    { label: 'Optometry', path: '/OPT-Optometry'},
    { label: 'Kinesiology', path: '/PEHP-Kinesiology'},
    { label: 'Pre-Pharmacy and Pharmacy Technician', path: '/PHAR-Pre-Pharmacy-and-Pharmacy-Technician'},
    { label: 'Philosophy', path: '/PHIL-Philosophy'},
    { label: 'Physics', path: '/PHYS-Physics'},
    { label: 'Pastoral Ministry', path: '/PMIN-Pastoral-Ministry'},
    { label: 'Political Science', path: '/POLS-Political-Science'},
    { label: 'Portuguese', path: '/PORT-Portuguese'},
    { label: 'Psychology', path: '/PSYC-Psychology'},
    { label: 'Public Health', path: '/PUBH-Public-Health'},
    { label: 'Rehabilitative Sciences', path: '/REHS-Rehabilitative-Sciences'},
    { label: 'Religious Studies', path: '/RELS-Religious-Studies'},
    { label: 'Research', path: '/RSCH-Research'},
    { label: 'Pastoral Institute', path: '/RSPI-Pastoral-Institute'},
    { label: 'Sport Management', path: '/SMHP-Sport-Management'},
    { label: 'Sociology', path: '/SOCI-Sociology'},
    { label: 'Spanish', path: '/SPAN-Spanish'},
    { label: 'Speech', path: '/SPCH-Speech'},
    { label: 'Theatre Arts', path: '/THAR-Honors'},
    { label: 'Vision Science', path: '/VISC-Vision-Science'},
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
        this.setState({ selectedCourse: selectedCoursePath }, () => {
            this.fetchData();
            console.log('Updated selectedCourse:', this.state.selectedCourse);
        });
    };

    fetchData = () => {
        if (!this.state.selectedOption || !this.state.selectedCourse) {
            return;
        }
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
        this.setState({
            coursesGroups: [{ courses, label: this.state.selectedOption }]
        });
    };

    componentDidMount() {
        window.handleData = this.handleData;
    }

    componentWillUnmount() {
        // Clean up to avoid any potential memory leaks.
        window.handleData = null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedOption !== prevState.selectedOption) {
            console.log('selectedOption updated to:', this.state.selectedOption);
        }
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