import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import hpn from './HomePageNavigation.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const FeatureList = [
    {
        title: "Register",
        url: "/docs/beginner/guide/register",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "Tid Description",
        url: "/docs/beginner/guide/tid_description",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "KYC",
        url: "/docs/beginner/guide/kyc",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "OTP",
        url: "/docs/beginner/guide/bind_otp",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "TFIL & TMETA",
        url: "/docs/beginner/tfil_tmeta/tfilPoint",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "Buy TFIL",
        url: "/docs/beginner/tfil_tmeta/buyTfil",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "Cancel TFIL Purchase",
        url: "/docs/beginner/tfil_tmeta/tfilCancelPurchase",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "Quick Exchange",
        url: "/docs/beginner/tfil_tmeta/tfilTmetaChenge",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "TFIL Withdrawal",
        url: "/docs/beginner/tfil_tmeta/tfilRealization",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "Recharge",
        url: "/docs/beginner/filling/recharge",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    {
        title: "Withdraw",
        url: "/docs/beginner/filling/withdraw",
        Svg: require('../../static/img/icon_guide.svg').default,
    },
    
];
        // 'beginner/guide/register', // 注册账号
        // 'beginner/guide/tid_description', // TID说明
        // 'beginner/guide/kyc', // 实名认证
        // 'beginner/guide/bind_otp', // GA绑定

        // 'beginner/tfil_tmeta/tfilPoint', // 积分说明
        // 'beginner/tfil_tmeta/buyTfil', // 积分购买
        // 'beginner/tfil_tmeta/tfilCancelPurchase', // 取消购买
        // 'beginner/tfil_tmeta/tfilTmetaChenge', // 取消购买
        // 'beginner/tfil_tmeta/tfilRealization', // 积分提现

        // 'beginner/filling/recharge', // 充值
        // 'beginner/filling/withdraw', // 提现

function Feature({title, url, Svg}) {
    return (
        <div className={clsx('col col--12')}>
            <Link to={url}>
                <div className="text--center home_type_background home_type_faq_bg">
                    <div className="text--center padding-horiz--md home_type_faq">
                        <h4 className="my_home_text">
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
            {/* <h3 className="container">
                <Translate >Announcement</Translate>
            </h3> */}
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
