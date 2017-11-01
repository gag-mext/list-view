import React from 'react';
import MListView from 'rmc-list-view';
import handleProps from './handleProps';
const IndexedList = MListView.IndexedList;

class MIndexedList extends React.Component{
  render() {
    const { prefixCls, listPrefixCls } = this.props;
    const { restProps, extraProps } = handleProps(this.props, true);
    return (
      <IndexedList
        ref="indexedList"
        sectionHeaderClassName={`${prefixCls}-section-header ${listPrefixCls}-body`}
        sectionBodyClassName={`${prefixCls}-section-body ${listPrefixCls}-body`}
        {...restProps}
        {...extraProps}
      >
        {this.props.children}
      </IndexedList>
    );
  }
}
MIndexedList.defaultProps = {
  prefixCls: 'am-indexed-list',
  listPrefixCls: 'am-list',
  listViewPrefixCls: 'am-list-view',
};
MIndexedList.propTypes = {
  children: React.PropTypes.any,
  refreshControl: React.PropTypes.any,
  onScroll: React.PropTypes.func,
  scrollEventThrottle: React.PropTypes.number,
  removeClippedSubviews: React.PropTypes.bool, // offscreen views are removed
  dataSource: React.PropTypes.any,
  renderSeparator: React.PropTypes.func,
  renderRow: React.PropTypes.func,
  initialListSize: React.PropTypes.number,
  onEndReached: React.PropTypes.func,
  onEndReachedThreshold: React.PropTypes.number,
  pageSize: React.PropTypes.number,
  renderFooter: React.PropTypes.func,
  renderHeader: React.PropTypes.func,
  renderSectionHeader: React.PropTypes.func,
  renderScrollComponent: React.PropTypes.func,
  scrollRenderAheadDistance: React.PropTypes.number,
  onChangeVisibleRows: React.PropTypes.func,
  /** below web only */
  className: React.PropTypes.string,
  prefixCls: React.PropTypes.string,
  listPrefixCls: React.PropTypes.string,
  listViewPrefixCls: React.PropTypes.string,
  renderBodyComponent: React.PropTypes.func,
  renderSectionBodyWrapper: React.PropTypes.func,
  sectionBodyClassName: React.PropTypes.string,
  useZscroller: React.PropTypes.bool,
  useBodyScroll: React.PropTypes.bool,
  stickyHeader: React.PropTypes.bool,
  stickyProps: React.PropTypes.any, // https://github.com/captivationsoftware/react-sticky/blob/master/README.md#sticky--props
  stickyContainerProps: React.PropTypes.any,
  scrollerOptions: React.PropTypes.any,
  /** below web only, work at `ListView.IndexedList` */
  onQuickSearch: React.PropTypes.func,
  quickSearchBarTop: React.PropTypes.object,
  delayTime: React.PropTypes.number,
  delayActivityIndicator: React.PropTypes.any
};
MIndexedList.displayName = "MIndexedList";
module.exports=MIndexedList;
