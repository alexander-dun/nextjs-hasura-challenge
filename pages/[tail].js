import { getJSONFromDifferentSources } from '../utils/getJSONFromDifferentSources';
import { hasuraQuery } from '../lib/hasura';
import { getLongTailIdQuery } from '../graphql/getLongTailId';

import styles from '../styles/tail/Tail.module.css';

function Tail( { tail, error } ) {
  return (
    <div className={ styles.wrapper }>
      <h1 className={ styles.pageTitle }>Tail page</h1>

      <div className={ styles.infoContainer }>
        { error && (
          <div className={ styles.row }>
            <h3 className={ styles.title }>
              Error message: <span className={ styles.value }>{ error }</span>
            </h3>
          </div>
        ) }

        { tail && (
          <>
            <h3 className={ styles.blockTitle }>Tail Info:</h3>

            <div className={ styles.row }>
              ID: <span className={ styles.value }>{ tail.id }</span>
            </div>

            <div className={ styles.row }>
              Title: <span className={ styles.value }>{ tail.title }</span>
            </div>

            <div className={ styles.row }>
              Description: <span className={ styles.value }>{ tail.description }</span>
            </div>
          </>
        ) }
      </div>
    </div>
  );
}

export async function getServerSideProps( { params } ) {
  const tailNotFoundMessage = 'Tail not found!';

  const props = {
    tail: null,
    error: '',
  };

  try {
    const { tail: tailSlug } = params;

    const {
      NEXT_PUBLIC_DATA_PATH: JSON_SOURCE_PATH,
    } = process.env;

    const { data } = await hasuraQuery(getLongTailIdQuery, {
      tail: tailSlug
    });

    const tailId = data?.long_tails[0];

    const longTailsData = await getJSONFromDifferentSources(JSON_SOURCE_PATH);
    const tail = longTailsData?.find(( tail ) => tail.id === tailId?.json_id);

    if (!tail) {
      throw new Error(tailNotFoundMessage);
    }

    props.tail = tail;

    return { props };
  } catch (error) {
    props.error = error.message;

    return { props };
  }
}

export default Tail;
