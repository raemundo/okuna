// import OKLoginPage from "~/screens/pages/OKLoginPage";
import OkAuthPage from "~/screens/OkAuthPage";


function LoginPage() {
  const t = (txt) => txt;
  return (
    <div className="app">
      <OkAuthPage>
        <div className="columns is-centered is-vcentered has-height-100-percent is-paddingless ok-has-background-primary-highlight has-background-emojis is-marginless">
          <div className="column is-narrow">
            <div className="card is-relative has-overflow-hidden ok-has-background-primary">
              <div className="card-header ok-has-border-bottom-primary-highlight">
                <div className="card-header-title is-flex align-items-center justify-center has-padding-20">
                  {/* <ok-logo></ok-logo> */}
                </div>
              </div>
              <div className="card-content">
                <form>
                  <div className="field">
                    <label className="label has-text-left ok-has-text-primary-invert-80">
                      {t('global.keywords.username')}
                    </label>
                    <div className="control">
                      <input type="text" placeholder="e.g. johntravolta" className="input is-rounded is-medium ok-input"
                        required
                        id="username" v-model="username" />
                    </div>
                    <p className="help is-danger has-text-left" v-if="!$v.username.required  $v.username.$dirty">
                      {t('common:global.errors.username.required')} {t('common:name')} {t('common:x.y')} {t('common:age')}
                    </p>
                  </div>
                  <div className="field">
                    <label className="label has-text-left ok-has-text-primary-invert-80">Password</label>
                    <div className="control">
                      <input type="password" placeholder="*******" className="input is-rounded is-medium ok-input" required
                        id="password"
                        v-model="password" />
                    </div>
                    <p className="help is-danger has-text-left" v-if="!$v.password.required  $v.password.$dirty">
                      {t('global.errors.password.required')}
                    </p>
                    <p className="help is-danger has-text-left" v-if="!$v.password.minLength  $v.password.$dirty">
                      {t('global.errors.password.min_length')}
                    </p>
                    <p className="help is-danger has-text-left" v-if="!$v.password.maxLength  $v.password.$dirty">
                      {t('global.errors.password.max_length')}
                    </p>
                  </div>
                  <div className="field">
                    {/* <nuxt-link :to="'/a/request-password-reset'" className="ok-has-text-primary-invert-60">
              {t('global.snippets.forgot_password')}
          </nuxt-link> */}
                  </div>
                  <div className="field has-padding-top-20">
                    <button className="button is-success is-rounded is-fullwidth is-medium has-background-rainbow has-text-weight-bold"
                      type="submit">
                      {t('global.snippets.login')}
                    </button>
                  </div>
                </form>              </div>
              <div className="card-footer ok-has-border-top-primary-highlight">
                <div className="card-footer-item ok-has-text-primary-invert-60">
                  <span>
                    {/* {$t('global.snippets.dont_have_an_account')} */}
                  </span>
                  <div className="has-text-underline has-padding-left-5">{t('common:name')}  {t(`language:Arabic`)}</div>
                  {/* <nuxt-link : to="localePath({path: '/a/register'})"
    className ="has-text-underline has-padding-left-5">
    {$t('global.snippets.sign_up')}
    </nuxt-link> */}
                </div>
              </div>
            </div>
          </div>
        </div >
      </OkAuthPage >
    </div >
  )
}

export default LoginPage;
