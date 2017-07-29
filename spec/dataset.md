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
