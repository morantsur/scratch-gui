const PropTypes = require('prop-types');
const React = require('react');
const VM = require('scratch-vm');
const bindAll = require('lodash.bindall');

const vmListenerHOC = require('../lib/vm-listener-hoc.jsx');

const GUIComponent = require('../components/gui/gui.jsx');
const DefaultBlocks = require('../lib/libraries/blocks.json');

class GUI extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleTabSelect'
        ]);
        this.state = {tabIndex: 0};
    }
    componentDidMount () {
        this.props.vm.loadProject(this.props.projectData);
        this.props.vm.setCompatibilityMode(true);
        this.props.vm.start();
    }
    componentWillReceiveProps (nextProps) {
        if (this.props.projectData !== nextProps.projectData) {
            this.props.vm.loadProject(nextProps.projectData);
        }
    }
    componentWillUnmount () {
        this.props.vm.stopAll();
    }
    chooseBlocks() {
        if (this.props.blocks) {
            return this.props.blocks;
        }
        if (this.props.editorType == 1) {
            return '<xml id="toolbox-categories" style="display: none">'+
                       '<category name="more Blocks" colour="#4C97FF" secondaryColour="#3373CC">'+
                            DefaultBlocks.firstStepBlocks +
                        '</category>'+
                        '<category name="less Blocks" colour="#4C97FF" secondaryColour="#3373CC">'+
                          DefaultBlocks.firstStepBlocks +
                          DefaultBlocks.secondStepBlocks +
                        '</category>'+
                        '<category name="third" colour="#4C97FF" secondaryColour="#3373CC">'+
                          DefaultBlocks.firstStepBlocks +
                          DefaultBlocks.secondStepBlocks +
                          DefaultBlocks.thirdStepBlocks +
                        '</category>'+
                    '</xml>';
        }
        if (this.props.editorType == 2) {
            return DefaultBlocks.defaultToolboxWithCategories;
        }
        return null;
    }
    handleTabSelect (tabIndex) {
        this.setState({tabIndex});
    }
    render () {
        const {
            projectData, // eslint-disable-line no-unused-vars
            editorType, // eslint-disable-line no-unused-vars
            blocks,
            vm,
            ...componentProps
        } = this.props;
        return (
            <GUIComponent
                tabIndex={this.state.tabIndex}
                vm={vm}
                onTabSelect={this.handleTabSelect}
		editorType={this.props.editorType}
                blocks={this.chooseBlocks()} //Is needed?
                {...componentProps}
            />
        );
    }
}

GUI.propTypes = {
    ...GUIComponent.propTypes,
    projectData: PropTypes.string,
    editorType: React.PropTypes.number,
    vm: React.PropTypes.instanceOf(VM),
    blocks: React.PropTypes.string
};

GUI.defaultProps = GUIComponent.defaultProps;

module.exports = vmListenerHOC(GUI);
