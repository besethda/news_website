import { useState } from 'react'
import './App.css'
import Header from './Header'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import ArticleView from "./ArticleView"

function App() {

  const [articleState, setArticleState] = useState(null)
  const [usedCategory, setUsedCategory] = useState(null)

  return (
    <>
      <Header articleState={articleState} setArticleState={setArticleState}/>
    {!articleState ? 
      <div>
        <TopSection setArticleState = {setArticleState}/>
        <BottomSection setArticleState = {setArticleState}/>
      </div> :
        <ArticleView articleState ={articleState} setArticleState={setArticleState}/>
    }
    </>
  )
}

export default App
