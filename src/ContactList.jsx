import { css } from '@emotion/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'

export default function ContactList({ searchText }) {
    const contacts = useLoaderData() ?? [];
    const filteredContacts = contacts.filter(contact => {
        const { first, last } = contact.name;
        return first.toLowerCase().includes(searchText.toLowerCase()) || last.toLowerCase().includes(searchText.toLowerCase());
    })
    console.log("contacts:", contacts);
    console.log("filteredContacts: ", filteredContacts);
    return <ul css={css`list-style-type: none`}>
        {filteredContacts?.length ? filteredContacts.map(contact => {
            let { id: { value }, name: { first, last } } = contact;
            return <li key={value} css={css`margin:5px;`}>
                <NavLink css={css`text-decoration: none; width: 100%;display:block;padding: 2px; color: teal;
                  &.active {
                    ${'' /* background-color: teal; */}
                    color: white;
                  }
                `} to={`/contacts/${value}`}>
                    {`${first} ${last}`}
                </NavLink>
                {/* <NavLink css={css({
                    textDecoration: "none", width: "100 %", display: "block", padding: "2px", color: "teal",
                    "&.active": {
                        backgroundColor: "teal",
                        color: "white"
                    }
                })} to={`/contacts/${value}`}>
                    {`${first} ${last}`}
                </NavLink> */}
            </li>
        }) : null}
    </ul>
}
