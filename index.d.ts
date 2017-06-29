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
     * file format
     * @type  {String}
     */
    format: String;

    /**
     * file extension without dot (optional)
     * @type {String}
     */
    extension?: String;

    /**
     * file url (optional)
     * @type {String}
     */
    url?: String
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
     * dataset created time (optional)
     * @type {Date}
     */
    createdTime?: Date;

    /**
     * dataset data url (optional)
     * @type {String}
     */
    dataUrl?: String;

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
     * dataset publisher (optional)
     * @type {String}
     */
    publisher?: String;

    /**
     * dataset coverage region (optional)
     * @type {MultiPolygon}
     */
    region?: MultiPolygon;
  }

}
