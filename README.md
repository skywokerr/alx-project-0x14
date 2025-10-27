# alx-project-0x14

# MoviesDatabase API Documentation

## API Overview

The MoviesDatabase API is a comprehensive RESTful service that provides access to an extensive collection of movie and TV show data. This API allows developers to retrieve detailed information about movies, TV series, actors, and related media content. Key features include real-time data updates, advanced search capabilities, filtering options, and support for multiple media formats. The API serves as a valuable resource for building movie applications, entertainment platforms, and content discovery services.

## Version

**Current API Version:** 1.0

## Available Endpoints

### Movies Endpoints
- `GET /movies` - Retrieve a list of movies with pagination and filtering options
- `GET /movies/{id}` - Get detailed information about a specific movie
- `GET /movies/search` - Search movies by title, genre, or keywords
- `GET /movies/trending` - Get currently trending movies
- `GET /movies/upcoming` - Retrieve upcoming movie releases

### TV Shows Endpoints
- `GET /tv` - Get a list of TV shows with filtering capabilities
- `GET /tv/{id}` - Retrieve detailed information about a specific TV show
- `GET /tv/search` - Search TV shows by title or genre
- `GET /tv/seasons/{id}` - Get seasons information for a TV show
- `GET /tv/episodes/{id}` - Retrieve episodes for a specific season

### People Endpoints
- `GET /people` - Get list of actors, directors, and crew members
- `GET /people/{id}` - Retrieve detailed information about a specific person
- `GET /people/search` - Search people by name

### Genres Endpoints
- `GET /genres` - Retrieve all available genres
- `GET /genres/{id}/movies` - Get movies by specific genre

### Images Endpoints
- `GET /images/{id}` - Retrieve movie or TV show images (posters, backdrops)

## Request and Response Format

### Request Format
All requests should be made using HTTPS and include the necessary headers:

```http
GET /movies/123 HTTP/1.1
Host: api.moviesdatabase.com
Authorization: Bearer your-api-key
Content-Type: application/json