import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='app-root not-found-page__content'>
      404 - <Link to='/'>Go home</Link>
    </div>
  );
}

export default NotFoundPage;
