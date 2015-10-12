import React, {Component, PropTypes} from 'react';
import Tile from './Tile';
import {TransitionMotion, spring} from 'react-motion';


class Wall extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        items: PropTypes.object.isRequired
    };

    getStyles() {
        const configs = {};
        Object.keys(this.props.items).map(key => {
            configs[key] = {
                opacity: spring(1),
                width: spring(100),
                height: spring(200),
                item: this.props.items[key]
            };
        });
        return configs;
    }

    willEnter(key) {
        return {
            opacity: spring(0),
            width: spring(0),
            height: spring(0),
            item: this.props.items[key]
        };
    }

    willLeave(key, style) {
        return {
            opacity: spring(0),
            width: spring(0),
            height: spring(0),
            item: style.item
        };
    }

    renderTile(key, itemValues) {

        const {item, ...styleConfig} = itemValues;
        const {...itemProps} = item;

        const style = {
            opacity: styleConfig.opacity,
            transform: `scaleX(${styleConfig.width}%)`,
            height: `${styleConfig.height}px`,
            outline: '2px solid black'
        };

        return (
            <Tile key={key}
                  style={style}
                {...itemProps } />
        );

    }

    render() {
        return (
            <TransitionMotion
                styles={this.getStyles.bind(this)()}
                willEnter={this.willEnter.bind(this)}
                willLeave={this.willLeave.bind(this)}>
                {values =>
                    <div className="climb__wall">
                        {Object.keys(values).map(key => {
                            const itemValues = values[key];
                            return this.renderTile(key, itemValues);
                        })}
                    </div>
                }
            </TransitionMotion>
        );
    }
}

export default Wall;
