import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';


class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }

    render() {
        return (
            <section className={styles.component}>
                {/* <h2 className={styles.subtitle}>Organize your world</h2> */}
                <Hero titleText={this.props.title} />
            </section>

            <div className={styles.columns}>

            </div>
        )
    }
}

export default List;
