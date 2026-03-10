import { useState } from 'react'
import './App.css'
import Header from './Header'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import ArticleView from "./ArticleView"

function App() {

  const [articleState, setArticleState] = useState(null)

  return (
    <>
    {!articleState ? 
      <div>
        <Header />
        <TopSection setArticleState = {setArticleState}/>
        <BottomSection setArticleState = {setArticleState}/>
      </div> :
        <ArticleView/>
    }
    </>
  )
}

export default App
