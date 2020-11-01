import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { LaunchProgram } from './LaunchProgram';
import LaunchScreenList from '../../components/LaunchScreenList/LaunchScreenList';
import LaunchFilters from '../../components/LaunchScreenFilters/LaunchFilters';
import Loader from '../../components/UI/Loader/Loader'

configure({ adapter: new Adapter() });

let wrapper

describe('<LaunchProgram/>', () => {
    beforeEach(() => {
        wrapper = shallow(<LaunchProgram fetchLaunchData={() => { }} query={{}} launchProgram={{ loading: true }} />);
    })
    it('should render <LaunchScreenList/> when receiving launchData', () => {
        wrapper.setProps({ launchProgram: { success: true, launchData:[{},{}] } })
        expect(wrapper.containsMatchingElement(<LaunchScreenList launchData={[{},{}]}/>)).toEqual(true);
    })
    it('should render an error message in case of error', () => {
        wrapper.setProps({ launchProgram: { error: true } })
        expect(wrapper.containsMatchingElement(<div className="no-data"><h2>Error occurred while fetching data</h2></div>)).toEqual(true);
    })
    it('should render <Loader/> when loading', () => {
        wrapper.setProps({ launchProgram: { loading: true } })
        expect(wrapper.containsMatchingElement(<Loader/>)).toEqual(true);
    })
    it('should render <LaunchFilters/>', () => {
        expect(wrapper.containsMatchingElement(<LaunchFilters/>)).toEqual(true);
    })
})
