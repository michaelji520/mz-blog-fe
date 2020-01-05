import React from 'react';
import './footer.less';

export default class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <i>❤</i>
        <span>既然选择了远方，便只顾风雨兼程 -- 汪国真</span>
        <span>Designed & Powerd by zhangji</span>
        <span>© All rights reserved {new Date().getFullYear() } 张帆远航，继往开来</span>
        <span>京ICP备19037261号</span>
        <i className="icon-"></i>
      </div>
    );
  }
}

