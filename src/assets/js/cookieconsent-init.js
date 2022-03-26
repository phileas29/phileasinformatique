// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'fr',
    autoclear_cookies: true,                   // default: false
    theme_css: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css',  // 🚨 replace with a valid path
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'fr': {
            consent_modal: {
                title: 'Nous utilisons des cookies !',
                description: 'Bonjour, ce site web utilise des cookies essentiels pour assurer son bon fonctionnement et des cookies de suivi pour comprendre comment vous interagissez avec lui. Ces derniers ne seront mis en place qu\'après consentement. <button type="button" data-cc="c-settings" class="cc-link">Laissez moi choisir</button>',
                primary_btn: {
                    text: 'Tout accepter',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Tout rejeter',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Préferences des cookies',
                save_settings_btn: 'Sauvegarder mes choix',
                accept_all_btn: 'Tout accepter',
                reject_all_btn: 'Tout rejeter',
                close_btn_label: 'Fermer',
                blocks: [
                    {
                        title: 'Utilisation des cookies 📢',
                        description: 'J\'utilise des cookies pour assurer les fonctionnalités de base du site et pour améliorer votre expérience en ligne. Pour chaque catégorie, vous pouvez choisir d\'accepter ou de refuser les cookies quand vous le souhaitez. Pour plus de détails concernant les cookies et les autres données sensibles, veuillez lire le texte intégral de l\'accord de confidentialité. <a href="/politique-de-confidentialite/" class="cc-link">politique de confidentialité</a>.'
                    }, {
                        title: 'Cookies de performance et d\'analyse',
                        description: 'Ces cookies permettent au site web de se souvenir des choix que vous avez faits dans le passé.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Plus d\'informations',
                        description: 'Pour toute question relative à notre politique en matière de cookies et à vos choix, <a class="cc-link" href="/contact/">contacter nous</a>.',
                    }
                ]
            }
        }
    }
});