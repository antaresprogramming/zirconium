const sass = require('sass')
const Fiber = require('fibers')
const fs = require('fs')

const inputFile = './sass/index.scss'
const outputFile = 'dir/zirconium.css'
const mapFile = 'dir/zirconium.css.map'
const minOutputFile = 'dir/zirconium.min.css'
const minMapFile = 'dir/zirconium.min.css.map'
const includesDirectories = ["sass/", "sass/components"]

console.log("Rendering zirconium.css...")
sass.render(
	{
		file: inputFile,
        sourceMap: true,
        outFile: outputFile,
        includePaths: includesDirectories
	},
	(err, result) => {
		const css = result.css.toString('utf-8')
		const map = result.map.toString('utf-8')
		fs.writeFileSync(outputFile, css)
		fs.writeFileSync(mapFile, map)
		console.log('zirconium.css: Done.')
	}
)

console.log('Rendering zirconium.min.css...')
sass.render(
	{
		file: inputFile,
		sourceMap: true,
		outFile: outputFile,
		includePaths: includesDirectories,
        outputStyle: "compressed"
	},
	(err, result) => {
		const css = result.css.toString('utf-8')
		const map = result.map.toString('utf-8')
		fs.writeFileSync(minOutputFile, css)
		fs.writeFileSync(minMapFile, map)
		console.log('zirconium.min.css: Done.')
	}
)
