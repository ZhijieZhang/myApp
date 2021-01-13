import React, { useEffect, useRef } from 'react';
import './ExploreContainer.css';
import WebViewer from '@pdftron/webviewer';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const ref = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.xod',
      },
      ref.current as unknown as HTMLElement,
    ).then((instance) => {
    });
  }, [])

  return (
    <div className="container" ref={ref}>
    </div>
  );
};

export default ExploreContainer;
