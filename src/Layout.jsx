import React from 'react'
import { useState } from 'react'
import './App.css'
import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'
import ContactList from './ContactList'
import { useRef } from 'react'

function Header({ onSearch }) {
  const searchElementRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    onSearch(searchElementRef.current.value);
  }


  return <header css={css`
      border-bottom: 1px solid;
      border-color: #EEEEEE;
      padding: 16px;

    `}>
    <form action="" onSubmit={onSubmit} css={css`
        display:flex;
        justify-content:space-evenly;  
      `}>
      <input type="text" ref={searchElementRef} onChange={onSubmit} css={css`
        padding: 5px;
      `} />
      <button>Search</button>
    </form>
  </header>
}

function Sidenav() {
  const [searchText, setSearchText] = useState("");
  function onSearch(text) {
    setSearchText(text);
  }

  return <aside css={css`
    border-right: 1px solid;
    display:grid;
    grid-template-rows: auto 1fr auto;
  `}>
    <Header onSearch={onSearch} />
    <section css={css`
    padding: 12px;
    height: 78vh;
    overflow: auto;
    `}>
      <ContactList searchText={searchText} />
    </section>
    <footer css={css`
      border-top: 1px solid;
      border-color: #EEEEEE;
      padding: 12px;
    `}></footer>
  </aside>
}

function Contents() {
  return <>
    <section css={css`
    padding: 12px;
    `}><Outlet /></section>
  </>
}

export function Layout() {  //note, no default keyword
  return <>
    <main css={css`
    display: grid;
    grid-template-columns: minmax(250px, 25%) 1fr;
    height:100%;
    `}>
      <Sidenav />
      <Contents />
    </main>
  </>
}



