import React from 'react';
import Link from 'next/link';

import User from '../../components/User';


const authIndexPage = (props) => (
    <div>
        <h1>Auth index page - {props.appName}</h1>
        <p>Go to <Link href="/"><a>Main</a></Link></p>
        <User name="testName" age={28}/>
    </div>
);

authIndexPage.getInitialProps = context => {
    console.log(context); 
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve({appName: "SUPER APP (Auth)"}), 1000);
    });
    return promise;
}

export default authIndexPage;