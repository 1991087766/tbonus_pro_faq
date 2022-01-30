import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import hpn from './HomePageNavigation.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: "Use Guide",
        Svg: require('../../static/img/icon_guide1.svg').default,
        description: "/docs/beginner/guide/register",
    },
    {
        title: 'Business Center',
        Svg: require('../../static/img/icon_business.svg').default,
        description: "/docs/business/PoSPool",
    },
    {
        title: "Earl Pool",
        Svg: require('../../static/img/icon_pool.svg').default,
        description: "/docs/business/VipNode",
    },
    // {
    //     title: 'FAQ',
    //     Svg: require('../../static/img/icon_problem.svg').default,
    //     description: "/docs/FAQ/faq_sms",
    // },
    {
        title: 'Term Description',
        Svg: require('../../static/img/icon_clause.svg').default,
        description: "/docs/TermsDescription/Agreement",
    },
    {
        title: "Contact Us",
        Svg: require('../../static/img/icon_about.svg').default,
        description: "/docs/about/ContactUs",
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>

            <Link to={description}>
                <div className="text--center home_type_background">
                    <Svg className={styles.featureSvg} />
                    <div className="text--center padding-horiz--md home_type_title">
                        <h3>
                            <Translate
                                id={title}
                            >{title}</Translate>
                        </h3>
                    </div>
                </div>

            </Link>

        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
