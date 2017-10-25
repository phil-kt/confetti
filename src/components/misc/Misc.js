import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectIcon from '../project-icon/ProjectIcon';
import './Misc.css';

import hbo from '../../media/misc/icons/hbo.svg';
import capital_one from '../../media/misc/icons/capital_one_logo.svg';
import tachiyomi from '../../media/misc/icons/tachiyomi.svg';
import design_club from '../../media/misc/icons/design_club.svg';
import magnet from '../../media/misc/icons/magnet.svg';
import dribbble from '../../media/misc/icons/sherlock_dribbble.svg';
import graffiti from '../../media/misc/icons/graffiti.svg';
import argon from '../../media/misc/icons/argon.svg';


class Misc extends Component {

  constructor() {
    super();

    this.state = {
      visible: true
    }
  }

  static propTypes = {
  }

  static defaultProps = {
  }


  render() {

    console.log(tachiyomi);

    return (
      <div className="misc">
        <div className="row">
          <ProjectIcon
            svg={tachiyomi}
            title={"Tachiyomi"}
            alt={"Japanese character for standing"}
            description={"An open source manga reading app used by 30,000+, I created the branding and now work on the design of the app"}
            round={true}
          />
          <ProjectIcon
            svg={capital_one}
            title={"Capital One"}
            alt={"Japanese character for standing"}
            description={"An open source manga reading app used by 30,000+, I created the branding and now work on the design of the app"}
          />
          <ProjectIcon square={true} svg={design_club}/>
          <ProjectIcon square={true} svg={magnet}/>
        </div>

        <div className="row">
          <ProjectIcon round={true}  svg={dribbble}/>
          <ProjectIcon svg={hbo}/>
          <ProjectIcon square={true} svg={graffiti}/>
          <ProjectIcon square={true} svg={argon}/>
        </div>
      </div>
    );
  }
}

export default Misc;
