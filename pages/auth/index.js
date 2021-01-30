import React from 'react';
import Link from 'next/link';

import User from '../../components/User';

const authIndexPage = () => {
    console.log("test");
    return (
    <div>
        <h1>Auth index page</h1>
        <p>Go to <Link href="/"><a>Main</a></Link></p>
        <User name="testName" age={28}/>
    </div>
    )
}

export default authIndexPage;