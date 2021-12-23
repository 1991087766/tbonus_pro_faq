import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import hpn from './HomePageNavigation.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const FeatureList = [
    {
        title: "Beginner Guide",
        Svg: require('../../static/img/icon_guide.svg').default,
        url: "/docs/about/TbonusPro",
    },
];

function Feature({title,Svg, url}) {
    return (
        <div className={clsx('col col--12')}>
            <Link to={url}>
                <div className="text--center home_type_background home_type_faq_bg">
                    <div className="text--center padding-horiz--md home_type_faq">
                        <h4 className="home_text">
                            <Translate
                                id={title}
                                description="The homepage welcome message">
                                {title}
                            </Translate>
                        </h4>
                    </div>
                    <div className="text--center padding-horiz--md home_type_faq home_type_faq_r">
                        <Svg className="home_type_icon"/>

                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function HomePageAnnouncement() {
    return (
        <div>
            <h3 className="container">
                <Translate >Announcement</Translate>
            </h3>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
}
