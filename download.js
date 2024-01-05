const baseUrl = "https://data.gtdb.ecogenomic.org/releases/";
const {execSync} = require('child_process')
const workingDir = "data";
const config = require('./config')

const download = () => {
    const {version} = config;
    const majorVersion = version.split('.')[0]
    let taxonfile = `sp_clusters_r${majorVersion}.tsv`
    let taxonurl =  `"${baseUrl}release${majorVersion}/${version}/auxillary_files/${taxonfile}"` 
    
    console.log(`Fetching ${taxonurl}`)
      execSync(`curl -o ${workingDir}/${taxonfile} ${taxonurl}`, { stdio: 'ignore' },(err, stdout, stderr) => {
          if (err) {
            console.log(err)
            return;
          }
        });

    let ar_synonymy_url = `"${baseUrl}release${majorVersion}/${version}/auxillary_files/${config.synonymFiles.Archaea}"`
    let bac_synonymy_url = `"${baseUrl}release${majorVersion}/${version}/auxillary_files/${config.synonymFiles.Bacteria}"`
    
    console.log(`Fetching ${ar_synonymy_url}`)
      execSync(`curl -o ${workingDir}/ar_synonyms.tsv ${ar_synonymy_url}`, { stdio: 'ignore' },(err, stdout, stderr) => {
          if (err) {
            console.log(err)
            return;
          }
        });
    console.log(`Fetching ${bac_synonymy_url}`)
    execSync(`curl -o ${workingDir}/bac_synonyms.tsv ${bac_synonymy_url}`, { stdio: 'ignore' },(err, stdout, stderr) => {
            if (err) {
              console.log(err)
              return;
            }
        });
    
    execSync(`cat ${workingDir}/bac_synonyms.tsv ${workingDir}/ar_synonyms.tsv > ${workingDir}/synonyms.tsv`, { stdio: 'ignore' },(err, stdout, stderr) => {
            if (err) {
              console.log(err)
              return;
            }
        });
    
}



module.exports = download


//download()