import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LaunchScreenList from './LaunchScreenList'
import LaunchItem from './LaunchItem/LaunchItem';

configure({ adapter: new Adapter() });

const launchData = new Array(10).fill().map((_, i) => { return { flight_number: i } });

describe('<LaunchScreenList/>', () => {
    beforeEach(() => {
        global.IntersectionObserver = class IntersectionObserver {
            constructor() { }

            disconnect() {
                return null;
            }

            observe() {
                return null;
            }

            takeRecords() {
                return null;
            }

            unobserve() {
                return null;
            }
        };
    })
    it(`should render ${launchData.length} <LaunchItem/> elements`, () => {
        const wrapper = shallow(<LaunchScreenList launchData={launchData} />);
        expect(wrapper.find(LaunchItem)).toHaveLength(launchData.length);
    })
})
