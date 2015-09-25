import React from 'react';


class Interaction extends React.Component {

    render() {

            const twitter_id = this.props.link;

            return(
                <div>
                    // <script type="text/javascript" async src="//platform.twitter.com/widgets.js"></script>
                    <a href={'https://twitter.com/intent/tweet?in_reply_to=' + twitter_id }>Reply</a>
                    <a href={'https://twitter.com/intent/retweet?tweet_id=' + twitter_id }>Retweet</a>
                    <a href={'https://twitter.com/intent/favorite?tweet_id=' + twitter_id }>Favorite</a>
                </div>
            );
        
    }
}

Interaction.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Interaction;
