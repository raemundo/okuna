

import React from "react";

// import OkFooter from "~/components/layout/footer/OkFooter.vue";
// import ensureHasNoStoredAuthToken from '~/middleware/ensure-has-no-stored-auth-token';
// import OkModals from '~/pages/home/components/modals/OkModals.vue';
const t = (txt) => txt;

export default function OkAuthPage({ children }) {
    return (
        <>
            <section className="hero is-fullheight ok-has-background-primary-highlight">
                {/* <OkModals></OkModals> */}
                <div className="columns is-flex-1 is-flex-touch flex-direction-column-reverse-touch is-marginless">
                    <div className="column ok-has-background-primary is-flex flex-direction-column">
                        <div className="columns is-flex-1 is-vcentered is-centered is-marginless">
                            <div className="column content is-medium is-7-desktop">
                                <h1 className="has-padding-bottom-10 has-text-rounded ok-has-text-primary-invert">
                                    {t('pages.auth.title')}
                                </h1>
                                <div className="has-padding-bottom-10">
                                    <span v-twemoji className="icon">🏡</span>
                                    <span className="has-padding-left-5 ok-has-text-primary-invert-80">
                                        {t('pages.auth.usps.friends')}
                                    </span>
                                </div>
                                <div className="has-padding-bottom-10">
                                    <span v-twemoji className="icon">🙈️</span>
                                    <span className="has-padding-left-5 ok-has-text-primary-invert-80">
                                        {t('pages.auth.usps.privacy')}
                                    </span>
                                </div>
                                <div className="has-padding-bottom-10">
                                    <span v-twemoji className="icon">😍</span>
                                    <span className="has-padding-left-5 ok-has-text-primary-invert-80">
                                        {t('pages.auth.usps.revenue')}
                                    </span>
                                </div>
                                <div className="has-padding-bottom-10">
                                    <span v-twemoji className="icon">🛀</span>
                                    <span className="has-padding-left-5 ok-has-text-primary-invert-80">
                                        {t('pages.auth.usps.mental_health')}
                                    </span>
                                </div>
                                <div className="has-padding-bottom-10">
                                    <span v-twemoji className="icon">🌎</span>
                                    <span className="has-padding-left-5 ok-has-text-primary-invert-80">
                                        {t('pages.auth.usps.planet')}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <OkFooter></OkFooter> */}
                    </div>
                    <div className="column is-paddingless">
                        {children}
                        {/* <nuxt-child></nuxt-child> */}
                    </div>
                </div>
            </section>
            <style global jsx>
                {`
    .has-background-emojis {
        background: url("/assets/emojis-bg.png") no-repeat center center fixed;
        background-size: cover;
    }
    `}
            </style>
        </>
    )
}
