---
order: 3
title:
  zh-CN: '索引列表'
  en-US: 'Index List'
---

用于通讯薄等场景


````jsx
/* eslint no-mixed-operators: 0 */
import { province } from 'antd-mobile-demo-data';
import { ListView, List } from 'antd-mobile';

const { Item } = List;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];
    Object.keys(province).forEach((item, index) => {
      sectionIDs.push(item);
      dataBlob[item] = item;
      rowIDs[index] = [];

      province[item].forEach((jj) => {
        rowIDs[index].push(jj.value);
        dataBlob[jj.value] = jj.label;
      });
    });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      headerPressCount: 0,
    };
  }

  render() {
    return (
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderHeader={() => <span>头部内容请自定义</span>}
        renderFooter={() => <span>尾部内容请自定义</span>}
        renderSectionHeader={sectionData => (<div className="ih">{sectionData}</div>)}
        renderRow={rowData => (<Item>{rowData}</Item>)}
        className="fortest"
        style={{
          height: document.documentElement.clientHeight * 3 / 4,
          overflow: 'auto',
        }}
        quickSearchBarStyle={{
          position: 'absolute',
          top: 20,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>渲染中...</div>}
      />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````
