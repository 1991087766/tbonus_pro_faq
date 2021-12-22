import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import hpn from './HomePageNavigation.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: "Beginner Guide",
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: "/docs/beginner/IPFS",
    },
    {
        title: 'Business description',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
        description: "/docs/business/VipNode",
    },
    {
        title: "Earl Mine Pool",
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: "/docs/finance/TfilShop",
    },
    {
        title: 'FAQ',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: "/docs/FAQ/faq_sms",
    },
    {
        title: 'Terms Description',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: "/docs/TermsDescription/Agreement",
    },
    {
        title: "About",
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: "/docs/about/TbonusPro",
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center home_type_background">
                <Link to={description}>
                    <Svg className={styles.featureSvg} />
                    <div className="text--center padding-horiz--md home_type_title">
                        <h3>
                            <Translate>{title}</Translate>
                        </h3>
                    </div>
                </Link>
            </div>

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
