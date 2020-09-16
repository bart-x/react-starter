import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator.js';
import Column from '../Column/ColumnContainer.js';


class List extends React.Component {

    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    render() {
        const { title, image, description } = this.props;

        return (

        <Hero titleText={title} image={image} />
        <div className={styles.description}>
        {ReactHtmlParser(description)}
        </div>

            <section className={styles.component}>
                <h2 className={styles.title}>{ReactHtmlParser(this.props.titleText)}</h2>
                <Hero titleText={this.props.title} />


                <div className={styles.columns}>
                {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
))}
                </div>
{/*
                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
                </div>
*/}

            </section>
        )
    }
}

export default List;
