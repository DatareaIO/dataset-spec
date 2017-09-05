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
  spatial?: Point;
}

/**
 * Represents a specific available form of a dataset. Each dataset might be available in different forms, these forms might represent different formats of the dataset or different endpoints. Examples of distributions include a downloadable CSV file, an API or an RSS feed
 */
export interface Distribution {

  /**
   * file name
   * @type {string}
   */
  title: string;

  /**
   * A landing page, feed, SPARQL endpoint or other type of resource that gives access to the distribution of the dataset
   * @type {string}
   */
  accessURL: string

  /**
   * A file that contains the distribution of the dataset in a given format. This url is not attached if there is no URL pointed to a file.
   * @type {string}
   */
  downloadURL?: string

  /**
   * The file format of the distribution. This is only usable when the downloadURL exists.
   * @type  {string}
   */
  format?: string;

  /**
   * file description (optional)
   * @type {string}
   */
  description?: string;
}

/**
 * Definition for dataset
 */
export interface Dataset {

  /**
   * dataset title
   * @type {string}
   */
  title: string;

  /**
   * universal unique id for this dataset in the portal
   * @type {string}
   */
  identifier: string;

  /**
   * data portal name
   * @type {string|Portal}
   */
  portal: string|Portal;

  /**
   * Most recent date on which the dataset was changed, updated or modified.
   * @type {Date}
   */
  modified: Date;

  /**
   * A Web page that can be navigated to in a Web browser to gain access to the dataset, its distributions and/or additional information.
   * @type {string}
   */
  landingPage: string;

  /**
   * An entity responsible for making the dataset available.
   * @type {string}
   */
  publisher: string;

  /**
   * A keyword or tag describing the dataset.
   * @type {Array<string>}
   */
  keyword: Array<string>;

  /**
   * The main category of the dataset. A dataset can have multiple themes.
   * @type {Array<string>}
   */
  theme: Array<string>;

  /**
   * dataset files
   * @type {Array<Distribution>}
   */
  distribution: Array<Distribution>;

  /**
   * version number of current metadata
   */
  version: number;

  /**
   * Date of formal issuance (e.g., publication) of the dataset.
   * @type {Date}
   */
  issued?: Date;

  /**
   * Free-text account of the dataset.
   * @type {string}
   */
  description?: string;

  /**
   * This links to the license document under which the distribution is made available.
   * @type {string}
   */
  license?: string;

  /**
   * Spatial coverage of the dataset.
   * @type {MultiPolygon}
   */
  spatial?: MultiPolygon;

  /**
   * original dataset metadata (optional)
   * @type {Object}
   */
  raw?: Object;
}
