import { Point, MultiPolygon } from 'geojson';

/**
 * Definition for data portal
 */
export interface Portal {

  /**
   * portal name
   * @type {string}
   */
  name: string;

  /**
   * portal url
   * @type {string}
   */
  url: string;

  /**
   * portal description
   * @type {string}
   */
  description?: string;

  /**
   * portal platform
   * @type {strint}
   */
  platform?: string;

  /**
   * portal location
   * @type {strint}
   */
  location?: string;

  /**
   * geometry of the portal location
   * @type {strint}
   */
  geometry?: Point;
}

/**
 * Definition for dataset file
 */
export interface DatasetFile {

  /**
   * file name
   * @type {string}
   */
  name: string;

  /**
   * file url
   * @type {string}
   */
  url: string

  /**
   * file format (optional)
   * @type  {string}
   */
  format?: string;

  /**
   * file description (optional)
   * @type {string}
   */
  description?: string;

  /**
   * file extension without dot (optional)
   * @type {string}
   */
  extension?: string;
}

/**
 * Definition for dataset
 */
export interface Dataset {

  /**
   * dataset name
   * @type {string}
   */
  name: string;

  /**
   * universal unique id for this dataset in the portal
   */
  uuid: string;

  /**
   * data portal name
   * @type {string}
   */
  portal: string;

  /**
   * dateset updated time
   * @type {Date}
   */
  updated: Date;

  /**
   * dataset url on the portal
   * @type {string}
   */
  url: string;

  /**
   * dataset publisher
   * @type {string}
   */
  publisher: string;

  /**
   * dataset tags
   * @type {Array<string>}
   */
  tags: Array<string>;

  /**
   * dataset categories
   * @type {Array<string>}
   */
  categories: Array<string>;

  /**
   * dataset files
   * @type {Array<DatasetFile>}
   */
  files: Array<DatasetFile>;

  /**
   * version number of current metadata
   */
  version: number;

  /**
   * dataset created time (optional)
   * @type {Date}
   */
  created?: Date;

  /**
   * dataset description (optional)
   * @type {string}
   */
  description?: string;

  /**
   * dataset publication license (optional)
   * @type {string}
   */
  license?: string;

  /**
   * data portal platform name
   * @type {string}
   */
  platform?: string;

  /**
   * dataset coverage region (optional)
   * @type {MultiPolygon}
   */
  region?: MultiPolygon;

  /**
   * original dataset metadata (optional)
   * @type {Object}
   */
  raw?: Object;
}
