import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const error = () => (
    <div>
        <h1>Something went wrong!</h1>
        <p>Go to <Link href="/"><a>Main</a></Link></p>
    </div>
)

export default error;