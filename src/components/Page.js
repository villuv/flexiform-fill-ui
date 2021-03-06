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

import React from 'react';
import {connect} from 'react-redux';
import PageBar from './PageBar';
import {nextPage, previousPage, completeQuestionnaire} from '../actions/Actions';

require('styles/page.scss');

// Component for questionnaire page
class Page extends React.Component {

  static get propTypes() {
    return {
      page: React.PropTypes.array.isRequired,
      forwardEnabled: React.PropTypes.bool.isRequired,
      backEnabled: React.PropTypes.bool.isRequired,
      completeEnabled: React.PropTypes.bool.isRequired
    };
  }

  static get contextTypes() {
    return {
      componentCreator: React.PropTypes.func.isRequired
    };
  }

  backTouch() {
    if (this.props.backEnabled) {
      this.props.previousPage();
    }
  }

  forwardTouch() {
    if (this.props.forwardEnabled) {
      this.props.nextPage();
    }
  }

  completeTouch() {
    if (this.props.completeEnabled) {
      this.props.completeQuestionnaire();
    }
  }

  render() {
    let groups = null;
    let title = 'Not on page!';
    let page = this.props.page && this.props.page[1];
    if (page) {
      groups = page.get('items').toJS()
        .map(this.context.componentCreator)
        .filter(group => group);
      title = page.get('label');
    }
    return (
      <div className='ff-page'>
        <span className='ff-page-title'>{title}</span>
        {groups}
        <PageBar
          onForward={this.props.forwardEnabled ? this.forwardTouch.bind(this) : null}
          onBackward={this.props.backEnabled ? this.backTouch.bind(this) : null}
          onComplete={this.props.completeEnabled ? this.completeTouch.bind(this) : null}
          />
      </div>
    );
  }
}

const PageConnected = connect(
  null,
  {
    nextPage,
    previousPage,
    completeQuestionnaire
  }
)(Page);

export {
  PageConnected as default,
  Page
}
