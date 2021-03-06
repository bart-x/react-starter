import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Column from '../Column/ColumnContainer';
import Container from '../Container/Container';


class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    image: PropTypes.string.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description, addColumn, columns } = this.props;

    return (
      <Container>
        <section className={styles.component}>
          {/* <h2 className={styles.title}>{ReactHtmlParser(title)}</h2> */}
          <Hero title={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>


          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={() => addColumn(title)} />
          </div>

        </section>
      </Container>
    );
  }
}

export default List;
