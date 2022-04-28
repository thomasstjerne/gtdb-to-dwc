module.exports = (pubDate, version) => `<eml:eml
xmlns:eml="eml://ecoinformatics.org/eml-2.1.1"
xmlns:dc="http://purl.org/dc/terms/"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="eml://ecoinformatics.org/eml-2.1.1 http://rs.gbif.org/schema/eml-gbif-profile/1.1/eml.xsd"
     packageId="aba95c0d-431e-435a-a419-6bd6c5c4ca28/v1.92" system="http://gbif.org" scope="system"
     xml:lang="eng">
<dataset>
    <title xml:lang="eng">Genome Taxonomy Database r${version}</title>
    <creator>
        <individualName>
            <givenName>Donovan</givenName>
            <surName>Parks</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Dr</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>donovan.parks@gmail.com</electronicMailAddress>
        <userId directory="http://orcid.org/">0000-0001-6662-9010</userId>
        <onlineUrl>https://ecogenomic.org/personnel/dr-donovan-parks</onlineUrl>
    </creator>
    <creator>
        <individualName>
            <givenName>Phil</givenName>
            <surName>Hugenholtz</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Professor</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>p.hugenholtz@uq.edu.au</electronicMailAddress>
        <userId directory="http://orcid.org/">0000-0001-5386-7925</userId>
        <onlineUrl>https://ecogenomic.org/personnel/prof-phil-hugenholtz</onlineUrl>
    </creator>
     <metadataProvider>
        <individualName>
            <givenName>Donovan</givenName>
            <surName>Parks</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Dr</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>donovan.parks@gmail.com</electronicMailAddress>
        <userId directory="http://orcid.org/">0000-0001-6662-9010</userId>
        <onlineUrl>https://ecogenomic.org/personnel/dr-donovan-parks</onlineUrl>
    </metadataProvider>
    <metadataProvider>
        <individualName>
            <givenName>Phil</givenName>
            <surName>Hugenholtz</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Professor</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>p.hugenholtz@uq.edu.au</electronicMailAddress>
        <userId directory="http://orcid.org/">0000-0001-5386-7925</userId>
        <onlineUrl>https://ecogenomic.org/personnel/prof-phil-hugenholtz</onlineUrl>
    </metadataProvider>
    
    <associatedParty>
        <individualName>
            <givenName>Pierre</givenName>
            <surName>Chaumeil</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Software developer</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>p.chaumeil@qfab.org</electronicMailAddress>
        <onlineUrl>https://ecogenomic.org/personnel/mr-pierre-chaumeil</onlineUrl>
        <role>user</role>
    </associatedParty>
    <pubDate>
  ${pubDate}
</pubDate>
    <language>dan</language>
    <abstract>
        <para>The Genome Taxonomy Database (GTDB) is an initiative to establish a standardised microbial taxonomy based on genome phylogeny, primarly funded by an Australian Research Council Laureate Fellowship. 

The genomes used to construct the phylogeny are obtained from RefSeq and Genbank, and GTDB releases are indexed to RefSeq releases, starting with release 76. Importantly and increasingly, this dataset includes draft genomes of uncultured microorganisms obtained from metagenomes and single cells, ensuring improved genomic representation of the microbial world. All genomes are independently quality controlled using CheckM before inclusion in GTDB, see statistics here. 

The genome tree on which the taxonomy is based is inferred using FastTree from an aligned concatenated set of 120 single copy marker proteins for Bacteria, and 122 marker proteins for Archaea (download page here). Additional marker sets are also used to cross-validate tree topologies including concatenated ribosomal proteins and ribosomal RNA genes.

NCBI taxonomy was initially used to decorate the genome tree via tax2tree. The 16S rRNA-based Greengenes taxonomy is used to supplement the taxonomy particularly in regions of the tree with no cultured representatives. LPSN is used as the primary taxonomic authority for establishing naming priorities. Taxonomic ranks are normalised using phylorank and the taxonomy manually curated to remove polyphyletic groups. Polyphyly and rank evenness can be visualised in phylorank plots.

The GTDB taxonomy can be queried and downloaded through a number of tools at https://gtdb.ecogenomic.org/</para>
    </abstract>
    <keywordSet>
        <keyword>checklist</keyword>
        <keywordThesaurus>GBIF Dataset Type Vocabulary: http://rs.gbif.org/vocabulary/gbif/dataset_type.xml</keywordThesaurus>
    </keywordSet>
    <keywordSet>
        <keyword>globalSpeciesDataset</keyword>
        <keywordThesaurus>GBIF Dataset Subtype Vocabulary: http://rs.gbif.org/vocabulary/gbif/dataset_subtype.xml</keywordThesaurus>
    </keywordSet>
    <intellectualRights>
        <para>This work is licensed under a 
            
            
            
            <ulink url="http://creativecommons.org/licenses/by/4.0/legalcode">
                <citetitle>Creative Commons Attribution (CC-BY) 4.0 License</citetitle>
            </ulink>.
        
        
        
        </para>
    </intellectualRights>
    <distribution scope="document">
        <online>
            <url function="information">http://gtdb.ecogenomic.org/</url>
        </online>
    </distribution>
    <coverage>
        <taxonomicCoverage>
            <taxonomicClassification>
                <taxonRankName>domain</taxonRankName>
                <taxonRankValue>Bacteria</taxonRankValue>
                <commonName>Bacteria</commonName>
                <taxonRankName>domain</taxonRankName>
                <taxonRankValue>Archaea</taxonRankValue>
                <commonName>Archaea</commonName>
            </taxonomicClassification>
        </taxonomicCoverage>
    </coverage>
    <maintenance>
        <description>
            <para></para>
        </description>
        <maintenanceUpdateFrequency>asNeeded</maintenanceUpdateFrequency>
    </maintenance>
    <contact>
   
     <individualName>
            <givenName>Donovan</givenName>
            <surName>Parks</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Dr</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>donovan.parks@gmail.com</electronicMailAddress>
        <userId directory="http://orcid.org/">0000-0001-6662-9010</userId>
        <onlineUrl>https://ecogenomic.org/personnel/dr-donovan-parks</onlineUrl>
         </contact>
    <contact>
        <individualName>
            <givenName>Phil</givenName>
            <surName>Hugenholtz</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Professor</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>p.hugenholtz@uq.edu.au</electronicMailAddress>
        <userId directory="http://orcid.org/">0000-0001-5386-7925</userId>
        <onlineUrl>https://ecogenomic.org/personnel/prof-phil-hugenholtz</onlineUrl>
    </contact>
    <contact>
        <individualName>
            <givenName>Pierre</givenName>
            <surName>Chaumeil</surName>
        </individualName>
        <organizationName>Australian Centre for Ecogenomics</organizationName>
        <positionName>Software developer</positionName>
        <address>
            <country>AU</country>
        </address>
        <electronicMailAddress>p.chaumeil@qfab.org</electronicMailAddress>
        <onlineUrl>https://ecogenomic.org/personnel/mr-pierre-chaumeil</onlineUrl>
    </contact>
</dataset>
<additionalMetadata>
<metadata>
<gbif>
          <bibliography>
            
            <citation identifier="DOI:10.1038/s41587-020-0501-8">Parks, D.H., et al. (2020). A complete domain-to-species taxonomy for Bacteria and Archaea. Nature Biotechnology</citation>
            <citation identifier="DOI:10.1038/nbt.4229">Parks, D.H., et al. (2018). A standardized bacterial taxonomy based on genome phylogeny substantially revises the tree of life. Nature Biotechnology, 36: 996-1004</citation>

      </bibliography>
</gbif>

</metadata>
</additionalMetadata>
</eml:eml>
`