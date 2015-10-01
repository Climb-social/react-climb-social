import React from 'react';


class Interaction extends React.Component {

    render() {

        {(() => {
            if (this.props.body.source_type === 'twitter') {
                const twitter_id = this.props.body.link.split('/')[5]; // TODO: Tidy up
                return(
                    <ul>
                        <li><a href={'https://twitter.com/intent/tweet?in_reply_to=' + twitter_id }>Reply</a></li>
                        <li><a href={'https://twitter.com/intent/retweet?tweet_id=' + twitter_id }>Retweet</a></li>
                        <li><a href={'https://twitter.com/intent/favorite?tweet_id=' + twitter_id }>Favorite</a></li>
                    </ul>
                );
            }
            if (this.props.body.source_type === 'facebook') {
                return(
                    <ul></ul>
                );
            }
        })();}
    }
}

Interaction.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Interaction;
