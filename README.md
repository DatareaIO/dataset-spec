# Dataset Specification

This is the specification of dataset metadata for [SingularData.net](https://github.com/SingularData/SingularData.net). The aim of this specification is to provide a standard to describe the information of a dataset across all applications developed under [SingularData](https://github.com/SingularData) including the [website](https://github.com/SingularData/datarea.io) and the [data pipeline](https://github.com/SingularData/data-pipeline). Note that this specification is an abstraction of various data sources used in datarea.io and doesn't attempt to be as detailed as possible.

The dataset specification follows [JSON schema](http://json-schema.org/) with properties defined using [TypeScript Type Declaration](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) format (see [source code](https://github.com/SingularData/dataset-spec/blob/master/index.d.ts)).

Version: alpha

## Specification

* [Portal](spec/portal.md)

* [Dataset](spec/dataset.md)

* [Dataset File](spec/dataset-file.md)

## Source

* [Project Open Data Metadata Schema](https://project-open-data.cio.gov/v1.1/schema/#dataset). Used by [ArcGIS Open Data](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-arcgis-md) and [DKAN](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-dkan-md)

* [CKAN](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-ckan-md)

* [GeoNode](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-geonode-md)

* [Junar](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-junar-md)

* [OpenDataSoft](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-opendatasoft-md)

* [Socrata](https://gist.github.com/haoliangyu/2f2762d7288ca13a1a64283d15ffb3ba#file-sorata-md)
