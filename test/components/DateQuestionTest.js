/**
 *  Copyright 2016 ReSys OÜ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/

import { shallow, mount } from 'enzyme';
import React from 'react';
import Immutable from 'immutable';
import sinon from 'sinon';


// test pure version
import {DateQuestion} from 'components/DateQuestion';

describe('DateQuestion', () => {

  it('should have its component name as default className', () => {
    let question = {
        id: 'date1',
        type: 'date'
    };
    var wrapper = shallow(<DateQuestion type='date' question={[question.id, Immutable.fromJS(question)]}/>,{context});

    expect(wrapper.props().className).to.equal('ff-item ff-itemtype-date ');
  });
});
