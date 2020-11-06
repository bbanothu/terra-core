import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const MultiSelectPlaceholder = () => (
  <div className={cx('content-wrapper')}>
    <Select variant="multiple" id="multiple">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
    <button type="button" id="focusable">Focusable</button>
  </div>
);

export default MultiSelectPlaceholder;
