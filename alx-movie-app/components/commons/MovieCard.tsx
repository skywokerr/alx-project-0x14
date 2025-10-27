import React from 'react';

interface MovieCardProps {
  title: string;
  posterUrl: string;
  releaseDate?: string;
  rating?: number;
  overview?: string;
  onClick?: () => void;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterUrl,
  releaseDate,
  rating,
  overview,
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img 
        src={posterUrl} 
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        
        {(releaseDate || rating) && (
          <div className="flex justify-between items-center mb-2">
            {releaseDate && (
              <span className="text-sm text-gray-600">
                {new Date(releaseDate).getFullYear()}
              </span>
            )}
            {rating && (
              <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                ⭐ {rating.toFixed(1)}
              </span>
            )}
          </div>
        )}
        
        {overview && (
          <p className="text-gray-600 text-sm line-clamp-3">{overview}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;