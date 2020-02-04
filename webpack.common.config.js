var webpack = require( "webpack" );

const path = require( "path" );

const CleanObsoleteChunks = require( "webpack-clean-obsolete-chunks" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const CopyPlugin = require( "copy-webpack-plugin" );



module.exports =
{
	mode: "development",

	entry:
	{
		common: "./src/index.js"
	},

	output:
	{
		path:     __dirname + "/build/js",
		publicPath: "/js/",
		filename: "[name].js",
		chunkFilename: "[name]-[chunkhash].js"
	},

	devServer:
	{
		contentBase: './build',
		hot: true,
		watchContentBase: true
	},

	watch: true,

	watchOptions:
	{
		aggregateTimeout: 100
	},

	optimization:
	{
		splitChunks:
		{
			chunks: "async",
			minSize: 0,
			//maxSize: 102400,
			// maxSize: 30720,
			maxAsyncRequests: Infinity,
			maxInitialRequests: Infinity,
			cacheGroups:
			{
				default: false,
				vendors:
				{
					test: /[\\/]node_modules[\\/]/,
					priority: 1,
					minChunks: 2,
					reuseExistingChunk: true,
					name( module, chunks, cacheGroupKey )
					{
						// get the name. E.g. node_modules/packageName/not/this/part.js
						// or node_modules/packageName
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

						// // npm package names are URL-safe, but some servers don't like @ symbols
						return `common-${packageName.replace( "@", "" )}`;

						// const moduleFileName = module.identifier().split('/').reduceRight(item => item);
						// const allChunksNames = chunks.map((item) => item.name).join('~');
						// return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          			}
				}
			}
		}
	},

	resolve:
	{
		extensions: [ ".js", ".jsx", ".ts", ".tsx" ],
		modules:
		[
			path.resolve( "./src" ),
			path.resolve( "./node_modules" )
		]
	},

	module:
	{
		rules:
		[
			{
				test: /\.svg$/,
				loader: 'url-loader'
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				//loaders: ['babel-loader','ts-loader'],
				use:
				[
					{
						loader: "babel-loader",
						options:
						{
							babelrc: true,

							presets:
							[
								"@babel/preset-react",
								"@babel/typescript",
								[
									"@babel/preset-env",
									{
										targets: "> 0.25%, not dead",
										useBuiltIns: "usage",
										corejs: "3.0.0",
									}
								]
							],

							plugins:
							[
								"@babel/plugin-syntax-dynamic-import",
								"@babel/plugin-proposal-class-properties"
							]
						}
					},
					// {
					// 	loader: "ts-loader"
					// }
				]
			},
			{
				test: /\.css$/,
				loaders:
				[
					"style-loader",
					{
						loader: "css-loader",
						options:
						{
							importLoaders: 1,
						},
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				loader:
				[
					// MiniCssExtractPlugin.loader,
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				],
			},
			{
				test: /\.(eot|woff(2)?|ttf)$/,
				use: [ { loader: "file-loader" } ]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [ { loader: "url-loader", options: { limit: 8192 } } ]
			}
		]
	},

	resolveLoader:
	{
		alias:
		{
			"copy": "file-loader?name=[path][name].[ext]&context=./src"
		},

	},

	plugins:
	[
		//new LoadablePlugin(),
		new webpack.ContextReplacementPlugin( /moment[\/\\]locale$/, /ru/ ),
		new webpack.ContextReplacementPlugin( /validatorjs[\/\\]src[\/\\]lang$/, /ru/ ),

		new CleanObsoleteChunks(),
		new CleanWebpackPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new MiniCssExtractPlugin(),
		// new HtmlWebpackPlugin(
		// {
		// 	hash: true,
		// 	title: 'My Awesome application',
		// 	myPageHeader: 'Hello World',
		// 	template: './src/index.html',
		// 	filename: '../../build/index.html' //relative to root of the application
		// } ),
		new CopyPlugin(
		[
			{
				from: "./public",
				to: "../",
			},
		]),
	]
};
