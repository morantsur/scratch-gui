const classNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');

const Box = require('../box/box.jsx');
const styles = require('./sprite-info.css');

const xIcon = require('./icon--x.svg');
const yIcon = require('./icon--y.svg');
const showIcon = require('./icon--show.svg');
const hideIcon = require('./icon--hide.svg');

const ROTATION_STYLES = ['left-right', 'don\'t rotate', 'all around'];

class SpriteInfo extends React.Component {
    shouldComponentUpdate (nextProps) {
        return (
            this.props.direction !== nextProps.direction ||
            this.props.disabled !== nextProps.disabled ||
            this.props.name !== nextProps.name ||
            this.props.rotationStyle !== nextProps.rotationStyle ||
            this.props.visible !== nextProps.visible ||
            this.props.x !== nextProps.x ||
            this.props.y !== nextProps.y
        );
    }
    render () {
        return (
            <Box
                className={styles.spriteInfo}
            >
                <div className={classNames(styles.row, styles.rowPrimary)}>
                    <div className={styles.group}>
                        <span className={styles.inputLabel}>Sprite</span>
                        <input
                            className={classNames(styles.inputForm, styles.spriteName)}
                            disabled={this.props.disabled}
                            placeholder="Name"
                            tabIndex="1"
                            type="text"
                            value={this.props.disabled ? '' : this.props.name}
                            onBlur={this.props.onBlurName}
                            onChange={this.props.onChangeName}
                            onKeyPress={this.props.onKeyPress}
                        />
                    </div>

                    <div className={styles.group}>
                        <div className={styles.iconWrapper}>
                            <img
                                className={classNames(styles.xIcon, styles.icon)}
                                src={xIcon}
                            />
                        </div>
                        <span className={styles.inputLabel}>x</span>
                        <input
                            className={classNames(styles.inputForm, styles.x)}
                            disabled={this.props.disabled}
                            placeholder="x"
                            tabIndex="2"
                            type="text"
                            value={this.props.disabled ? '' : this.props.x}
                            onBlur={this.props.onBlurX}
                            onChange={this.props.onChangeX}
                            onKeyPress={this.props.onKeyPress}
                        />
                    </div>

                    <div className={styles.group}>
                        <div className={styles.iconWrapper}>
                            <img
                                className={classNames(styles.yIcon, styles.icon)}
                                src={yIcon}
                            />
                        </div>
                        <span className={styles.inputLabel}>y</span>
                        <input
                            className={classNames(styles.inputForm, styles.y)}
                            disabled={this.props.disabled}
                            placeholder="y"
                            tabIndex="3"
                            type="text"
                            value={this.props.disabled ? '' : this.props.y}
                            onBlur={this.props.onBlurY}
                            onChange={this.props.onChangeY}
                            onKeyPress={this.props.onKeyPress}
                        />
                    </div>
                </div>
            </Box>
        );
    }
}

SpriteInfo.propTypes = {
    direction: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onBlurDirection: PropTypes.func,
    onBlurName: PropTypes.func,
    onBlurX: PropTypes.func,
    onBlurY: PropTypes.func,
    onChangeDirection: PropTypes.func,
    onChangeName: PropTypes.func,
    onChangeRotationStyle: PropTypes.func,
    onChangeX: PropTypes.func,
    onChangeY: PropTypes.func,
    onClickNotVisible: PropTypes.func,
    onClickVisible: PropTypes.func,
    onKeyPress: PropTypes.func,
    rotationStyle: PropTypes.oneOf(ROTATION_STYLES),
    visible: PropTypes.bool,
    x: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    y: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

module.exports = SpriteInfo;
