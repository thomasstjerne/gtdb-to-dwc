const parse = require('csv-parse')
const transform = require('stream-transform')
const fs = require('fs')
const _ = require('lodash')
const config = require('./config')
const {execSync} = require('child_process')
const download = require('./download')
const getEml = require('./eml')
const writeTaxon = (version) => {
    const parser = parse({
        delimiter: '\t',
        columns: true,
        ltrim: true, 
        rtrim: true,
        quote: null,
        // skip_lines_with_error: true
      
      })
      const transformer = transform(function(record, callback){
          const splitTaxonomy = record['GTDB taxonomy'].split(";");
          const kingdom = splitTaxonomy[0] && splitTaxonomy[0].split("__")[0] === "d" ? splitTaxonomy[0].split("__")[1] : "";
          const phylum = splitTaxonomy[1] && splitTaxonomy[1].split("__")[0] === "p" && splitTaxonomy[1].split("__")[1] !== splitTaxonomy[0].split("__")[1] ? splitTaxonomy[1].split("__")[1] : "";
          const class_ = splitTaxonomy[2] && splitTaxonomy[2].split("__")[0] === "c" && splitTaxonomy[2].split("__")[1] !== splitTaxonomy[1].split("__")[1] ? splitTaxonomy[2].split("__")[1] : "";
          const order = splitTaxonomy[3] && splitTaxonomy[3].split("__")[0] === "o" && splitTaxonomy[3].split("__")[1] !== splitTaxonomy[2].split("__")[1] ? splitTaxonomy[3].split("__")[1] : "";
          const family = splitTaxonomy[4] && splitTaxonomy[4].split("__")[0] === "f" && splitTaxonomy[4].split("__")[1] !== splitTaxonomy[3].split("__")[1] ? splitTaxonomy[4].split("__")[1] : "";
          const genus = splitTaxonomy[5] && splitTaxonomy[5].split("__")[0] === "g" && splitTaxonomy[5].split("__")[1] !== splitTaxonomy[4].split("__")[1] ? splitTaxonomy[5].split("__")[1] : "";
          const species = record['GTDB species'].split("__")[1];
          const specificEpithet = species.split(" ")[1];
          // References url: https://gtdb.ecogenomic.org/tree?r=s__CG10238-14%20sp002789635
      
          callback(null, `${_.get(record, 'Representative genome')}\t${kingdom}\t${phylum}\t${class_}\t${order}\t${family}\t${genus}\t${species}\t${specificEpithet}\tspecies\tICNB\t${_.get(record, 'Representative genome')}\t${"https://gtdb.ecogenomic.org/tree?r="+record['GTDB species']}\t${"https://gtdb.ecogenomic.org/tree?r="+record['GTDB species']}\n`)
      }, {
        parallel: 5
      })
      return new Promise(async (resolve, reject) => {
        var readStream = fs.createReadStream(`data/sp_clusters_r${version}.tsv`);
      
        readStream.on('end', () => {
            resolve()
        })
        readStream.pipe(parser).pipe(transformer).pipe(fs.createWriteStream('archive/taxon_data.txt'))
      })
      
}

const writeSynonyms = () => {
    const parser = parse({
        delimiter: '\t',
        columns: true,
        ltrim: true, 
        rtrim: true,
        quote: null,
        relaxColumnCount: true
        // skip_lines_with_error: true
      
      })
      const transformer = transform(function(record, callback){
          let row = "";
          // There will be a row with headers as files are concatted, skip that line
          if(record['Synonym type'] !== 'Synonym type' && record['GTDB species'] !== 'GTDB species'){
            const species = record['Synonym'].split("__")[1];
            const specificEpithet = species.split(" ")[1];
              row = `${_.get(record, 'Highest-quality synonym genome')}\t\t\t\t\t\t\t${species}\t${specificEpithet}\tspecies\tICNB\t${_.get(record, 'GTDB representative')}\t\t\n`;
          }
      
          callback(null, row)
      }, {
        parallel: 5
      })
      return new Promise(async (resolve, reject) => {
        var readStream = fs.createReadStream('data/synonyms.tsv');
        readStream.on('end', () => {
            resolve()
        })
      
        readStream.pipe(parser).pipe(transformer).pipe(fs.createWriteStream('archive/synonym_data.txt'))
      })
}


const run = async ()=> {
    const {version} = config;
    let pubDate = new Date().toISOString().split('T')[0];
      const eml = getEml(pubDate, version)
      fs.writeFile("archive/eml.xml", eml, 'utf8', (err)=>{
        if(err){
          console.log(err)
          // the build must fail if no eml
          throw err
        } else {
          console.log(`EML Done. PubDate ${pubDate} version ${version}`) 
        }
      })
    try {
        download(); // should be synchronous
        await writeTaxon(version);
        await writeSynonyms();
        execSync(`cat archive/taxon_data.txt archive/synonym_data.txt > archive/taxon.txt`, { stdio: 'ignore' },(err, stdout, stderr) => {
            if (err) {
              console.log(err)
              return;
            }
        });

    } catch (err) {
        console.log(err)
    }
}

run()




