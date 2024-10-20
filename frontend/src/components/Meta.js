import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
            <meta name='keywords' content={keywords}></meta>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To ProShop',
    keywords: 'electronics, buy electronics, cheap electronics',
    description: 'The best place to get cheap electronics'
};

export default Meta
