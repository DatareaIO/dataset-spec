# Datarea.io Dataset Specification

This is the specification of dataset metadata for [Datarea.io](https://github.com/DatareaIO/datarea.io). The aim of this specification is to provide a standard to describe the information of a dataset across all applications developed under [DatareaIO](https://github.com/DatareaIO) including the [website](https://github.com/DatareaIO/datarea.io) and the [data pipeline](https://github.com/DatareaIO/datarea-pipeline). Note that this specification is an abstraction of various data sources used in datarea.io and doesn't attempt to be as detailed as possible.

The dataset specification follows [JSON schema](http://json-schema.org/) with properties defined using [TypeScript Type Declaration](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) format (see [source code](https://github.com/DatareaIO/dataset-spec/blob/master/index.d.ts)).

Version: alpha

**Table of Content**

* [Dataset](#dataset)

* [Dataset File](#dataset-file)

* [Source](#source)

## Dataset

**Dataset** is a collection of data files that are about one specific topic and published by one organization or individual

### Required Properties

* **name**

  dataset name

* **uuid**

  universal unique dataset ID for this portal

* **portal**

  name of the portal where this dataset is published

* **updated**

  the latest updated time for this dataset

* **url**

  url of this dataset at the publication portal

* **publisher**

  publisher of this dataset. If the portal doesn't provide the publisher, the portal name will be used.

* **tags**

  an array of tags that attached to this dataset

* **categories**

  an array of categories that this dataset belongs to

* **files**

  an array of files (defined with [Dataset File Specification]) associated with this dataset

* **raw**

  the raw dataset metadata in JSON from the source portal

* **version**

  version number of current metadata. Note that the version number usually starts at 2 because the initial version is not retrievable.

### Optional Properties

* **created**

  the time when this dataset was first created or published. This is not a require property because some portals don't provide the created time for their datasets.

* **description**

  detail description of the dataset

* **license**

  publication license for this dataset

* **platform**

  name of platform that the data portal belongs to

* **region**

  a Multi-Polygon GeoJSON geometry that represents the bbox or coverage of this dataset

## Dataset File

**Dataset File** is a file that is associated with a specific dataset.

### Require Properties

* **name**

  dataset file name

* **url**

  dataset file url

### Optional Properties

* **description**

  dataset file description

* **format**

  dataset file format

* **extension**

  dataset file format extension if any (without dot)

## Source

* [Project Open Data Metadata Schema](https://project-open-data.cio.gov/v1.1/schema/#dataset). Used by [ArcGIS Open Data](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-arcgis-md) and [DKAN](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-dkan-md)

* [CKAN](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-ckan-md)

* [GeoNode](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-geonode-md)

* [Junar](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-junar-md)

* [OpenDataSoft](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-opendatasoft-md)

* [Socrata](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-sorata-md)
