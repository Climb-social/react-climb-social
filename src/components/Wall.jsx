import React, {Component, PropTypes} from 'react';
import Tile from './Tile';
import {TransitionMotion, spring} from 'react-motion';


class Wall extends Component {

    static propTypes = {
        items: PropTypes.object.isRequired
    };

    getStyles() {
        const configs = {};
        Object.keys(this.props.items).map(key => {
            configs[key] = {
                opacity: spring(1),
                width: spring(375),
                margin: spring(10),
                item: this.props.items[key]
            };
        });
        return configs;
    }

    willEnter(key) {
        return {
            opacity: spring(0),
            width: spring(0),
            margin: spring(0),
            item: this.props.items[key]
        };
    }

    willLeave(key, style) {
        return {
            opacity: spring(0),
            width: spring(0),
            margin: spring(0),
            item: style.item
        };
    }

    renderTile(key, itemValues) {

        const {item, ...styleConfig} = itemValues;
        const {...itemProps} = item;

        const style = {
            opacity: styleConfig.opacity,
            width: `${styleConfig.width}px`,
            'margin-left': styleConfig.margin,
            'margin-right': styleConfig.margin
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
