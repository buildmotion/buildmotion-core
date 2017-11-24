export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/buildmotion-core.umd.js',
	sourceMap: true,
	format: 'umd',
	moduleName: 'buildmotionCore',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'@angular/router': 'ng.router',
		'angular-rules-engine': 'angularRulesEngine',
		'angular-actions': 'angularActions',
		'buildmotion-foundation': 'buildmotionFoundation', 
		'buildmotion-logging': 'buildmotionLogging',
		'buildmotion-logging/severity.enum': 'buildmotionLogging/Severity',
		'buildmotion-logging/logging.service': 'buildmotionLogging/LoggingService'
	}
}
