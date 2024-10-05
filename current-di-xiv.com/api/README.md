# Di-XIV API Documentation

## Deployments

```sh
npm run deploy
```

## Introduction

The Di-XIV API provides endpoints to retrieve information about galleries, artworks, tags, and references. It is designed to help applications fetch structured data related to galleries, artworks, and reference images.

## Base URL

The base URL for the API is: `https://api.di-xiv.com` All endpoints are relative to this base URL.

## Endpoints

### 1. Get Galleries with Artworks

- **Description**: Retrieves galleries with their associated artworks. The response includes details about the artworks, their ratings, tags, and the artist who created the artwork.
- **Method**: `GET`
- **Endpoint**: `/gallery`
- **Query Parameters**:
- `include_rating_id` (optional): A comma-separated list of rating IDs to filter galleries that contain artworks with these ratings.
- `include_tag_id` (optional): A comma-separated list of tag IDs to filter galleries that contain artworks with these tags.
- **Example Request**:

```http
GET https://api.di-xiv.com/gallery?include_rating_id=1&include_tag_id=12
```

- **Response Structure**:

```json
[
  {
    "gallery_id": 3,
    "gallery_name": "Aug 2023: Attire One Sketch",
    "artworks": [
      {
        "artwork_id": 6,
        "artwork_url": "https://cw.di-xiv.com/twitter/romupand/aug-2023/romupand-aug2023-clothed.avif",
        "rating": {
          "rating_id": 1,
          "rating_name": "sfw"
        },
        "tags": [
          {
            "tag_id": 7,
            "tag_name": "solo",
            "rating_id": 1
          },
          {
            "tag_id": 11,
            "tag_name": "pin-up",
            "rating_id": 1
          },
          {
            "tag_id": 12,
            "tag_name": "fullbody",
            "rating_id": 1
          },
          {
            "tag_id": 24,
            "tag_name": "attire",
            "rating_id": 1
          },
          {
            "tag_id": 27,
            "tag_name": "non-canon representation",
            "rating_id": 2
          },
          {
            "tag_id": 33,
            "tag_name": "tattoos",
            "rating_id": 1
          }
        ],
        "artist": {
          "artist_id": 7,
          "artist_name": "Romupand",
          "website": "https://romucommss.carrd.co/"
        }
      }
    ],
    "rating": {
      "rating_id": 1,
      "rating_name": "sfw"
    }
  }
]
```

- **Errors**:
- `500 Internal Server Error`: If there is an issue with the database query.

### 2. Get Artworks

- **Description**: Retrieves information about specific artworks, including the artist's name and website.
- **Method**: `GET`
- **Endpoint**: `/artworks`
- **Query Parameters**:
- `artwork_id` (required): A comma-separated list of artwork IDs.
- **Example Request**:

```http
GET https://api.di-xiv.com/artworks?artwork_id=101,102
```

- **Response Structure**:

```json
[
  {
    "artwork_url": "https://cw.di-xiv.com/twitter/ayaben/oct2023/ayaben-fullbody-bw.avif",
    "artist_name": "ayaben",
    "artist_website": "https://ayaben.carrd.co"
  },
  {
    "artwork_url": "https://cw.di-xiv.com/skeb/fuwakura/sept2024/2446265-2.webp",
    "artist_name": "fuwakura_3",
    "artist_website": "https://www.pixiv.net/en/users/101421288"
  }
]
```

- **Errors**:
- `400 Bad Request`: If `artwork_id` is missing.
- `404 Not Found`: If the requested artworks are not found.
- `500 Internal Server Error`: If there is an issue with the database query.

### 3. Get Tags

- **Description**: Retrieves tags and their associated ratings.
- **Method**: `GET`
- **Endpoint**: `/tags`
- **Query Parameters**:
- `rating_id` (optional): Filter the tags by a specific rating ID.
- `tag_id` (optional): Filter the tags by a specific tag ID.
- **Example Request**:

```http
GET https://api.di-xiv.com/tags?rating_id=1
```

- **Response Structure**:

```json
[
  {
    "tag_id": 6,
    "tag_name": "gpose",
    "rating_id": 1
  },
  {
    "tag_id": 7,
    "tag_name": "solo",
    "rating_id": 1
  },
  {
    "tag_id": 8,
    "tag_name": "sketch",
    "rating_id": 1
  },
  {
    "tag_id": 10,
    "tag_name": "group",
    "rating_id": 1
  },
  {
    "tag_id": 11,
    "tag_name": "pin-up",
    "rating_id": 1
  },
  {
    "tag_id": 12,
    "tag_name": "fullbody",
    "rating_id": 1
  },
  {
    "tag_id": 13,
    "tag_name": "halfbody",
    "rating_id": 1
  },
  {
    "tag_id": 14,
    "tag_name": "portrait",
    "rating_id": 1
  },
  {
    "tag_id": 24,
    "tag_name": "attire",
    "rating_id": 1
  },
  {
    "tag_id": 26,
    "tag_name": "story",
    "rating_id": 1
  },
  {
    "tag_id": 32,
    "tag_name": "animated",
    "rating_id": 1
  },
  {
    "tag_id": 33,
    "tag_name": "tattoos",
    "rating_id": 1
  }
]
```

- **Errors**:
- `500 Internal Server Error`: If there is an issue with the database query.

### 4. Get References

- **Description**: Retrieves reference galleries and their associated reference images.
- **Method**: `GET`
- **Endpoint**: `/references`
- **Query Parameters**:
- `include_reference_gallery_name` (optional): A comma-separated list of gallery names to include in the results.
- `exclude_reference_gallery_name` (optional): A comma-separated list of gallery names to exclude from the results.
- **Example Request**:

```http
GET https://api.di-xiv.com/references?include_reference_gallery_name=Hairstyle:%20Fifthteen
```

- **Response Structure**:

```json
[
  {
    "referencegallery_id": 6,
    "reference_gallery_name": "Hairstyle: Fifthteen",
    "reference_images": [
      {
        "referenceimage_id": 24,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/1.avif"
      },
      {
        "referenceimage_id": 25,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/2.avif"
      },
      {
        "referenceimage_id": 26,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/3.avif"
      },
      {
        "referenceimage_id": 27,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/4.avif"
      },
      {
        "referenceimage_id": 28,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/5.avif"
      },
      {
        "referenceimage_id": 29,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/6.avif"
      },
      {
        "referenceimage_id": 30,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/7.avif"
      },
      {
        "referenceimage_id": 31,
        "reference_imageurl": "https://refs.di-xiv.com/hairstyles/fifthteen/8.avif"
      }
    ]
  }
]
```

- **Errors**:
- `500 Internal Server Error`: If there is an issue with the database query.

## Error Handling

The API responds with standard HTTP status codes to indicate the success or failure of the request:

- **200 OK**: The request was successful, and the response contains the expected data.
- **400 Bad Request**: The request was invalid, usually because required parameters were missing or malformed.
- **404 Not Found**: The requested resource was not found.
- **500 Internal Server Error**: There was an issue processing the request on the server side, such as a database error.

## Security

The Di-XIV API does not currently require authentication. All endpoints are publicly accessible.

## Rate Limiting

No rate limiting is currently enforced by the API. Be nice motherfucker.

## Example Usage

### Example 1: Fetching Galleries with Artworks

```http
GET https://api.di-xiv.com/gallery?include_rating_id=1&include_tag_id=7
```

**Response**:

```json
[
  {
    "gallery_id": 3,
    "gallery_name": "Aug 2023: Attire One Sketch",
    "artworks": [
      {
        "artwork_id": 6,
        "artwork_url": "https://cw.di-xiv.com/twitter/romupand/aug-2023/romupand-aug2023-clothed.avif",
        "rating": {
          "rating_id": 1,
          "rating_name": "sfw"
        },
        "tags": [
          {
            "tag_id": 7,
            "tag_name": "solo",
            "rating_id": 1
          },
          {
            "tag_id": 11,
            "tag_name": "pin-up",
            "rating_id": 1
          },
          {
            "tag_id": 12,
            "tag_name": "fullbody",
            "rating_id": 1
          },
          {
            "tag_id": 24,
            "tag_name": "attire",
            "rating_id": 1
          },
          {
            "tag_id": 27,
            "tag_name": "non-canon representation",
            "rating_id": 2
          },
          {
            "tag_id": 33,
            "tag_name": "tattoos",
            "rating_id": 1
          }
        ],
        "artist": {
          "artist_id": 7,
          "artist_name": "Romupand",
          "website": "https://romucommss.carrd.co/"
        }
      }
    ],
    "rating": {
      "rating_id": 1,
      "rating_name": "sfw"
    }
  }
]
```

### Example 2: Fetching Artworks by ID

```http
GET https://api.di-xiv.com/artworks?artwork_id=101,102
```

**Response**:

```json
[
  {
    "artwork_url": "https://cw.di-xiv.com/twitter/ayaben/oct2023/ayaben-fullbody-bw.avif",
    "artist_name": "ayaben",
    "artist_website": "https://ayaben.carrd.co"
  },
  {
    "artwork_url": "https://cw.di-xiv.com/skeb/fuwakura/sept2024/2446265-2.webp",
    "artist_name": "fuwakura_3",
    "artist_website": "https://www.pixiv.net/en/users/101421288"
  }
]
```
