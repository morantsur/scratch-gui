import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import styles from './blocks.css';

import IconButton from '../icon-button/icon-button.jsx';

const BlocksComponent = props => {
    const {
        componentRef,
        onShowMoreClicked,
        onShowLessClicked,
        ...componentProps
    } = props;
    return (
        <Box>
            <Box
                className={styles.blocks}
                componentRef={componentRef}
                {...componentProps}
            />
            <Box className={styles.extensionButtonContainer}>
                <IconButton
                    className={classNames(styles.extensionButton)}
                    title={'Show More'}
                    onClick={onShowMoreClicked}
                />
                <IconButton
                    className={classNames(styles.extensionButton)}
                    title={'Show Less'}
                    onClick={onShowLessClicked}
                />
            </Box>
        </Box>
    );
};
BlocksComponent.propTypes = {
    componentRef: PropTypes.func,
    onShowMoreClicked: PropTypes.func,
    onShowLessClicked: PropTypes.func
};
export default BlocksComponent;
