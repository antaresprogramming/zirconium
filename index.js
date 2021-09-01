const sass = require('sass')
const fs = require('fs')
const glob = require('glob')
const logFormat = require('./scripts/logformat')

const inputFile = './sass/index.scss'
const outputFile = 'dist/zirconium.css'
const mapFile = 'dist/zirconium.css.map'
const minOutputFile = 'dist/zirconium.min.css'
const minMapFile = 'dist/zirconium.min.css.map'
const includesDirectories = ['sass/', 'sass/components']

const publicOutfile = 'docs/assets/css/zirconium.min.css'
const publicMapfile = 'docs/assets/css/zirconium.min.css.map'

const rawScriptFile = 'js/zirconium.js'
const publicScriptFile = 'docs/assets/js/zirconium.js'
const distScriptFile = 'dist/zirconium.js'

console.log('Rendering zirconium.css...')
sass.render(
  {
    file: inputFile,
    sourceMap: true,
    outFile: outputFile,
    includePaths: includesDirectories,
  },
  (err, result) => {
    if (!err) {
      const css = result.css.toString('utf-8')
      const map = result.map.toString('utf-8')
      fs.writeFileSync(outputFile, css)
      console.log(
        logFormat.successHeader('Done:'),
        logFormat.successBody(outputFile)
      )

      fs.writeFileSync(mapFile, map)
      console.log(
        logFormat.successHeader('Done:'),
        logFormat.successBody(mapFile)
      )
    } else {
      console.log(logFormat.errorBody(err.formatted), '\n\n')
    }
  }
)

console.log('Rendering zirconium.min.css...')
sass.render(
  {
    file: inputFile,
    sourceMap: true,
    outFile: minOutputFile,
    includePaths: includesDirectories,
    outputStyle: 'compressed',
  },
  (err, result) => {
    if (!err) {
      const css = result.css.toString('utf-8')
      const map = result.map.toString('utf-8')
      fs.writeFileSync(minOutputFile, css)
      console.log(
        logFormat.successHeader('Done:'),
        logFormat.successBody(minOutputFile)
      )

      fs.writeFileSync(minMapFile, map)
      console.log(
        logFormat.successHeader('Done:'),
        logFormat.successBody(minMapFile)
      )

      copyToPublic()
      compileScripts()
    } else {
      console.log(logFormat.errorBody(err.formatted), '\n\n')
    }
  }
)

function copyToPublic() {
  console.log('Updating /public/ copies...')
  fs.copyFileSync(minOutputFile, publicOutfile)
  console.log(
    logFormat.successHeader('Done:'),
    logFormat.successBody(publicOutfile)
  )

  fs.copyFileSync(minMapFile, publicMapfile)
  console.log(
    logFormat.successHeader('Done:'),
    logFormat.successBody(publicMapfile)
  )
}

async function compileScripts() {
  console.log('Compiling scripts...')
  const scripts = 'js/**/*.js'

  glob(scripts, function (err, files) {
    const compiledScript = []
    files.forEach((file) => {
      const contents = fs.readFileSync(file, { encoding: 'utf-8' })

      compiledScript.push(contents)
    })

    console.log(`Writing to ${distScriptFile}`)
    fs.writeFileSync(distScriptFile, compiledScript.join('\n'), {
      encoding: 'utf-8',
    })
    console.log(
      logFormat.successHeader('Done:'),
      logFormat.successBody(distScriptFile),
      '\n'
    )

    console.log('Copying scripts to public folders')
    fs.copyFileSync(distScriptFile, publicScriptFile)
    console.log(
      logFormat.successHeader('Done:'),
      logFormat.successBody(publicScriptFile),
      '\n'
    )
  })
}
