const classNames = require('classnames');
const React = require('react');

const Box = require('../box/box.jsx');
const LoadButton = require('../../containers/load-button.jsx');
const SaveButton = require('../../containers/save-button.jsx');

const styles = require('./menu-bar.css');
const scratchLogo = require('./scratch-logo.svg');
const OpenInScratch = require('../../containers/open-in-scratch.jsx');
const Save = require('../../containers/save.jsx');
const Load = require('../../containers/load.jsx');

const homepageHref = 'http://microworlds.media.mit.edu:8333/microworlds/new';

const MenuBar = function MenuBar (props) {
    const {
        blocks,
        editorType,
        updateToDefaultToolbox,
        vm,
        returnToMicroworld,
        ...componentProps
    } = props;
    return (
        <Box
            className={classNames({
                [styles.menuBar]: true
            })}
        >
            <a
                className={classNames(styles.logoWrapper, styles.menuItem)}
                href={homepageHref}
            >
                <img
                    className={classNames(styles.scratchLogo)}
                    src={scratchLogo}
                />
            </a>
            <Save
                blocks={blocks}
                className={styles.menuItem}
                editorType={editorType}
                vm={vm}
            >
                Save
            </Save>
            <Load className={styles.menuItem} />

            <SaveButton className={styles.menuItem} />
            <LoadButton className={styles.menuItem} />
            <OpenInScratch
                blocks={blocks}
                className={styles.menuItem}
                editorType={editorType}
                returnToMicroworld={returnToMicroworld}
                updateToDefaultToolbox={updateToDefaultToolbox}
                vm={vm}
            />
        </Box>
    );
};

module.exports = MenuBar;
