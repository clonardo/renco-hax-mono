import React from 'react';
import './explore.scss';

interface ContainerProps {
  name: string;
}

/**
 * Placeholder for more interesting things
 */
export const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};