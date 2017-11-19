import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import styles from './blocks.css';

import IconButton from '../icon-button/icon-button.jsx';

import moreBlocksIcon from './icon--moreblocks.svg';
import lessBlocksIcon from './icon--lessblocks.svg';

const BlocksComponent = props => {
    const {
        componentRef,
        isMw,
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
            {isMw && <Box className={classNames(styles.blocksButtonContainer, styles.blocks)}>
                <IconButton
                    className={classNames(styles.blocksButton, styles.blocks)}
                    img={moreBlocksIcon}
                    title={'Show More'}
                    onClick={onShowMoreClicked}
                />
                <IconButton
                    className={classNames(styles.blocksButton, styles.blocks)}
                    img={lessBlocksIcon}
                    title={'Show Less'}
                    onClick={onShowLessClicked}
                />
            </Box>}
        </Box>
    );
};
BlocksComponent.propTypes = {
    componentRef: PropTypes.func,
    onShowMoreClicked: PropTypes.func,
    onShowLessClicked: PropTypes.func
};
export default BlocksComponent;
