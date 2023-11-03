const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableSingleRuntimeChunk()
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23';
    })

    // Ajoute ces lignes pour chaque fichier JS supplémentaire
    .addEntry('app', './assets/js/app.js')
    .addEntry('calendrier', './assets/js/calendrier.js')

    // Ajoute ces lignes pour chaque fichier CSS supplémentaire
    .addStyleEntry('app-style', './assets/styles/app.css')
    .addStyleEntry('calendrier-style', './assets/styles/calendrier.css')
;

module.exports = Encore.getWebpackConfig();
