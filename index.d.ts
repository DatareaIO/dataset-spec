import { MultiPolygon } from '@types/geojson';

declare namespace datarea {

  /**
   * Definition for dataset file
   */
  interface DatasetFile {

    /**
     * file name
     * @type {String}
     */
    name: String;

    /**
     * file url
     * @type {String}
     */
    url: String

    /**
     * file format (optional)
     * @type  {String}
     */
    format?: String;

    /**
     * file description (optional)
     * @type {String}
     */
    description?: String;

    /**
     * file extension without dot (optional)
     * @type {String}
     */
    extension?: String;
  }

  /**
   * Definition for dataset
   */
  interface Dataset {

    /**
     * dataset name
     * @type {String}
     */
    name: String;

    /**
     * universal unique id for this dataset in the portal
     */
    uuid: String;

    /**
     * data portal name
     * @type {String}
     */
    portal: String;

    /**
     * dateset updated time
     * @type {Date}
     */
    updatedTime: Date;

    /**
     * dataset url on the portal
     * @type {String}
     */
    url: String;

    /**
     * dataset publisher
     * @type {String}
     */
    publisher: String;

    /**
     * dataset tags
     * @type {Array<String>}
     */
    tags: Array<String>;

    /**
     * dataset categories
     * @type {Array<String>}
     */
    categories: Array<String>;

    /**
     * dataset files
     * @type {Array<DatasetFile>}
     */
    files: Array<DatasetFile>;

    /**
     * original dataset metadata
     * @type {Object}
     */
    raw: Object;

    /**
     * version number of current metadata
     */
    version: Number;

    /**
     * dataset created time (optional)
     * @type {Date}
     */
    createdTime?: Date;

    /**
     * dataset description (optional)
     * @type {String}
     */
    description?: String;

    /**
     * dataset publication license (optional)
     * @type {String}
     */
    license?: String;

    /**
     * data portal platform name
     * @type {String}
     */
    platform?: String;

    /**
     * dataset coverage region (optional)
     * @type {MultiPolygon}
     */
    region?: MultiPolygon;
  }

}
