import { css } from '@emotion/react';
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Contact() {
    const contact = useLoaderData();
    const { name: { first, last }, id: { value }, email, cell, picture: { large } } = contact;
    console.log(contact);
    return <>
        <h1 css={css`
            text-align: center;
            margin: 30px;
        `}>Contact Information</h1>
        <section css={css`
        display:flex;
        flex-wrap: wrap;
        `}>
            <img src={large} alt="profile image" css={css`
                margin: 16px;
                width: 200px;
            `} />
            <div css={css`
                margin-left: 10px;
                margin-right:10px;
                font-size:16px;
                
            `}>
                <h1>{first} {last}</h1>
                <p><pre>ID      : {value}</pre></p>
                <p><pre>Cell No.: {cell}</pre></p>
                <p><pre>Email   : {email}</pre></p>
            </div>
        </section>
    </>
}
