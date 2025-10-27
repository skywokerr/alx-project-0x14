import { NextApiRequest, NextApiResponse } from 'next';

// Mock movie data - in a real app, you would fetch from an actual API
const mockMovies = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    releaseDate: "2010-07-16",
    rating: 8.8,
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    releaseDate: "1994-09-23",
    rating: 9.3,
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-18",
    rating: 9.0,
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    releaseDate: "1994-10-14",
    rating: 8.9,
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    id: 5,
    title: "Forrest Gump",
    posterUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    releaseDate: "1994-06-23",
    rating: 8.8,
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
  },
  {
    id: 6,
    title: "The Matrix",
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    releaseDate: "1999-03-31",
    rating: 8.7,
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { page = '1', search = '' } = req.query;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredMovies = mockMovies;
    
    // Filter by search query if provided
    if (search && typeof search === 'string') {
      filteredMovies = mockMovies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Simple pagination
    const pageNumber = parseInt(page as string);
    const pageSize = 4;
    const startIndex = (pageNumber - 1) * pageSize;
    const paginatedMovies = filteredMovies.slice(startIndex, startIndex + pageSize);
    
    res.status(200).json({
      movies: paginatedMovies,
      totalPages: Math.ceil(filteredMovies.length / pageSize),
      currentPage: pageNumber,
      totalMovies: filteredMovies.length
    });
    
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}